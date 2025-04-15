"use client";
import { useState, ChangeEvent, useEffect } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [mounted, setMounted] = useState(false);
  const [generatedScript, setGeneratedScript] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null);
    setGeneratedScript(""); // Clear previous script when new file is selected
    setAudioUrl(null); // Clear previous audio when new file is selected
  };

  const handleGenerateScript = async () => {
    if (!file) {
      alert("Please upload a PDF file first");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const extractResponse = await fetch("/api/extract", {
        method: "POST",
        body: formData,
      });

      if (!extractResponse.ok) {
        throw new Error(`Failed to extract text from PDF: ${extractResponse.status}`);
      }

      const { text } = await extractResponse.json();

      const generateResponse = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!generateResponse.ok) {
        throw new Error(`Failed to generate script: ${generateResponse.status}`);
      }

      const { script } = await generateResponse.json();
      setGeneratedScript(script);
    } catch (error) {
      console.error("Error:", error);
      alert(error instanceof Error ? error.message : "Failed to process PDF");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateAudio = async () => {
    if (!generatedScript) {
      alert("Please generate a script first");
      return;
    }

    setIsGeneratingAudio(true);
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: generatedScript }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error:", error);
      alert(error instanceof Error ? error.message : "Failed to generate audio");
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Upload your PDF</h1>
        <p className="text-gray-700 text-lg">
          We'll convert it into a podcast script and generate AI voiceover audio.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl mb-8">
        <label
          htmlFor="pdf-upload"
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:border-gray-500"
        >
          <p className="text-gray-600 mb-2">Drop your PDF here or click to browse</p>
          <input
            id="pdf-upload"
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {file && (
          <div className="mt-4 text-center text-sm text-gray-600">
            Selected file: <span className="font-medium">{file.name}</span>
          </div>
        )}

        <button
          onClick={handleGenerateScript}
          className="mt-6 w-full px-4 py-2 bg-[#00A67E] text-white rounded-lg font-medium hover:bg-[#008F6B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!file || isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
              Generating...
            </div>
          ) : (
            'Generate Script'
          )}
        </button>
      </div>

      <div className="bg-black text-white rounded-xl p-6 w-full max-w-2xl mb-6">
        <p className="text-sm text-gray-400 mb-2">Generated script will appear here...</p>
        <div className="min-h-[150px] text-left whitespace-pre-wrap">
          {generatedScript || "Your script content..."}
        </div>
      </div>

      <div className="w-full max-w-2xl mb-6">
        <div className="flex items-end gap-1 h-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-blue-500 animate-wave"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.2s',
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl mb-6">
        <button
          onClick={handleGenerateAudio}
          className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!generatedScript || isGeneratingAudio}
        >
          {isGeneratingAudio ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-900 border-t-transparent mr-2"></div>
              Generating Audio...
            </div>
          ) : (
            'Convert to Audio'
          )}
        </button>
      </div>

      {audioUrl && (
        <div className="w-full max-w-2xl mb-6">
          <audio controls className="w-full">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="text-gray-700 list-disc pl-5 space-y-2">
          <li><strong>Text to Speech:</strong> High-quality AI voice synthesis</li>
          <li><strong>Voice Cloning:</strong> Custom voice options coming soon</li>
        </ul>
      </div>
    </main>
  );
}