import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white neon-text">
              GTA VI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/missions"
                className={`transition-colors ${
                  currentPage === "missions"
                    ? "text-accent"
                    : "text-gray-300 hover:text-accent"
                }`}
              >
                Missions
              </Link>
              <button className="gta-button text-sm">Pre-Order</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-accent">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/missions"
            className={`block px-3 py-2 ${
              currentPage === "missions"
                ? "text-accent"
                : "text-gray-300 hover:text-accent"
            }`}
          >
            Missions
          </Link>
          <button className="w-full gta-button text-sm mt-2">Pre-Order</button>
        </div>
      </div>
    </nav>
  );
}
