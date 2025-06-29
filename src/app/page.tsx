import Navigation from "../components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

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
            <Link href="/pre-order" className="gta-button">
              Pre-Order Now
            </Link>
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
