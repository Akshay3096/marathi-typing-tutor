import "./Dashboard.css";

import Statistics from "../Statistics/Statistics";
import Controls from "../Controls/Controls";
import Practice from "../Practice/Practice";
import TypingBox from "../TypingBox/TypingBox";

import { useStatistics } from "../../hooks";

function Dashboard({ typing }) {
  const statistics = useStatistics(
    typing.characterStatuses,
    0 // Timer Step मध्ये हा value dynamic होईल
  );

  return (
    <div className="dashboard">
      <Statistics
        statistics={{
          ...statistics,
          timer: "05:00",
        }}
      />

      <Controls
        onRestart={typing.restartTyping}
        onNextParagraph={typing.nextParagraph}
      />

      <Practice
        characterStatuses={typing.characterStatuses}
      />

      <TypingBox
        value={typing.typedText}
        onChange={typing.handleTyping}
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