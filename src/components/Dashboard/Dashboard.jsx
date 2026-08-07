import "./Dashboard.css";

import Statistics from "../Statistics/Statistics";
import Controls from "../Controls/Controls";
import Practice from "../Practice/Practice";
import TypingBox from "../TypingBox/TypingBox";

import { useStatistics } from "../../hooks/useStatistics";

function Dashboard({ typing, timer }) {
  const elapsedSeconds = 300 - timer.timeLeft;

  const statistics = useStatistics(
    typing.characterStatuses,
    elapsedSeconds
  );

  return (
    <div className="dashboard">
      <Statistics
        statistics={{
          ...statistics,
          timer: timer.formattedTime,
        }}
      />

      <Controls
        onRestart={() => {
          typing.restartTyping();
          timer.resetTimer();
        }}
        onNextParagraph={() => {
          typing.nextParagraph();
          timer.resetTimer();
        }}
      />

      <Practice
        characterStatuses={typing.characterStatuses}
      />

      <TypingBox
        value={typing.typedText}
        onChange={typing.handleTyping}
        disabled={timer.isFinished}
      />

      <section className="dashboard-section">
        <h2>Keyboard</h2>
      </section>

      <section className="dashboard-section">
        <h2>Finger Guide</h2>
      </section>
    </div>
  );
}

export default Dashboard;