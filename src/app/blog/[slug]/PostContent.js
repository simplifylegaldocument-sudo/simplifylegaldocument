"use client";
import { useState, useEffect } from "react";

export default function PostContent({ slug }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Static posts data
    const STATIC_POSTS = [
      {
        slug: "ai-revolutionizing-contract-review",
        title: "How AI is Revolutionizing Contract Review",
        content: "Legal technology is undergoing a massive transformation. With the advent of Large Language Models, parsing complex legal jargon has become faster and more accurate than ever before...",
        author: "AI Expert",
        date: "May 8, 2026",
        category: "Technology",
        image: "" // Add image if available
      },
      {
        slug: "employment-contract-red-flags",
        title: "5 Red Flags to Watch for in Employment Contracts",
        content: "When signing a new employment contract, it's easy to overlook the fine print. Here are five common clauses that could impact your career...",
        author: "Legal Analyst",
        date: "May 5, 2026",
        category: "Career",
        image: ""
      },
      {
        slug: "plain-english-matters",
        title: "Why Plain English in Law Matters for Everyone",
        content: "The complexity of legal language often serves as a barrier to justice. By promoting plain English, we can ensure that everyone understands their rights and obligations...",
        author: "Justice Advocate",
        date: "May 1, 2026",
        category: "Advocacy",
        image: ""
      }
    ];

    const staticPost = STATIC_POSTS.find(p => p.slug === slug);
    
    if (staticPost) {
      setPost(staticPost);
      setLoading(false);
    } else {
      // 2. Check Supabase for user-uploaded posts via API
      const fetchDynamicPost = async () => {
        try {
          const response = await fetch("/api/blog");
          const allPosts = await response.json();
          const dynamicPost = allPosts.find(p => p.slug === slug);
          
          if (dynamicPost) {
            // Map DB snake_case back to UI camelCase
            const mappedPost = {
              ...dynamicPost,
              metaTitle: dynamicPost.meta_title,
              metaDescription: dynamicPost.meta_description
            };
            setPost(mappedPost);
            
            // Update Document Title for SEO/Browser
            if (mappedPost.metaTitle) {
              document.title = `${mappedPost.metaTitle} | simplifylegaldocument`;
            }
            // Update Meta Description dynamically (browser only)
            if (mappedPost.metaDescription) {
              const metaDesc = document.querySelector('meta[name="description"]');
              if (metaDesc) metaDesc.setAttribute('content', mappedPost.metaDescription);
            }
          }
        } catch (e) {
          console.error("Error fetching post from API", e);
        }
        setLoading(false);
      };
      fetchDynamicPost();
    }
  }, [slug]);

  if (loading) return <div className="min-h-screen pt-40 text-center">Loading article...</div>;

  if (!post) {
    return (
      <div className="pt-40 pb-24 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold">Article Not Found</h1>
        <p className="mt-4 text-muted">We couldn't find the blog post you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
          {post.category || "Article"}
        </span>
        <h1 className="text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-muted text-sm border-b border-border pb-8">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </div>

      {post.image && (
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
        </div>
      )}
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="whitespace-pre-wrap leading-relaxed text-text/90 text-lg">
          {post.content}
        </div>
      </div>
    </div>
  );
}
