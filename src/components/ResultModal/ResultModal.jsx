import "./ResultModal.css";

function ResultModal({
  isOpen,
  statistics,
  onRestart,
  onNext,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="result-overlay">
      <div className="result-modal">

        <h2>🎉 Test Completed</h2>

        <div className="result-list">

          <div className="result-item">
            <span>⌨ WPM</span>
            <strong>{statistics.wpm}</strong>
          </div>

          <div className="result-item">
            <span>📈 CPM</span>
            <strong>{statistics.cpm}</strong>
          </div>

          <div className="result-item">
            <span>🎯 Accuracy</span>
            <strong>{statistics.accuracy}%</strong>
          </div>

          <div className="result-item">
            <span>❌ Mistakes</span>
            <strong>{statistics.wrongCharacters}</strong>
          </div>

        </div>

        <div className="result-buttons">

          <button
            onClick={onRestart}
          >
            Restart
          </button>

          <button
            onClick={onNext}
          >
            Next Paragraph
          </button>

        </div>

      </div>
    </div>
  );
}

export default ResultModal;