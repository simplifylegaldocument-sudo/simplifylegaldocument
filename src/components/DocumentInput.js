"use client";
import { useState } from "react";
import { FileText, Loader2, Sparkles, TriangleAlert } from "lucide-react";


export default function DocumentInput({ onSimplify }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || text.length < 50) {
      setError("Please enter at least 50 characters to analyze.");
      return;
    }
    
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/simplify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      onSimplify(data);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="input" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass p-8 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Paste Legal Document</h2>
                <p className="text-sm text-muted">Paste the contract text below to begin analysis</p>
              </div>
            </div>
            {text && (
              <button 
                onClick={() => { setText(""); setError(""); }}
                className="text-xs text-muted hover:text-risk-high transition-colors font-medium uppercase tracking-widest"
              >
                Clear Text
              </button>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                className={`w-full h-80 bg-background/50 border ${error ? 'border-risk-high/50 focus:ring-risk-high/20' : 'border-border focus:ring-primary/50'} rounded-xl p-6 text-sm focus:outline-none focus:ring-2 transition-all resize-none font-mono`}
                placeholder="Paste your contract, lease, NDA, or any legal text here..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  if (error && e.target.value.length >= 50) setError("");
                }}
                disabled={loading}
              />
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-muted">
                {text.length} chars
              </div>
            </div>
            
            {error && (
              <div className="p-3 rounded-lg bg-risk-high/10 border border-risk-high/20 text-risk-high text-xs font-medium flex items-center gap-2">
                <TriangleAlert className="w-4 h-4" /> {error}
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted italic">
                * Minimum 50 characters required.
              </p>
              <button
                type="submit"
                disabled={loading || text.length < 50}
                className="btn-primary flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Analyzing Document...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Simplify Document
                  </>
                )}
              </button>
            </div>
          </form>

          
          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-[10px] text-primary/60 text-center uppercase tracking-widest font-bold">
              Disclaimer: This is an AI-generated educational summary, not legal advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
