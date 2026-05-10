"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
        <p className="text-muted">Everything you need to know about our legal document simplification tool.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden border border-white/5 shadow-lg hover:border-primary/20 transition-all">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center group"
            >
              <span className="font-semibold text-lg pr-8">{faq.question}</span>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 pt-0 text-muted leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* JSON-LD for SEO/AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
