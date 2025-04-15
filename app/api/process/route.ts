import { NextResponse } from 'next/server';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';
import path from 'path';

// Set up the worker
if (typeof window === 'undefined') {
  // Server-side worker configuration
  GlobalWorkerOptions.workerSrc = path.join(process.cwd(), 'node_modules', 'pdfjs-dist', 'legacy', 'build', 'pdf.worker.min.js');
} else {
  // Client-side worker configuration
  GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
}

interface TextItem {
  str: string;
  transform?: number[];
  dir?: string;
  width?: number;
  height?: number;
  fontName?: string;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as Blob | null;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const pdfBuffer = await file.arrayBuffer();
    let fullText = '';

    const pdf = await getDocument({ 
      data: new Uint8Array(pdfBuffer),
      disableFontFace: true,
      verbosity: 0
    }).promise;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      fullText += (textContent.items as TextItem[])
        .filter((item) => 'str' in item)
        .map((item) => item.str)
        .join(' ') + '\n\n';
    }

    return NextResponse.json(
      { text: fullText.trim() },
      { status: 200 }
    );

  } catch (error) {
    console.error('PDF Processing Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process PDF',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}