import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API with proper error handling
const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error("GOOGLE_API_KEY environment variable is not set");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { text } = await req.json();
    
    if (!text) {
      return NextResponse.json(
        { error: "No text provided" },
        { status: 400 }
      );
    }

    // Truncate text to fit within model's token limit
    const truncatedText = text.slice(0, 2000000); // Using 2M tokens limit for gemini-1.5-pro

    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });

    const prompt = `Please convert the following research paper into a natural, conversational dialogue between two people — Alex and Sam — who are both knowledgeable and curious about the topic.

- Their tone should be friendly, insightful, and engaging — like two colleagues discussing something fascinating over coffee.
- Make it sound like a real back-and-forth: one person introduces ideas, the other asks questions, adds commentary, or challenges parts of it.
- Ensure the conversation flows logically, building understanding step by step.
- Do NOT include any:
  - special formatting (like asterisks, bold, or italics),
  - podcast-specific cues (like intro/outro music, host titles, or sign-offs),
  - stage directions (e.g. "short pause" or "dramatic music").
- Focus entirely on making the research engaging, human, and natural to listen to.
- Format each line like:
  Alex: [spoken line]
  Sam: [spoken line]

Here's the research paper:

${truncatedText}`;

    console.log('Sending request to Gemini API...');
    const result = await model.generateContent(prompt);
    console.log('Received response from Gemini API');

    const response = await result.response;
    const script = response.text();

    if (!script) {
      console.error('No script content in response:', response);
      throw new Error("No content received from Gemini");
    }

    // Clean up the script by removing any remaining special characters or formatting
    const cleanScript = script
      .replace(/\*\*/g, '') // Remove double asterisks
      .replace(/\*/g, '') // Remove single asterisks
      .replace(/\(pause\)/gi, '') // Remove pause indicators
      .replace(/\(short pause\)/gi, '') // Remove short pause indicators
      .replace(/\(long pause\)/gi, '') // Remove long pause indicators
      .replace(/\[.*?\]/g, '') // Remove anything in square brackets
      .replace(/\(.*?\)/g, '') // Remove anything in parentheses
      .replace(/\n\s*\n/g, '\n\n') // Normalize multiple newlines
      .trim();

    return NextResponse.json({ script: cleanScript });
  } catch (error) {
    console.error('Script generation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate podcast script" },
      { status: 500 }
    );
  }
}