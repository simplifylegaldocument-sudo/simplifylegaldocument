"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Edit2, Trash2, Plus, Image as ImageIcon, X } from "lucide-react";

export default function AdminDashboard() {
  const [isMounted, setIsMounted] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [form, setForm] = useState({
    title: "",
    category: "Technology",
    excerpt: "",
    author: "Admin",
    content: "",
    metaTitle: "",
    metaDescription: "",
    image: ""
  });
  
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.push("/admin");
    }
    loadPosts();
  }, [router]);

  const loadPosts = () => {
    const savedPosts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
    setPosts(savedPosts);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        alert("Image too large. Please use an image under 1MB for localStorage storage.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const slug = form.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    let updatedPosts;
    if (isEditing) {
      updatedPosts = posts.map(p => p.id === editingId ? { ...form, id: editingId, slug, date } : p);
      setStatus("Post updated successfully!");
    } else {
      const newPost = { ...form, id: Date.now(), slug, date };
      updatedPosts = [...posts, newPost];
      setStatus("Post published successfully!");
    }

    localStorage.setItem("blog_posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    resetForm();
    
    setTimeout(() => setStatus(""), 3000);
  };

  const handleEdit = (post) => {
    setForm(post);
    setIsEditing(true);
    setEditingId(post.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter(p => p.id !== id);
      localStorage.setItem("blog_posts", JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
      setStatus("Post deleted.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      category: "Technology",
      excerpt: "",
      author: "Admin",
      content: "",
      metaTitle: "",
      metaDescription: "",
      image: ""
    });
    setIsEditing(false);
    setEditingId(null);
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-serif font-bold">Admin <span className="text-primary">Panel</span></h1>
            <p className="text-muted mt-2">Manage your blog articles and SEO settings.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => { localStorage.removeItem("isLoggedIn"); router.push("/admin"); }}
              className="px-4 py-2 text-sm text-red-500 border border-red-500/30 rounded-xl hover:bg-red-500/10 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-3xl border border-border/50">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{isEditing ? "Edit Article" : "Create New Article"}</h2>
                {isEditing && (
                  <button onClick={resetForm} className="text-sm text-primary flex items-center gap-1">
                    <Plus className="w-4 h-4" /> Create New Instead
                  </button>
                )}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Article Title</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" 
                      placeholder="e.g. The Future of AI Law" 
                      value={form.title}
                      onChange={(e) => setForm({...form, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select 
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
                      value={form.category}
                      onChange={(e) => setForm({...form, category: e.target.value})}
                    >
                      <option>Technology</option>
                      <option>Legal Tips</option>
                      <option>Product Updates</option>
                      <option>Industry News</option>
                    </select>
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">Featured Image</label>
                  <div className="flex items-center gap-4">
                    {form.image ? (
                      <div className="relative w-32 h-20 rounded-lg overflow-hidden border border-border">
                        <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
                        <button 
                          type="button"
                          onClick={() => setForm({...form, image: ""})}
                          className="absolute top-1 right-1 bg-black/50 p-1 rounded-full text-white hover:bg-black"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <label className="w-32 h-20 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                        <ImageIcon className="w-6 h-6 text-muted" />
                        <span className="text-[10px] text-muted mt-1">Upload Image</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                      </label>
                    )}
                    <div className="text-xs text-muted">
                      <p>Recommended size: 1200x630px</p>
                      <p>Max file size: 1MB (Base64 storage)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Short Excerpt (List View)</label>
                  <textarea 
                    required
                    rows="2"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" 
                    placeholder="Brief summary for the blog list page..." 
                    value={form.excerpt}
                    onChange={(e) => setForm({...form, excerpt: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Article Content</label>
                  <textarea 
                    required
                    rows="12"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors font-sans" 
                    placeholder="Write your article content here..." 
                    value={form.content}
                    onChange={(e) => setForm({...form, content: e.target.value})}
                  />
                </div>

                <div className="border-t border-border pt-6 mt-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    SEO Settings
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Meta Title</label>
                      <input 
                        type="text" 
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors text-sm" 
                        placeholder="Page title for search engines" 
                        value={form.metaTitle}
                        onChange={(e) => setForm({...form, metaTitle: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Meta Description</label>
                      <textarea 
                        rows="2"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors text-sm" 
                        placeholder="Brief description for search results" 
                        value={form.metaDescription}
                        onChange={(e) => setForm({...form, metaDescription: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                  {isEditing ? "Update Article" : "Publish Article"}
                </button>
                
                {status && (
                  <p className="text-center text-green-500 font-bold mt-4">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Your Articles</h2>
            <div className="space-y-4 max-h-[1000px] overflow-y-auto pr-2">
              {posts.length === 0 ? (
                <div className="glass p-8 text-center text-muted rounded-3xl border border-dashed border-border">
                  No uploaded articles yet.
                </div>
              ) : (
                posts.map(post => (
                  <div key={post.id} className="glass p-4 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors group">
                    <div className="flex gap-4">
                      {post.image && (
                        <img src={post.image} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" alt="" />
                      )}
                      <div className="flex-grow min-w-0">
                        <h3 className="font-bold text-sm truncate">{post.title}</h3>
                        <p className="text-[10px] text-muted">{post.date}</p>
                        <div className="flex gap-2 mt-3">
                          <button 
                            onClick={() => handleEdit(post)}
                            className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => handleDelete(post.id)}
                            className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
