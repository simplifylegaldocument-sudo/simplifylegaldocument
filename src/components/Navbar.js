"use client";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg rotate-12 flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
            S
          </div>
          <span className="font-serif font-bold text-lg tracking-tight">
            simplify<span className="text-primary">legal</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            <Link href="/#features" className="hover:text-text transition-colors">Features</Link>
            <Link href="/#how-it-works" className="hover:text-text transition-colors">How it works</Link>

          </div>

          <div className="flex items-center gap-3 border-l border-border/50 pl-4 md:pl-8">
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-border transition-colors text-muted hover:text-text"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

