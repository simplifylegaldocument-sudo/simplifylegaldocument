
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DocumentInput from "@/components/DocumentInput";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function NDAPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        {/* Existing content... */}
        <section className="bg-primary/5 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Simplify your <span className="text-primary italic">NDA</span></h1>
            <p className="text-muted max-w-2xl mx-auto">Non-Disclosure Agreements can be tricky. Use our AI to understand exactly what information you're protecting and for how long.</p>
          </div>
        </section>

        <DocumentInput onSimplify={(data) => {
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

      <FAQ faqs={[
        {
          question: "Why should I use an NDA summarizer?",
          answer: "An NDA summarizer helps you quickly identify the most important terms in a Non-Disclosure Agreement, such as the duration of confidentiality, the definition of confidential information, and penalties for breach."
        },
        {
          question: "What are common risks in an NDA?",
          answer: "Common risks in an NDA include overly broad definitions of 'confidential information,' indefinite duration of secrecy, and one-sided indemnity clauses. PlainLaw flags these automatically for your review."
        },
        {
          question: "How do I understand legal jargon in my NDA?",
          answer: "Legal jargon like 'liquidated damages,' 'indemnification,' and 'non-solicitation' can be confusing. PlainLaw translates these terms into everyday language so you know exactly what your obligations are."
        },
        {
          question: "Is it safe to paste my NDA into an AI tool?",
          answer: "At PlainLaw, we prioritize your privacy. We do not store your documents permanently, and your data is used solely for the purpose of simplification. Always ensure you are using a secure, trusted platform."
        },
        {
          question: "Can AI help me negotiate my NDA?",
          answer: "Yes! By identifying unfair or one-sided terms, PlainLaw provides you with the knowledge needed to ask the right questions and negotiate better terms before signing your NDA."
        }
      ]} />

      <Footer />
    </main>
  );
}
