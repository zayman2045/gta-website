import Navigation from "../../components/Navigation";
import GTACard from "../../components/GTACard";

export default function Missions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="missions" />

      {/* Hero Section */}
      <header className="relative pt-40 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white neon-text">
            MISSIONS
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take on the most dangerous and lucrative missions in Vice City. From
            street-level crime to high-stakes heists, every mission shapes your
            destiny.
          </p>
          <button className="gta-button secondary">Create Mission</button>
        </div>
      </header>

      {/* Missions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GTACard
              title="The Setup"
              description="Your first mission in Vice City. Learn the ropes and establish your reputation in the criminal underworld."
              difficulty="EASY"
              reward="$5,000"
            />

            <GTACard
              title="Neon Nights"
              description="Navigate the neon-lit streets of Vice City in a high-speed chase that will test your driving skills."
              difficulty="MEDIUM"
              reward="$15,000"
              titleColor="pink"
            />

            <GTACard
              title="Beach Heist"
              description="A daring robbery on the beaches of Vice City. Perfect your timing and escape with the loot."
              difficulty="HARD"
              reward="$50,000"
            />

            <GTACard
              title="Criminal Empire"
              description="Build your criminal empire from the ground up. Control territories and expand your influence."
              difficulty="EXPERT"
              reward="$100,000"
            />

            <GTACard
              title="Vice City Vendetta"
              description="The ultimate mission. Take down the biggest players in Vice City and claim your throne."
              difficulty="LEGENDARY"
              reward="$500,000"
              titleColor="pink"
            />

            <GTACard
              title="Coming Soon"
              description="More missions await in the full game. Pre-order now to unlock exclusive missions on day one."
              difficulty="???"
              reward="TBA"
            />
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
