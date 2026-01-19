
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
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "There was an error communicating with the Knowledge Hub. Please try again later.";
    }
  }
}

export const gemini = new GeminiService();
