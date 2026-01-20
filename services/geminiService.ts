import { GoogleGenAI } from "@google/genai";
import { MarketDataPoint } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketAnalysis = async (data: MarketDataPoint[]): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Unable to generate analysis.";
  }

  const prompt = `
    You are an expert real estate analyst for Calgary, Alberta.
    Analyze the following market data for the last 10 months:
    ${JSON.stringify(data)}

    Provide a concise, professional paragraph summarizing the trend. 
    Focus on whether it's a buyer's or seller's market, price trajectories, and inventory health.
    Keep the tone professional yet accessible to a general home buyer/seller. 
    Do not use markdown formatting like **bold** or headings, just plain text.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Analysis currently unavailable.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to generate market analysis at this time.";
  }
};