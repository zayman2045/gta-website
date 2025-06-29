interface GTACardProps {
  title: string;
  description: string;
  difficulty: string;
  reward: string;
  titleColor?: "default" | "pink";
}

export default function GTACard({
  title,
  description,
  difficulty,
  reward,
  titleColor = "default",
}: GTACardProps) {
  return (
    <div className="gta-card">
      <h3
        className={`text-2xl font-bold mb-4 text-white neon-text ${
          titleColor === "pink" ? "pink" : ""
        }`}
      >
        {title}
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-accent text-sm font-bold">
          DIFFICULTY: {difficulty}
        </span>
        <span className="text-gray-400 text-sm">{reward}</span>
      </div>
    </div>
  );
}
