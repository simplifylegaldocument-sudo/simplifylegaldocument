import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostContent from "./PostContent";
import FAQ from "@/components/FAQ";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ')} | simplifylegaldocument`,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  return (
    <main className="min-h-screen">
      <Navbar />
      <PostContent slug={slug} />
      <FAQ faqs={[
        {
          question: "What topics does the simplifylegaldocument blog cover?",
          answer: "Our blog covers a wide range of topics including legal technology, AI advancements, tips for understanding contracts, and news about simplifylegaldocument features."
        },
        {
          question: "Is the legal information on this blog accurate?",
          answer: "We strive to provide accurate and helpful information, but blog posts are for educational purposes and should not be taken as legal advice."
        },
        {
          question: "How often is the blog updated?",
          answer: "We update our blog regularly with new insights and guides to help you navigate the legal landscape more effectively."
        },
        {
          question: "Can I contribute to the simplifylegaldocument blog?",
          answer: "We are always looking for guest contributors who are passionate about legal accessibility. Contact us if you're interested in writing for us."
        },
        {
          question: "How can I stay updated on new blog posts?",
          answer: "You can stay updated by following us on social media or checking back here regularly for the latest articles."
        }
      ]} />
      <Footer />
    </main>
  );
}
