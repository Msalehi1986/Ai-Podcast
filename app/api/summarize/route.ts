import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  const { text } = await request.json();
  
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content: "Convert this research paper into a 3-paragraph podcast script. Use engaging, conversational language."
        },
        { role: "user", content: text.slice(0, 12000) } // Token limit safety
      ],
      temperature: 0.7,
    });

    return NextResponse.json({ 
      script: completion.choices[0].message.content 
    });
  } catch (error) {
    return NextResponse.json(
      { error: "AI processing failed" },
      { status: 500 }
    );
  }
}