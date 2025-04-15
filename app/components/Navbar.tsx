import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            AI Podcast Generator
          </Link>
          <button className="px-4 py-2 bg-[#00A67E] text-white rounded-lg text-sm font-medium hover:bg-[#008F6B] transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
} 