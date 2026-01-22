
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for "Sustainability Highway", an expert hub on Saudi Arabia's Vision 2030 sustainability and construction standards.
Your expertise includes:
1. Saudi Vision 2030 (NEOM, The Line, Red Sea Global, Qiddiya, Amaala).
2. Mostadam Sustainability Rating System.
3. LEED and GBCI certifications in the KSA context.
4. Renewable energy integration in Saudi mega-projects.
5. Circular economy and waste management standards in KSA construction.

Always be professional, precise, and enthusiastic about Saudi Arabia's green transformation. 
Use technical terms correctly (e.g., thermal performance, greywater recycling, net-zero).
If asked about non-Saudi topics, politely redirect to sustainability or Vision 2030.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
    if (!apiKey) {
      console.warn("Gemini API Key is missing. AI features will not work.");
    }
    this.ai = new GoogleGenAI({ apiKey });
  }

  async chat(message: string, history: any[] = []) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
      // Handle response safely
      const responseAny = response as any;
      const text = responseAny.text;
      if (typeof text === 'function') {
        return text();
      }
      return typeof text === 'string' ? text : "No response";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Error connecting to AI.";
    }
  }

  async generateBlogPost(topic: string) {
    const prompt = `Act as an expert journalist for "Sustainability Highway". Write a complete, SEO-optimized blog post about: "${topic}".
    Context: Saudi Vision 2030, Green Building standards (Mostadam, LEED), and eco-infrastructure.
    
    Return a STRICT VALID JSON object with no markdown formatting:
    {
      "title": "A compelling, news-style title",
      "slug": "kebab-case-slug",
      "meta_title": "SEO Title (max 60 chars)",
      "meta_description": "SEO Description (max 150 chars)",
      "content": "Rich HTML content with <h2>, <h3>, <p>, <ul> tags. Write at least 600 words."
    }`;

    try {
      const result = await this.chat(prompt, []); // No history
      const jsonStr = result.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(jsonStr);
    } catch (e) {
      console.error("Gemini Parse Error:", e);
      return null;
    }
  }
}

export const gemini = new GeminiService();
