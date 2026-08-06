import "./Statistics.css";
import StatCard from "./StatCard/StatCard";

function Statistics({ statistics }) {
  const stats = [
    {
      title: "WPM",
      value: statistics.wpm,
    },
    {
      title: "CPM",
      value: statistics.cpm,
    },
    {
      title: "Accuracy",
      value: `${statistics.accuracy}%`,
    },
    {
      title: "Mistakes",
      value: statistics.wrongCharacters,
    },
    {
      title: "Timer",
      value: statistics.timer,
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