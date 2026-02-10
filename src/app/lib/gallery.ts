export type SubteamKey = "ml-ai" | "software" | "hardware" | "operations";

export type GalleryImage = {
  src: string;
  year: string;
  subteam?: SubteamKey;
  filename: string;
  alt: string;
};

export type GalleryYearGroup = {
  year: string;
  images: GalleryImage[];
};

const DISPLAY_YEARS = ["2025", "2026"] as const;
const SUBTEAM_KEYS = ["ml-ai", "software", "hardware", "operations"] as const;
const rawGalleryImages = import.meta.glob("/content/gallery/**/*.{png,jpg,jpeg,webp,avif,gif,svg}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const allGalleryImages = Object.entries(rawGalleryImages)
  .map(([filePath, src]) => toGalleryImage(filePath, src))
  .filter((image): image is GalleryImage => image !== null)
  .sort(compareImages);

export function getGalleryImagesByYear(): GalleryYearGroup[] {
  const nonSubteamImages = allGalleryImages.filter((image) => image.subteam === undefined);
  const displayYears = DISPLAY_YEARS as readonly string[];
  const discoveredYears = [...new Set(nonSubteamImages.map((image) => image.year))]
    .filter((year) => !displayYears.includes(year))
    .sort();

  const years = [...displayYears, ...discoveredYears];
  return years.map((year) => ({
    year,
    images: nonSubteamImages.filter((image) => image.year === year),
  }));
}

export function getSubteamImages(subteam: SubteamKey): GalleryImage[] {
  return allGalleryImages
    .filter((image) => image.subteam === subteam)
    .sort((left, right) => {
      const yearSort = Number(right.year) - Number(left.year);
      if (yearSort !== 0) {
        return yearSort;
      }

      return left.filename.localeCompare(right.filename, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
}

function toGalleryImage(filePath: string, src: string): GalleryImage | null {
  const relativePath = filePath.replace(/^\/content\/gallery\//, "");
  if (relativePath === filePath) {
    return null;
  }

  const segments = relativePath.split("/").filter(Boolean);
  if (segments.length < 2 || segments.length > 3) {
    return null;
  }

  const [year, maybeSubteam] = segments;
  if (!/^\d{4}$/.test(year)) {
    return null;
  }

  const subteam = resolveSubteam(segments.length === 3 ? maybeSubteam : undefined);
  if (segments.length === 3 && !subteam) {
    return null;
  }

  const filenameWithExt = decodeURIComponent(segments[segments.length - 1] ?? "");
  const filename = filenameWithExt.replace(/\.[^.]+$/, "");

  return {
    src,
    year,
    subteam,
    filename,
    alt: filename,
  };
}

function resolveSubteam(value: string | undefined): SubteamKey | undefined {
  if (!value) {
    return undefined;
  }

  return (SUBTEAM_KEYS as readonly string[]).includes(value) ? (value as SubteamKey) : undefined;
}

function compareImages(left: GalleryImage, right: GalleryImage): number {
  const byYear = left.year.localeCompare(right.year, undefined, { numeric: true, sensitivity: "base" });
  if (byYear !== 0) {
    return byYear;
  }

  const leftSubteam = left.subteam ?? "";
  const rightSubteam = right.subteam ?? "";
  const bySubteam = leftSubteam.localeCompare(rightSubteam);
  if (bySubteam !== 0) {
    return bySubteam;
  }

  return left.filename.localeCompare(right.filename, undefined, { numeric: true, sensitivity: "base" });
}
