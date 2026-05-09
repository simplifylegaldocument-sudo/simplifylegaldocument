"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock authentication
    // In a real app, this would be handled via Firebase Auth or similar
    if (password === "Sumit@1907/admin") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-6 pt-20">
        <div className="glass p-10 rounded-3xl w-full max-w-md">
          <h1 className="text-3xl font-serif font-bold mb-2 text-center">Admin Access</h1>
          <p className="text-muted text-center mb-8 text-sm">Please enter your credentials to manage blog posts.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input 
                type="text" 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" 
                placeholder="admin" 
                defaultValue="admin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input 
                type="password" 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>
            <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
