import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostContent from "./PostContent";

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
      <Footer />
    </main>
  );
}
