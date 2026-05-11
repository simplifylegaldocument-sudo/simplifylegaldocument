import { supabase } from "@/lib/supabase";

export default async function sitemap() {
  const baseUrl = 'https://simplifylegaldocument.online';

  // Define your static routes
  const routes = [
    '',
    '/simplify-nda',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority: route === '' ? 1.0 : route === '/simplify-nda' ? 0.9 : 0.8,
  }));

  // Define static blog posts
  const staticBlogPostsSlugs = [
    'ai-revolutionizing-contract-review',
    'employment-contract-red-flags',
    'plain-english-matters',
  ];

  const staticBlogPosts = staticBlogPostsSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.6,
  }));

  // Fetch dynamic blog posts from Supabase
  let dynamicBlogPosts = [];
  try {
    const { data } = await supabase
      .from('posts')
      .select('slug, created_at');
    
    if (data) {
      dynamicBlogPosts = data.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.created_at).toISOString().split('T')[0],
        priority: 0.6,
      }));
    }
  } catch (e) {
    console.error('Failed to fetch posts for sitemap', e);
  }

  return [...routes, ...staticBlogPosts, ...dynamicBlogPosts];
}
