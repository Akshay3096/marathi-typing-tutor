import "./Dashboard.css";

import Statistics from "../Statistics/Statistics";
import Controls from "../Controls/Controls";
import Practice from "../Practice/Practice";
import TypingBox from "../TypingBox/TypingBox";

import { useTyping } from "../../hooks/useTyping";

function Dashboard() {
  const {
    currentParagraph,
    typedText,
    handleTyping,
    restartTyping,
    nextParagraph,
  } = useTyping();

  return (
    <div className="dashboard">
      <Statistics />

      <Controls
        onRestart={restartTyping}
        onNextParagraph={nextParagraph}
      />

      <Practice
        paragraph={currentParagraph.text}
      />

      <TypingBox
        value={typedText}
        onChange={handleTyping}
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