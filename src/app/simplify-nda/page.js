
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DocumentInput from "@/components/DocumentInput";
import Footer from "@/components/Footer";



export default function NDAPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <section className="bg-primary/5 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Simplify your <span className="text-primary italic">NDA</span></h1>
            <p className="text-muted max-w-2xl mx-auto">Non-Disclosure Agreements can be tricky. Use our AI to understand exactly what information you're protecting and for how long.</p>
          </div>
        </section>

        <DocumentInput onSimplify={(data) => {
          // In a real app, this would redirect to results or show them here
          // For the MVP, the Home page handles the state, so this is just a landing page
          // that funnels to the main tool.
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />

        <section className="py-20 max-w-4xl mx-auto px-6 prose prose-invert prose-primary">
          <h2 className="text-2xl font-bold mb-6 font-serif">What is an NDA?</h2>
          <p className="text-muted leading-relaxed mb-4">
            A Non-Disclosure Agreement (NDA), also known as a confidentiality agreement, is a legal contract between at least two parties that outlines confidential material, knowledge, or information that the parties wish to share with one another for certain purposes, but wish to restrict access to.
          </p>
          <h3 className="text-xl font-bold mb-4 font-serif">Common Red Flags in NDAs</h3>
          <ul className="space-y-2 text-muted">
            <li><strong>Indefinite Duration:</strong> Confidentiality obligations that never expire.</li>
            <li><strong>Broad Definitions:</strong> Defining "Confidential Information" so broadly it includes public knowledge.</li>
            <li><strong>One-Sided Terms:</strong> Only one party is bound by confidentiality.</li>
            <li><strong>Heavy Penalties:</strong> Excessive liquidated damages for minor breaches.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
}
