"use client";
import { useState } from "react";

export default function FileUpload() {
  const [extractedText, setExtractedText] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/process", {
        method: "POST",
        body: formData,
      });
      const { text } = await response.json();
      setExtractedText(text);
      console.log("Extracted text:", text);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="space-y-4">
      {/* ... (existing upload button code) ... */}
      
      {extractedText && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-2">Extracted Text Preview:</h3>
          <p className="text-sm whitespace-pre-wrap">
            {extractedText}
          </p>
        </div>
      )}
    </div>
  );
}