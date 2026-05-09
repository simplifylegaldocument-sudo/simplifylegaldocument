"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const STATIC_POSTS = [
  {
    id: 1,
    title: "How AI is Revolutionizing Contract Review",
    excerpt: "Gone are the days of spending hours reading fine print. Learn how LLMs like Gemini are making legal documents accessible.",
    author: "AI Expert",
    date: "May 8, 2026",
    category: "Technology",
    slug: "ai-revolutionizing-contract-review",
    image: ""
  },
  {
    id: 2,
    title: "5 Red Flags to Watch for in Employment Contracts",
    excerpt: "Before you sign that new job offer, make sure you aren't agreeing to these common predatory clauses.",
    author: "Legal Analyst",
    date: "May 5, 2026",
    category: "Career",
    slug: "employment-contract-red-flags",
    image: ""
  },
  {
    id: 3,
    title: "Why Plain English in Law Matters for Everyone",
    excerpt: "The 'legalese' barrier prevents millions from understanding their rights. Here is why we need more clarity in legal writing.",
    author: "Justice Advocate",
    date: "May 1, 2026",
    category: "Advocacy",
    slug: "plain-english-matters",
    image: ""
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
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Legal Insights & <span className="text-primary italic">Blog</span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Expert analysis on legal technology, contract law, and tips to help you navigate your legal documents with confidence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-[2.5rem] flex flex-col overflow-hidden hover:border-primary/40 transition-all group border border-border/50"
            >
              {/* Image Container */}
              <div className="aspect-[16/9] overflow-hidden bg-muted relative">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5">
                    <span className="text-primary/20 font-serif text-4xl font-bold">SL</span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-primary px-3 py-1.5 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/blog/${post.slug || 'post'}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {post.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-text">{post.author}</p>
                      <p>{post.date}</p>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug || 'post'}`} 
                    className="w-10 h-10 rounded-full bg-text/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
