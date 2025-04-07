import { NextResponse } from 'next/server';
import { ElevenLabsClient } from 'elevenlabs';

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    
    // 1. Generate audio stream
    const audioStream = await elevenlabs.generate({
      voice: "Rachel",
      model_id: "eleven_turbo_v2",
      text: text.slice(0, 5000), // Character limit
      stream: true // Enable streaming
    });

    // 2. Convert stream to ReadableStream
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of audioStream) {
          controller.enqueue(chunk);
        }
        controller.close();
      }
    });

    // 3. Return streaming response
    return new Response(readableStream, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'inline; filename="podcast.mp3"'
      },
    });

  } catch (error) {
    console.error('TTS Error:', error);
    return NextResponse.json(
      { error: "Audio generation failed" },
      { status: 500 }
    );
  }
}