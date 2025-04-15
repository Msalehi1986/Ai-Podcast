export async function generateAudio(script: string): Promise<string> {
  const response = await fetch("/api/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: script }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to generate audio");
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
} 