interface AudioPlayerProps {
  audioUrl: string | null;
  isGenerating: boolean;
}

export default function AudioPlayer({ audioUrl, isGenerating }: AudioPlayerProps) {
  return (
    <div className="flex-1 bg-[#1A1A1A] rounded-lg p-4 flex items-center justify-center">
      {audioUrl ? (
        <audio controls className="w-full" src={audioUrl}>
          Your browser does not support the audio element.
        </audio>
      ) : (
        <div className="text-center text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-4 text-[#2A2A2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          <p>Generated audio will appear here</p>
        </div>
      )}
      {isGenerating && (
        <div className="absolute inset-0 bg-[#1A1A1A]/80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#00A67E] border-t-transparent"></div>
        </div>
      )}
    </div>
  );
} 