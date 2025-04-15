export async function generateScript(text: string): Promise<string> {
  try {
    const response = await fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Failed to generate script: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.script) {
      throw new Error("No script content received from the server");
    }
    return data.script;
  } catch (error) {
    console.error("Script generation error:", error);
    throw error;
  }
} 