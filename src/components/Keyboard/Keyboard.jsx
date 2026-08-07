import "./Keyboard.css";

import { keyboardRows } from "../../data/keyboardData";
import { keyMappings } from "../../data/keyMappings";

function Keyboard({ currentCharacter }) {
  const activeKey = keyMappings[currentCharacter];

  return (
    <section className="keyboard">
      <div className="keyboard-header">
        <h2>Marathi InScript Keyboard</h2>
      </div>

      <div className="keyboard-body">
        {keyboardRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="keyboard-row"
          >
            {row.map((item) => (
              <div
                key={item.code}
                className={`keyboard-key
                  ${item.special ? "special" : ""}
                  ${item.width === "space" ? "space" : ""}
                  ${item.code === activeKey ? "active" : ""}
                `}
              >
                {item.key}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Keyboard;