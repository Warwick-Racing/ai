import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Tag, User } from "lucide-react";
import { getAllPosts, getAllTags } from "@/app/lib/posts";

function formatDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState("all");
  const posts = useMemo(() => getAllPosts(), []);
  const tags = useMemo(() => getAllTags(), []);

  const filteredPosts = useMemo(() => {
    if (selectedTag === "all") {
      return posts;
    }

    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div className="pt-20">
      <section className="py-16 px-4 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">BLOG</h1>
        </div>
      </section>

      <section className="py-6 px-4 bg-black border-b border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedTag("all")}
            className={`px-3 py-1.5 border text-sm font-medium transition-colors ${
              selectedTag === "all"
                ? "border-green-500 bg-green-500 text-black"
                : "border-zinc-700 text-gray-300 hover:border-green-500 hover:text-white"
            }`}
          >
            ALL
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 border text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "border-green-500 bg-green-500 text-black"
                  : "border-zinc-700 text-gray-300 hover:border-green-500 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {filteredPosts.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 p-8 text-gray-300">
              No posts found for this tag.
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.slug} className="bg-zinc-900 border border-zinc-800 p-6 hover:border-green-500 transition-colors">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={16} className="text-green-500" />
                    {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User size={16} className="text-green-500" />
                    {post.author}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  <Link to={`/blog/${post.slug}`} className="hover:text-green-500 transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-300 mb-4">{post.summary}</p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs border border-zinc-700 text-gray-300">
                        <Tag size={12} className="text-green-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
