import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return NextResponse.json({ error: "Gemini API key is missing or not configured." }, { status: 500 });
    }

    const { text } = await req.json();

    if (!text || text.length < 50) {
      return NextResponse.json({ error: "Document text is too short to simplify. Please provide at least 50 characters." }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash-lite",
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    const systemPrompt = `
You are an AI legal document simplifier.
Your job is to explain legal documents in plain English for everyday people.
You are NOT a lawyer. You do NOT provide legal advice.
You only summarize and explain legal text in simple, consumer-friendly language.

Return valid JSON ONLY in the following format:
{
  "document_type": "string",
  "summary": ["bullet 1", "bullet 2"],
  "what_you_agree_to": ["item 1", "item 2"],
  "key_terms": {
    "parties": "string",
    "duration": "string",
    "payment_terms": "string",
    "termination": "string",
    "governing_law": "string"
  },
  "red_flags": [
    {
      "clause": "string",
      "risk_level": "low|medium|high",
      "reason": "string"
    }
  ],
  "questions_to_ask": ["q1", "q2"],
  "risk_score": "low|medium|high",
  "disclaimer": "This is not legal advice. This is an AI-generated educational summary."
}
    `;

    const prompt = `Legal text to simplify:\n\n${text}`;

    const result = await model.generateContent([systemPrompt, prompt]);
    const response = await result.response;
    const responseText = response.text();
    
    // Core Fix: Improved JSON extraction to handle any prefix/suffix garbage
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Could not find valid JSON in AI response.");
    }
    
    const data = JSON.parse(jsonMatch[0]);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to process document. Please try again." 
    }, { status: 500 });
  }
}

