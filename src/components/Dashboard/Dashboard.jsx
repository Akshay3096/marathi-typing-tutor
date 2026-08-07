import "./Dashboard.css";

import Statistics from "../Statistics/Statistics";
import Controls from "../Controls/Controls";
import ProgressBar from "../ProgressBar/ProgressBar";
import Practice from "../Practice/Practice";
import TypingBox from "../TypingBox/TypingBox";
import Keyboard from "../Keyboard/Keyboard";

import { useStatistics } from "../../hooks/useStatistics";

function Dashboard({ typing, timer }) {
  const elapsedSeconds = 300 - timer.timeLeft;

  const statistics = useStatistics(
    typing.characterStatuses,
    elapsedSeconds
  );

  const currentCharacter =
    typing.characterStatuses.find(
      (item) => item.status === "current"
    )?.character || "";

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

      <ProgressBar
        typedCharacters={statistics.typedCharacters}
        totalCharacters={typing.paragraphCharacters.length}
      />

      <Practice
        characterStatuses={typing.characterStatuses}
      />

      <TypingBox
        value={typing.typedText}
        onChange={typing.handleTyping}
        disabled={timer.isFinished}
      />

      <Keyboard
        currentCharacter={currentCharacter}
      />

      <section className="dashboard-section">
        <h2>Finger Guide</h2>
      </section>
    </div>
  );
}

export default Dashboard;