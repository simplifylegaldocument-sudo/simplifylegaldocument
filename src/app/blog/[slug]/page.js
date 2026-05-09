import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replace(/-/g, ' ')} | simplifylegaldocument`,
  };
}

export default function BlogPostPage({ params }) {
  // In a real app, you would fetch the post data using the slug
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Article
          </span>
          <h1 className="text-5xl font-serif font-bold mt-4 mb-6 capitalize">
            {params.slug.replace(/-/g, ' ')}
          </h1>
          <div className="flex items-center gap-4 text-muted text-sm border-b border-border pb-8">
            <span>By AI Legal Analyst</span>
            <span>•</span>
            <span>May 9, 2026</span>
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted mb-8">
            Understanding legal documents is becoming increasingly important in our complex world. This article explores the key aspects of {params.slug.replace(/-/g, ' ')} and what it means for consumers.
          </p>
          
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li>Modern legal technology is making information more accessible.</li>
            <li>Simplification does not mean loss of detail; it means clarity of purpose.</li>
            <li>Consumers are increasingly demanding transparency in their contracts.</li>
          </ul>
          
          <p className="mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <div className="glass p-8 rounded-3xl my-12 border-l-4 border-primary">
            <p className="italic text-lg">
              "The greatest barrier to justice is often the language in which it is written."
            </p>
          </div>
          
          <p className="mb-6">
            In conclusion, as we move towards a more automated future, the ability to quickly and accurately parse legal intent will be a superpower for the average citizen. Simplifylegaldocument is proud to be at the forefront of this change.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
