export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white neon-text">
                GTA VI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  News
                </a>
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
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:text-accent"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:text-accent"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:text-accent"
            >
              Gallery
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:text-accent"
            >
              News
            </a>
            <button className="w-full gta-button text-sm mt-2">
              Pre-Order
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white neon-text drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
            GRAND THEFT AUTO VI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Welcome to Vice City, where the sun never sets on the American dream
          </p>
          <button className="gta-button">Enter Vice City</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="gta-card">
            <h3 className="text-2xl font-bold mb-4 text-white neon-text">
              Vice City
            </h3>
            <p className="text-gray-300">
              Explore the neon-lit streets of Vice City, a vibrant metropolis
              inspired by Miami, featuring stunning beaches and a thriving
              nightlife.
            </p>
          </div>
          <div className="gta-card">
            <h3 className="text-2xl font-bold mb-4 text-white neon-text pink">
              Lucia & Jason
            </h3>
            <p className="text-gray-300">
              Play as Lucia and Jason, a dynamic duo navigating the criminal
              underworld of Vice City in the most ambitious GTA story yet.
            </p>
          </div>
          <div className="gta-card">
            <h3 className="text-2xl font-bold mb-4 text-white neon-text">
              Next-Gen Experience
            </h3>
            <p className="text-gray-300">
              Experience the most immersive open world ever created, featuring
              cutting-edge graphics, advanced AI, and unprecedented detail.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white neon-text">
            Ready for the Next Chapter?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Lucia and Jason in their quest for fortune and freedom in the
            most ambitious Grand Theft Auto ever created.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="gta-button">Pre-Order Now</button>
            <button className="gta-button secondary">Watch Trailer</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/90 text-center text-gray-400">
        <p>© 2024 Rockstar Games. All rights reserved.</p>
        <p className="text-sm mt-2">
          Coming 2025 to PlayStation 5 and Xbox Series X|S
        </p>
      </footer>
    </div>
  );
}
