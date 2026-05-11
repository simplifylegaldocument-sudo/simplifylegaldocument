import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

// GET all posts
export async function GET() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST a new post or update existing
export async function POST(request) {
  const post = await request.json();
  
  // Extract fields to match database schema (converting camelCase from UI to snake_case for DB)
  const dbPost = {
    title: post.title,
    slug: post.slug,
    category: post.category,
    excerpt: post.excerpt,
    author: post.author,
    content: post.content,
    image: post.image,
    meta_title: post.metaTitle,
    meta_description: post.metaDescription,
    date: post.date
  };

  let result;
  if (post.id && !String(post.id).startsWith('17')) { // Checking if it's a real DB id vs temporary timestamp id
    // Update
    result = await supabase
      .from("posts")
      .update(dbPost)
      .eq("id", post.id);
  } else {
    // Insert
    result = await supabase
      .from("posts")
      .insert([dbPost]);
  }

  if (result.error) {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data: result.data });
}
