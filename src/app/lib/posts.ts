import { marked } from "marked";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
  content: string;
  html: string;
};

type FrontmatterData = Record<string, unknown>;

marked.use({
  gfm: true,
  breaks: true,
});

const rawPosts = import.meta.glob("/content/posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const posts = Object.entries(rawPosts)
  .map(([filePath, raw]) => createPost(filePath, raw))
  .filter((post): post is BlogPost => post !== null)
  .sort((a, b) => {
    const left = toTimestamp(a.date);
    const right = toTimestamp(b.date);

    if (left !== right) {
      return right - left;
    }

    return a.title.localeCompare(b.title);
  });

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }

  return [...tagSet].sort((a, b) => a.localeCompare(b));
}

function createPost(filePath: string, rawMarkdown: string): BlogPost | null {
  const slug = extractSlug(filePath);
  if (!slug || slug.startsWith("_")) {
    return null;
  }

  const { frontmatter, content } = splitFrontmatter(rawMarkdown);
  const data = parseSimpleYaml(frontmatter);

  const title = readString(data.title) ?? toTitleFromSlug(slug);
  const date = readString(data.date) ?? extractDateFromSlug(slug) ?? "";
  const author = readString(data.author) ?? "Unknown";
  const tags = readStringArray(data.tags);
  const summary = readString(data.summary) ?? toSummary(content);

  const rendered = marked.parse(content);
  const html = typeof rendered === "string" ? rendered : "";

  return {
    slug,
    title,
    date,
    author,
    tags,
    summary,
    content,
    html,
  };
}

function extractSlug(filePath: string): string {
  const fileName = filePath.split("/").pop() ?? "";
  return fileName.replace(/\.md$/i, "");
}

function splitFrontmatter(rawMarkdown: string): { frontmatter: string; content: string } {
  const trimmed = rawMarkdown.trim();
  const match = trimmed.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);

  if (!match) {
    return { frontmatter: "", content: trimmed };
  }

  return {
    frontmatter: match[1],
    content: trimmed.slice(match[0].length).trim(),
  };
}

function parseSimpleYaml(frontmatter: string): FrontmatterData {
  const data: FrontmatterData = {};
  const lines = frontmatter.split(/\r?\n/);

  let index = 0;
  while (index < lines.length) {
    const keyMatch = lines[index].match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyMatch) {
      index += 1;
      continue;
    }

    const key = keyMatch[1];
    const value = keyMatch[2].trim();

    if (value === "") {
      const listValues: string[] = [];
      index += 1;

      while (index < lines.length) {
        const listItemMatch = lines[index].match(/^\s*-\s+(.*)$/);
        if (!listItemMatch) {
          break;
        }

        const listItem = cleanStringValue(listItemMatch[1]);
        if (listItem.length > 0) {
          listValues.push(listItem);
        }

        index += 1;
      }

      data[key] = listValues;
      continue;
    }

    data[key] = parseInlineYamlValue(value);
    index += 1;
  }

  return data;
}

function parseInlineYamlValue(value: string): string | string[] {
  const trimmed = value.trim();

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => cleanStringValue(item))
      .filter((item) => item.length > 0);
  }

  return cleanStringValue(trimmed);
}

function cleanStringValue(value: string): string {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

function readString(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function readStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => readString(item))
      .filter((item): item is string => Boolean(item));
  }

  if (typeof value === "string") {
    const cleaned = value.trim();
    if (cleaned.length === 0) {
      return [];
    }

    return cleaned
      .split(",")
      .map((item) => cleanStringValue(item))
      .filter((item) => item.length > 0);
  }

  return [];
}

function extractDateFromSlug(slug: string): string | undefined {
  const match = slug.match(/^(\d{4}-\d{2}-\d{2})-/);
  return match ? match[1] : undefined;
}

function toTitleFromSlug(slug: string): string {
  return slug
    .replace(/^\d{4}-\d{2}-\d{2}-/, "")
    .split("-")
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toSummary(markdown: string): string {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[*_~>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= 160) {
    return text;
  }

  return `${text.slice(0, 157)}...`;
}

function toTimestamp(date: string): number {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}
