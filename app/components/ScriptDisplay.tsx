interface ScriptDisplayProps {
  script: string;
  isLoading: boolean;
  onScriptChange: (script: string) => void;
}

export default function ScriptDisplay({ script, isLoading, onScriptChange }: ScriptDisplayProps) {
  return (
    <div className="flex-1 relative">
      <textarea
        value={script}
        onChange={(e) => onScriptChange(e.target.value)}
        className="w-full h-full resize-none bg-[#1A1A1A] rounded-lg p-4 text-sm text-gray-300
          focus:ring-1 focus:ring-[#00A67E] focus:outline-none"
        placeholder="Generated script will appear here..."
      />
      {isLoading && (
        <div className="absolute inset-0 bg-[#1A1A1A]/80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#00A67E] border-t-transparent"></div>
        </div>
      )}
    </div>
  );
} 