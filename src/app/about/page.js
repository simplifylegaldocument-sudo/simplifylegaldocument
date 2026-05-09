import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | simplifylegaldocument",
  description: "Learn about our mission to make legal documents accessible and understandable for everyone using AI technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-serif font-bold mb-8">About <span className="text-primary">simplifylegaldocument</span></h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl text-muted leading-relaxed mb-8">
            Our mission is to democratize legal information. We believe that everyone should be able to understand the documents they sign, without needing a law degree.
          </p>
          
          <h2 className="text-3xl font-serif font-bold mt-12 mb-6">The Problem</h2>
          <p className="mb-6">
            Legal documents are intentionally complex. Dense jargon, archaic phrasing, and 50-page "Terms of Service" agreements are designed to be scanned, not read. This creates a massive information asymmetry where individuals often sign away their rights or agree to predatory terms simply because they couldn't understand the fine print.
          </p>
          
          <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Our Solution</h2>
          <p className="mb-6">
            Simplifylegaldocument uses state-of-the-art Large Language Models (LLMs) to bridge the gap between "legalese" and "plain English." Our AI analyzes your documents, identifies key obligations, flags potential risks, and provides a concise summary that actually makes sense.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-muted text-sm">We provide clear, honest breakdowns of what your contracts actually mean for you.</p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-muted text-sm">Making legal clarity available to everyone, regardless of their background or budget.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Our Technology</h2>
          <p className="mb-6">
            By leveraging advanced AI models like Google Gemini, we are able to process complex legal text with high accuracy. Our system is trained to recognize standard legal patterns, common "red flag" clauses, and industry-specific terminology across various jurisdictions.
          </p>
          
          <p className="mb-6 italic text-muted">
            Disclaimer: Simplifylegaldocument is an AI-powered tool designed for informational purposes only. We are not a law firm, and our summaries do not constitute legal advice. Always consult with a qualified legal professional for critical matters.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
