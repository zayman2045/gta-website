import Navigation from "../../components/Navigation";
import Image from "next/image";

export default function PreOrder() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="pre-order" />

      {/* Hero Section */}
      <header className="relative pt-40 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white neon-text">
            PRE-ORDER NOW
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Secure your copy of Grand Theft Auto VI and unlock exclusive content
            on day one.
          </p>
        </div>
      </header>

      {/* Pre-Order Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Game Image */}
            <div className="text-center lg:text-left">
              <div className="relative">
                <div className="aspect-[493/622] rounded-lg border border-accent/30 overflow-hidden">
                  <Image
                    src="/gta-vi-ps5-cover.jpg"
                    alt="Grand Theft Auto VI PS5 Cover"
                    width={493}
                    height={622}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Pricing and Details */}
            <div className="text-center lg:text-left">
              <div className="gta-card">
                <h2 className="text-4xl font-bold mb-6 text-white neon-text">
                  $99.99
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-300">Day One Access</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-300">
                      Exclusive Pre-Order Missions
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-300">Special Vehicle Pack</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-300">Digital Artbook</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-300">Soundtrack Download</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <button className="w-full gta-button text-lg py-4">
                    PRE-ORDER NOW
                  </button>
                  <p className="text-gray-400 text-sm">
                    Available for PlayStation 5 and Xbox Series X|S
                  </p>
                  <p className="text-gray-500 text-xs">Release Date: 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white neon-text">
            Why Pre-Order?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gta-card">
              <h3 className="text-xl font-bold mb-4 text-white">
                Early Access
              </h3>
              <p className="text-gray-300">
                Be among the first to experience the most ambitious Grand Theft
                Auto ever created.
              </p>
            </div>
            <div className="gta-card">
              <h3 className="text-xl font-bold mb-4 text-white">
                Exclusive Content
              </h3>
              <p className="text-gray-300">
                Unlock special missions, vehicles, and items only available to
                pre-order customers.
              </p>
            </div>
            <div className="gta-card">
              <h3 className="text-xl font-bold mb-4 text-white">
                Guaranteed Copy
              </h3>
              <p className="text-gray-300">
                Secure your copy before launch day and avoid potential
                shortages.
              </p>
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
