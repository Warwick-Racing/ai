import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getPostBySlug } from "@/app/lib/posts";

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

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="pt-20">
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-300 mb-8">This article does not exist or has been removed.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 text-sm font-semibold hover:border-green-500 hover:text-green-500 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-14 px-4 border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-green-500 transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={16} className="text-green-500" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User size={16} className="text-green-500" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </section>
    </div>
  );
}
