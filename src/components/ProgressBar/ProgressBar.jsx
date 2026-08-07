import "./ProgressBar.css";

function ProgressBar({
  typedCharacters,
  totalCharacters,
}) {
  const progress =
    totalCharacters === 0
      ? 0
      : Math.min(
          (typedCharacters / totalCharacters) * 100,
          100
        );

  return (
    <section className="progress-bar">
      <div className="progress-header">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </section>
  );
}

export default ProgressBar;