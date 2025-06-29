import Link from "next/link";

export default function Missions() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold text-white neon-text"
              >
                GTA VI
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link
                  href="/missions"
                  className="text-accent transition-colors"
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
            <Link href="/missions" className="block px-3 py-2 text-accent">
              Missions
            </Link>
            <button className="w-full gta-button text-sm mt-2">
              Pre-Order
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white neon-text">
            MISSIONS
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take on the most dangerous and lucrative missions in Vice City. From
            street-level crime to high-stakes heists, every mission shapes your
            destiny.
          </p>
        </div>
      </header>

      {/* Missions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission Card 1 */}
            <div className="gta-card">
              <h3 className="text-2xl font-bold mb-4 text-white neon-text">
                The Setup
              </h3>
              <p className="text-gray-300 mb-4">
                Your first mission in Vice City. Learn the ropes and establish
                your reputation in the criminal underworld.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-accent text-sm font-bold">
                  DIFFICULTY: EASY
                </span>
                <span className="text-gray-400 text-sm">$5,000</span>
              </div>
            </div>

            {/* Mission Card 2 */}
            <div className="gta-card">
              <h3 className="text-2xl font-bold mb-4 text-white neon-text pink">
                Neon Nights
              </h3>
              <p className="text-gray-300 mb-4">
                Navigate the neon-lit streets of Vice City in a high-speed chase
                that will test your driving skills.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-accent text-sm font-bold">
                  DIFFICULTY: MEDIUM
                </span>
                <span className="text-gray-400 text-sm">$15,000</span>
              </div>
            </div>

            {/* Mission Card 3 */}
            <div className="gta-card">
              <h3 className="text-2xl font-bold mb-4 text-white neon-text">
                Beach Heist
              </h3>
              <p className="text-gray-300 mb-4">
                A daring robbery on the beaches of Vice City. Perfect your
                timing and escape with the loot.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-accent text-sm font-bold">
                  DIFFICULTY: HARD
                </span>
                <span className="text-gray-400 text-sm">$50,000</span>
              </div>
            </div>

            {/* Mission Card 4 */}
            <div className="gta-card">
              <h3 className="text-2xl font-bold mb-4 text-white neon-text">
                Criminal Empire
              </h3>
              <p className="text-gray-300 mb-4">
                Build your criminal empire from the ground up. Control
                territories and expand your influence.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-accent text-sm font-bold">
                  DIFFICULTY: EXPERT
                </span>
                <span className="text-gray-400 text-sm">$100,000</span>
              </div>
            </div>

            {/* Mission Card 5 */}
            <div className="gta-card">
              <h3 className="text-2xl font-bold mb-4 text-white neon-text pink">
                Vice City Vendetta
              </h3>
              <p className="text-gray-300 mb-4">
                The ultimate mission. Take down the biggest players in Vice City
                and claim your throne.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-accent text-sm font-bold">
                  DIFFICULTY: LEGENDARY
                </span>
                <span className="text-gray-400 text-sm">$500,000</span>
              </div>
            </div>

            {/* Mission Card 6 */}
            <div className="gta-card">
              <h3 className="text-2xl font-bold mb-4 text-white neon-text">
                Coming Soon
              </h3>
              <p className="text-gray-300 mb-4">
                More missions await in the full game. Pre-order now to unlock
                exclusive missions on day one.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-accent text-sm font-bold">
                  DIFFICULTY: ???
                </span>
                <span className="text-gray-400 text-sm">TBA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/90 text-center text-gray-400 mt-auto">
        <p>© 2024 Rockstar Games. All rights reserved.</p>
        <p className="text-sm mt-2">
          Coming 2025 to PlayStation 5 and Xbox Series X|S
        </p>
      </footer>
    </div>
  );
}
