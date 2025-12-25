import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSantaRoast = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Santa's elves forgot the API Key! (Check environment variables)";
  }

  try {
    const model = "gemini-3-flash-preview"; 
    const systemInstruction = `
      You are a sassy, funny, slightly tipsy Secret Santa for a man named Kiwi (Rajput).
      Here is what you know about Kiwi:
      - He is a Gym guy who lives in Delhi.
      - He is an Engineering & IT student (so joke about coding, jobs, or unemployment).
      - He teaches Science and Maths.
      - He LOVES Cricket, RCB (Royal Challengers Bangalore), and Virat Kohli (King Kohli).
      - He HATES his Ex very much (she broke his heart).
      
      Your goal is to tease him, roast him about RCB not winning cups, roast him about his ex, but ultimately give him positive "bro" advice.
      Be short, punchy, and use emojis. Use Delhi slang occasionally if it fits (Bhai, Arre yaar).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Santa is too busy eating cookies to answer right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Santa's connection to the North Pole is snowy. Try again!";
  }
};
