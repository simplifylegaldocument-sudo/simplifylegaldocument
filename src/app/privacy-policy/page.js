import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Privacy Policy | simplifylegaldocument",
  description: "Learn how we handle your data and protect your privacy at simplifylegaldocument.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-serif font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
          <p className="text-muted mb-8">Last updated: May 09, 2026</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>Simplifylegaldocument ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and AI-powered document simplification services.</p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Document Content:</strong> The text of the legal documents you upload or paste into our tool for simplification.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our site, including IP address, browser type, and pages visited.</li>
              <li><strong>Contact Information:</strong> If you reach out to us via our contact form, we collect your name and email address.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
            <p>We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our simplification service.</li>
              <li>To improve our AI models and user experience.</li>
              <li>To communicate with you regarding support or updates.</li>
              <li>To monitor and prevent any misuse of our platform.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Document Privacy & AI Processing</h2>
            <p>When you submit a document for simplification, the text is processed by our AI models (leveraging Google Gemini API). We do not store the content of your documents on our servers indefinitely. Once the simplification result is delivered to you, the document text is typically purged from our active processing memory, unless you have specifically opted-in to data sharing for model improvement.</p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Cookies and Advertising</h2>
            <p>We use cookies to enhance your experience. We also use Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies to serve ads on our site based on your prior visits to our website or other websites.</p>
            <p className="mt-2">Users may opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline">Google Ad Settings</a>.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Security</h2>
            <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@simplifylegaldocument.com.</p>
          </section>
        </div>
      </div>
      <FAQ faqs={[
        {
          question: "Is my data safe with PlainLaw?",
          answer: "Yes, we implement industry-standard security measures to protect your data. Documents pasted into our tool are processed and then discarded according to our data retention policy."
        },
        {
          question: "Does PlainLaw sell my personal information?",
          answer: "No, we do not sell your personal information or the content of your documents to third parties. Your privacy is our top priority."
        },
        {
          question: "What information does PlainLaw collect?",
          answer: "We collect minimal information necessary to provide our service, such as basic usage analytics and any information you provide voluntarily via our contact forms."
        },
        {
          question: "How is my document text processed?",
          answer: "Document text is processed through secure AI models to generate summaries. We use encryption during transmission to ensure your data remains private."
        },
        {
          question: "Can I delete my data from PlainLaw?",
          answer: "Since we do not store document content persistently, there is no data to delete in most cases. For any other personal data, you can request deletion by contacting us."
        }
      ]} />

      <Footer />
    </main>
  );
}
