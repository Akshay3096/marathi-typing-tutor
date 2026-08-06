import "./Controls.css";

function Controls({ onRestart, onNextParagraph }) {
  return (
    <section className="controls">
      <div className="timer-section">
        <span className="label">Timer</span>

        <button className="timer-btn active">1 Min</button>
        <button className="timer-btn">3 Min</button>
        <button className="timer-btn">5 Min</button>
        <button className="timer-btn">10 Min</button>
      </div>

      <div className="action-section">
        <button
          className="action-btn restart-btn"
          onClick={onRestart}
        >
          Restart
        </button>

        <button
          className="action-btn next-btn"
          onClick={onNextParagraph}
        >
          Next Paragraph
        </button>
      </div>
    </section>
  );
}

export default Controls;