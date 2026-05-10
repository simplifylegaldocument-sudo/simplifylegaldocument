"use client";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DocumentInput from "@/components/DocumentInput";
import ResultDashboard from "@/components/ResultDashboard";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [result, setResult] = useState(null);
  const resultsRef = useRef(null);

  const handleSimplify = (data) => {
    setResult(data);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            <DocumentInput onSimplify={handleSimplify} />
            
            {/* Features Section */}
            <section id="features" className="py-24 max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4">Why use simplify<span className="text-primary">legal</span>?</h2>
                <p className="text-muted">Built for everyday people to navigate the legal landscape with confidence.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                  title="Plain-English Summaries"
                  desc="We break down dense legal jargon into human-readable bullet points you can actually understand."
                />
                <FeatureCard 
                  title="Risk Detection"
                  desc="Our AI flags one-sided clauses, hidden penalties, and predatory terms before you sign."
                />
                <FeatureCard 
                  title="Actionable Questions"
                  desc="Receive a list of specific questions to ask your landlord, employer, or vendor to clarify terms."
                />
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pt-24"
          >
            <div ref={resultsRef}>
              <ResultDashboard data={result} />
            </div>
            <div className="flex justify-center pb-20">
              <button 
                onClick={() => setResult(null)}
                className="btn-secondary"
              >
                Simplify Another Document
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FAQ faqs={[
        {
          question: "What is a legal document simplifier?",
          answer: "A legal document simplifier is an AI-powered tool that translates complex legal jargon and dense contracts into plain English. simplifylegaldocument uses advanced generative AI to help you understand what you're signing without needing a law degree."
        },
        {
          question: "How does AI legal analysis work?",
          answer: "AI legal analysis works by scanning document text, identifying key legal concepts, and summarizing them using natural language processing. Our tool flags potential risks and predatory clauses to ensure you stay protected."
        },
        {
          question: "Can I simplify an NDA online for free?",
          answer: "Yes, simplifylegaldocument allows you to simplify NDAs and other contracts online. Our tool is designed to provide quick, accessible legal clarity for everyone, from employees to small business owners."
        },
        {
          question: "Is an AI legal assistant accurate?",
          answer: "While our AI legal assistant is highly advanced and provides accurate summaries of legal text, it is not a replacement for professional legal advice from a qualified attorney. Always consult a lawyer for critical legal decisions."
        },
        {
          question: "What types of documents can simplifylegaldocument simplify?",
          answer: "simplifylegaldocument can simplify a wide range of documents including NDAs, employment contracts, rental agreements, terms of service, and privacy policies. Simply paste your text to receive a plain English breakdown."
        }
      ]} />

      <Footer />
    </main>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="glass p-8 rounded-3xl hover:border-primary/30 transition-colors group">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
