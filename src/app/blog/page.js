"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const STATIC_POSTS = [
  {
    id: 1,
    title: "How AI is Revolutionizing Contract Review",
    excerpt: "Gone are the days of spending hours reading fine print. Learn how LLMs like Gemini are making legal documents accessible.",
    author: "AI Expert",
    date: "May 8, 2026",
    category: "Technology",
    slug: "ai-revolutionizing-contract-review"
  },
  {
    id: 2,
    title: "5 Red Flags to Watch for in Employment Contracts",
    excerpt: "Before you sign that new job offer, make sure you aren't agreeing to these common predatory clauses.",
    author: "Legal Analyst",
    date: "May 5, 2026",
    category: "Career",
    slug: "employment-contract-red-flags"
  },
  {
    id: 3,
    title: "Why Plain English in Law Matters for Everyone",
    excerpt: "The 'legalese' barrier prevents millions from understanding their rights. Here is why we need more clarity in legal writing.",
    author: "Justice Advocate",
    date: "May 1, 2026",
    category: "Advocacy",
    slug: "plain-english-matters"
  }
];

export default function BlogPage() {
  const [posts, setPosts] = useState(STATIC_POSTS);

  useEffect(() => {
    // Load dynamic posts from localStorage if they exist
    const savedPosts = localStorage.getItem("blog_posts");
    if (savedPosts) {
      try {
        const parsed = JSON.parse(savedPosts);
        setPosts([...STATIC_POSTS, ...parsed]);
      } catch (e) {
        console.error("Failed to parse saved posts", e);
      }
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4">Legal Insights & <span className="text-primary">Blog</span></h1>
          <p className="text-muted max-w-2xl mx-auto">
            Stay informed about AI technology, legal trends, and tips for navigating complex documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col hover:border-primary/40 transition-all group"
            >
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50 text-xs text-muted">
                <div className="flex flex-col">
                  <span className="font-bold text-text">{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug || 'post'}`} className="btn-secondary py-2 px-4 text-xs">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
