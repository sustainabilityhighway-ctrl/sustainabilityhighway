
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

// Internal Links Context (Hardcoded for AI Context)
const INTERNAL_LINKS = {
  "LEED": "/leed-guide",
  "Mostadam": "/mostadam-rating-system-guide",
  "Vision 2030": "/vision-2050",
  "Contact": "/contact",
  "Green Tech": "/green-construction-technologies-riyadh",
  "WELL Standard": "/well-building-standard-health",
  "Envision": "/envision-infrastructure-sustainability",
  "Net Zero": "/vision-2050-net-zero-saudi-arabia"
};

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
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      console.error("Gemini API Key is missing.");
      return null;
    }
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

  async generateBlogIdeas(count: number = 3) {
    const prompt = `Suggest ${count} trending, specific blog topics related to Saudi Arabia's Vision 2030, Green Building, Mostadam, or LEED.
    Return ONLY a valid JSON array of strings. No markdown.
    Example: ["Mostadam vs LEED: Which is right for your KSA project?", "The Role of Solar Glass in NEOM's The Line"]`;

    try {
      const result = await this.chat(prompt);
      if (!result) return [];
      const jsonStr = result.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(jsonStr) as string[];
    } catch (e) {
      console.error("Gemini Idea Error:", e);
      return [];
    }
  }

  async generateBlogPost(topic: string, template: string = 'Standard Article') {
    const prompt = `Act as an expert journalist for "Sustainability Highway". Write a complete, SEO-optimized blog post about: "${topic}".
    Context: Saudi Vision 2030, Green Building standards (Mostadam, LEED), and eco-infrastructure.
    
    TEMPLATE STYLE: "${template}" (Adopt the structure and tone suitable for this template).

    CRITICAL SEO INSTRUCTIONS:
    1. **Focus Keyword:** Choose ONE main focus keyword and use it naturally. Do not keyword stuff.
    2. **Internal Linking:** Use the following internal links where strictly relevant: ${JSON.stringify(INTERNAL_LINKS)}. 
       IMPORTANT: Link to a specific keyword ONLY ONCE in the entire article. Do not repeat the same link.
    3. **Structure:**
       - Start with a **Table of Contents** (HTML <ul> with anchors to h2/h3).
       - Use proper Heading Hierarchy (H2, H3). H1 is the title (do not include H1 in content).
       - Use short paragraphs (2-3 sentences max).
    4. **Visuals:** Include placeholders for Infographics where useful, e.g., "[Infographic: Comparison of LEED vs Mostadam points]".
    5. **Tone:** Authoritative, Professional, yet engaging.
    6. **Schema:** Generate 3 FAQ items for Schema markup.

    Return a STRICT VALID JSON object with no markdown formatting:
    {
      "title": "A compelling, news-style title",
      "slug": "kebab-case-slug",
      "meta_title": "SEO Title (max 60 chars)",
      "meta_description": "SEO Description (max 150 chars)",
      "image_alt_text": "Detailed, descriptive visual prompt for an AI image generator (e.g. 'Futuristic green building in Riyadh desert with solar panels, photorealistic, 4k')",
      "tags": ["tag1", "tag2", "tag3"],
      "content": "Rich HTML content (including Table of Contents). Write at least 800 words.",
      "faq": [{"question": "...", "answer": "..."}]
    }`;

    try {
      const result = await this.chat(prompt, []); // No history
      if (!result) return null;
      const jsonStr = result.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(jsonStr);
    } catch (e) {
      console.error("Gemini Parse Error:", e);
      return null;
    }
  }
}

export const gemini = new GeminiService();
