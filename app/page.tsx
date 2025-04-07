"use client";
import { useState, useRef } from 'react';

interface PDFContent {
  text: string;
  name?: string;
  size?: number;
}

export default function Home() {
  // State declarations
  const [extractedText, setExtractedText] = useState<PDFContent | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // PDF Upload Handler
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError(null);
    setExtractedText(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // First process the PDF
      const processResponse = await fetch('/api/process', {
        method: 'POST',
        body: formData,
      });

      if (!processResponse.ok) {
        throw new Error(`PDF processing failed: ${processResponse.status}`);
      }

      const { text } = await processResponse.json();
      setExtractedText({ text, name: file.name, size: file.size });

    } catch (err) {
      console.error("Upload failed:", err);
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Audio Generation
  const generateAudio = async () => {
    if (!extractedText?.text) {
      setError("No text available for audio generation");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAudioUrl(null);

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          text: extractedText.text.slice(0, 5000)
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      setAudioUrl(URL.createObjectURL(blob));

    } catch (err) {
      console.error("Audio generation failed:", err);
      setError(err instanceof Error ? err.message : "Audio generation failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* PDF Upload Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-6">Research Paper to Podcast Converter</h1>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            accept=".pdf"
            onChange={handleUpload}
            className="hidden"
            id="file-upload"
            disabled={isLoading}
          />
          <label
            htmlFor="file-upload"
            className={`inline-block px-6 py-3 rounded-lg cursor-pointer ${
              isLoading
                ? 'bg-gray-300 text-gray-500'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isLoading ? "Processing..." : "Upload Research Paper (PDF)"}
          </label>
          <p className="mt-2 text-sm text-gray-500">
            {extractedText?.name || "No file selected"}
          </p>
        </div>
      </div>

      {/* Conditional Audio Generation */}
      {extractedText?.text && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Extracted Content</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 max-h-60 overflow-y-auto">
            <p className="whitespace-pre-wrap text-sm">
              {extractedText.text.slice(0, 1000) + (extractedText.text.length > 1000 ? "..." : "")}
            </p>
          </div>

          <button
            onClick={generateAudio}
            disabled={isLoading}
            className={`px-6 py-3 rounded-lg font-medium ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating Audio...
              </span>
            ) : (
              'Generate Podcast Audio'
            )}
          </button>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {/* Audio Player */}
      {audioUrl && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Your Podcast</h2>
          <audio
            ref={audioRef}
            controls
            src={audioUrl}
            className="w-full"
          />
          <div className="mt-4 flex justify-end">
            <a
              href={audioUrl}
              download={`podcast-${new Date().toISOString()}.mp3`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download MP3
            </a>
          </div>
        </div>
      )}
    </div>
  );
}