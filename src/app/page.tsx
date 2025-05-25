export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            GRAND THEFT AUTO IV
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Welcome to Liberty City, where your American dream begins
          </p>
          <button className="gta-button">Enter Liberty City</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="gta-card">
            <h3 className="text-2xl font-bold mb-4 text-white">Liberty City</h3>
            <p className="text-gray-300">
              Explore the vast open world of Liberty City, a living, breathing
              metropolis inspired by New York City.
            </p>
          </div>
          <div className="gta-card">
            <h3 className="text-2xl font-bold mb-4 text-white">Niko Bellic</h3>
            <p className="text-gray-300">
              Play as Niko Bellic, a war veteran from Eastern Europe, seeking to
              escape his past and find the American dream.
            </p>
          </div>
          <div className="gta-card">
            <h3 className="text-2xl font-bold mb-4 text-white">Epic Story</h3>
            <p className="text-gray-300">
              Experience a gripping narrative filled with crime, betrayal, and
              redemption in the criminal underworld.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Niko Bellic in his quest for the American dream in the most
            immersive open-world experience ever created.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="gta-button">Buy Now</button>
            <button className="gta-button bg-gray-800 hover:bg-gray-700">
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/90 text-center text-gray-400">
        <p>© 2024 Rockstar Games. All rights reserved.</p>
      </footer>
    </div>
  );
}
