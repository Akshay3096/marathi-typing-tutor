import { useEffect } from "react";
import "./Dashboard.css";

import Statistics from "../Statistics/Statistics";
import Controls from "../Controls/Controls";
import ProgressBar from "../ProgressBar/ProgressBar";
import Practice from "../Practice/Practice";
import TypingBox from "../TypingBox/TypingBox";
import Keyboard from "../Keyboard/Keyboard";
import ResultModal from "../ResultModal/ResultModal";

import { useStatistics } from "../../hooks/useStatistics";
import { useModal } from "../../hooks/useModal";

function Dashboard({ typing, timer }) {
  const modal = useModal();

  const elapsedSeconds = 300 - timer.timeLeft;

  const statistics = useStatistics(
    typing.characterStatuses,
    elapsedSeconds
  );

  // Current character
  const currentCharacter =
    typing.characterStatuses.find(
      (item) => item.status === "current"
    )?.character || "";

  // Open Result Modal when timer finishes
  useEffect(() => {
    if (timer.isFinished) {
      modal.openModal();
    }
  }, [timer.isFinished]);

  function handleRestart() {
    modal.closeModal();
    typing.restartTyping();
    timer.resetTimer();
  }

  function handleNext() {
    modal.closeModal();
    typing.nextParagraph();
    timer.resetTimer();
  }

  return (
    <div className="dashboard">
      <Statistics
        statistics={{
          ...statistics,
          timer: timer.formattedTime,
        }}
      />

      <Controls
        onRestart={handleRestart}
        onNextParagraph={handleNext}
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

      <ResultModal
        isOpen={modal.isOpen}
        statistics={statistics}
        onRestart={handleRestart}
        onNext={handleNext}
      />
    </div>
  );
}

export default Dashboard;