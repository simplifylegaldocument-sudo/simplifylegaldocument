const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config({ path: ".env.local" });

async function listModels() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const result = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).listModels();
    console.log("Available Models:", JSON.stringify(result, null, 2));
  } catch (error) {
    // If listModels is not directly on the model instance (it's not), use the SDK way
    try {
      // Actually the SDK doesn't have a simple listModels on the main class in some versions
      // But we can try to hit the models endpoint directly
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${process.env.GEMINI_API_KEY}`);
      const data = await response.json();
      console.log("Models from API:", JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Error listing models:", err);
    }
  }
}

listModels();
