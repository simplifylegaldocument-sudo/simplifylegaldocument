"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminDashboard() {
  const [isMounted, setIsMounted] = useState(false);
  const [post, setPost] = useState({
    title: "",
    category: "Technology",
    excerpt: "",
    author: "Admin",
    content: "",
    slug: ""
  });
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.push("/admin");
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      ...post,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      slug: post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    };

    const existingPosts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
    localStorage.setItem("blog_posts", JSON.stringify([...existingPosts, newPost]));
    
    setStatus("Post uploaded successfully!");
    setPost({ title: "", category: "Technology", excerpt: "", author: "Admin", content: "", slug: "" });
    
    setTimeout(() => {
      setStatus("");
      router.push("/blog");
    }, 2000);
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-serif font-bold">Admin <span className="text-primary">Dashboard</span></h1>
          <button 
            onClick={() => { localStorage.removeItem("isLoggedIn"); router.push("/admin"); }}
            className="text-sm text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>

        <div className="glass p-10 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8">Upload New Article</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Article Title</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" 
                  placeholder="e.g. The Future of AI Law" 
                  value={post.title}
                  onChange={(e) => setPost({...post, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select 
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
                  value={post.category}
                  onChange={(e) => setPost({...post, category: e.target.value})}
                >
                  <option>Technology</option>
                  <option>Legal Tips</option>
                  <option>Product Updates</option>
                  <option>Industry News</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Short Excerpt (SEO Summary)</label>
              <textarea 
                required
                rows="2"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" 
                placeholder="Brief summary of the article..." 
                value={post.excerpt}
                onChange={(e) => setPost({...post, excerpt: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content (Markdown supported)</label>
              <textarea 
                required
                rows="10"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors font-mono text-sm" 
                placeholder="Write your article here..." 
                value={post.content}
                onChange={(e) => setPost({...post, content: e.target.value})}
              />
            </div>

            <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
              Publish Article
            </button>
            
            {status && (
              <p className="text-center text-green-500 font-bold mt-4 animate-pulse">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
