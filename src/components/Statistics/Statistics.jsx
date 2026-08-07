import "./Statistics.css";
import StatCard from "./StatCard/StatCard";

function Statistics({ statistics }) {
  const stats = [
    {
      title: "WPM",
      value: statistics?.wpm ?? 0,
    },
    {
      title: "CPM",
      value: statistics?.cpm ?? 0,
    },
    {
      title: "Accuracy",
      value: `${statistics?.accuracy ?? 100}%`,
    },
    {
      title: "Mistakes",
      value: statistics?.wrongCharacters ?? 0,
    },
    {
      title: "Timer",
      value: statistics?.timer ?? "05:00",
    },
  ];

  return (
    <section className="statistics">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
        />
      ))}
    </section>
  );
}

export default Statistics;