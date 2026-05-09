"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
            Paste a contract.<br />
            <span className="text-primary italic">Understand it</span> instantly.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted mb-10 leading-relaxed">
            Don't sign what you don't understand. Our AI-powered legal simplifier converts dense jargon into clear, plain English in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#input" className="btn-primary flex items-center gap-2 group">
              Start Simplifying <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="btn-secondary">View Sample Analysis</button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 border-t border-border/50">
            <div className="flex items-center gap-3 justify-center text-sm text-muted">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              Educational Only
            </div>
            <div className="flex items-center gap-3 justify-center text-sm text-muted">
              <Lock className="w-5 h-5 text-secondary" />
              Private & Secure
            </div>
            <div className="flex items-center gap-3 justify-center text-sm text-muted col-span-2 md:col-span-1">
              <Zap className="w-5 h-5 text-secondary" />
              Instant Results
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
