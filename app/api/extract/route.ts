import { NextResponse } from 'next/server';
import * as pdfjsLib from 'pdfjs-dist';

// Disable worker to avoid the worker file requirement
pdfjsLib.GlobalWorkerOptions.workerSrc = null;

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: Request) {
  try {
    // Set CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle OPTIONS request for CORS
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { headers });
    }

    const formData = await request.formData();
    const pdfFile = formData.get('pdf') as File;

    if (!pdfFile) {
      return NextResponse.json(
        { error: 'No PDF file provided' },
        { 
          status: 400,
          headers
        }
      );
    }

    if (pdfFile.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'File must be a PDF' },
        { 
          status: 400,
          headers
        }
      );
    }

    console.log('PDF file received:', {
      name: pdfFile.name,
      size: pdfFile.size,
      type: pdfFile.type
    });

    // Convert File to ArrayBuffer
    const arrayBuffer = await pdfFile.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    console.log('Buffer created, size:', uint8Array.length);

    try {
      // Load the PDF document
      const loadingTask = pdfjsLib.getDocument({ 
        data: uint8Array,
        useWorker: false // Disable worker
      });
      
      const pdfDocument = await loadingTask.promise;
      console.log('PDF loaded, number of pages:', pdfDocument.numPages);

      // Extract text from all pages
      let fullText = '';
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        const page = await pdfDocument.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        fullText += pageText + '\n';
      }

      console.log('Text extracted, length:', fullText.length);

      if (!fullText || fullText.trim().length === 0) {
        return NextResponse.json(
          { error: 'No text content found in PDF' },
          { 
            status: 400,
            headers
          }
        );
      }

      return NextResponse.json(
        { text: fullText },
        { headers }
      );
    } catch (parseError) {
      console.error('Error parsing PDF:', parseError);
      return NextResponse.json(
        { error: 'Failed to parse PDF file. Please ensure it is a valid PDF with text content.' },
        { 
          status: 400,
          headers
        }
      );
    }
  } catch (error) {
    console.error('Detailed error extracting text from PDF:', error);
    return NextResponse.json(
      { error: `Failed to process PDF: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  }
} 