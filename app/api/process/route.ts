import { NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

// 1. Dynamic import for PDF.js with proper typing
const pdfjsLib = await import('pdfjs-dist');
pdfjsLib.GlobalWorkerOptions.workerSrc = require.resolve('pdfjs-dist/build/pdf.worker.min.js');

export async function POST(request: Request) {
  try {
    // 2. Get the PDF file
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

    // 3. Try PDF.js first (better text extraction)
    try {
      const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        fullText += textContent.items
          .filter((item): item is TextItem => 'str' in item)
          .map(item => item.str)
          .join(' ') + '\n\n';
      }

    } catch (jsError) {
      console.warn('PDF.js failed, trying pdf-lib...');
      
      // 4. Fallback to pdf-lib
      const pdfDoc = await PDFDocument.load(pdfBuffer);
      for (let i = 0; i < pdfDoc.getPageCount(); i++) {
        const page = pdfDoc.getPage(i);
        const text = await (page as any).getTextContent?.() || '';
        fullText += text + '\n\n';
      }
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