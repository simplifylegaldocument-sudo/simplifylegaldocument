import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact Us | simplifylegaldocument",
  description: "Get in touch with the simplifylegaldocument team for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        {/* Existing content... */}
        <h1 className="text-5xl font-serif font-bold mb-8">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-muted leading-relaxed mb-8">
              Have questions about our AI document simplifier? Or perhaps some feedback on how we can improve? We'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <p className="text-primary hover:underline cursor-pointer">support@simplifylegaldocument.com</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-1">Follow Us</h3>
                <p className="text-muted">Stay updated on our latest AI legal features.</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-primary hover:underline cursor-pointer">Twitter</span>
                  <span className="text-primary hover:underline cursor-pointer">LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-3xl">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="4" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <FAQ faqs={[
        {
          question: "How can I get support for PlainLaw?",
          answer: "If you encounter any issues or have questions about our document simplifier, you can contact our support team through the form on this page or email us directly at support@plainlaw.ai."
        },
        {
          question: "Can I request a feature for the AI simplifier?",
          answer: "Absolutely! We love hearing from our users. If there's a specific document type or feature you'd like to see, please reach out and let us know."
        },
        {
          question: "Do you offer API access for developers?",
          answer: "We are currently exploring API opportunities for businesses and developers. Please contact us if you're interested in integrating our legal simplification engine into your own products."
        },
        {
          question: "How long does it take to get a response?",
          answer: "We aim to respond to all inquiries within 24-48 business hours. Thank you for your patience as our small team works to help you."
        },
        {
          question: "Where can I find legal help if PlainLaw isn't enough?",
          answer: "If you need specific legal advice, we recommend contacting your local Bar Association or a qualified attorney in your jurisdiction."
        }
      ]} />

      <Footer />
    </main>
  );
}
