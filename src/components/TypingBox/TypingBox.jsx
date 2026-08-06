import "./TypingBox.css";

function TypingBox({ value, onChange }) {

  function blockAction(event) {
    event.preventDefault();
  }

  return (
    <section className="typing-box">

      <div className="typing-header">
        <h2>Typing Area</h2>
      </div>

      <div className="typing-body">

        <textarea
          className="typing-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="येथे टायपिंग सुरू करा..."
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          onPaste={blockAction}
          onCopy={blockAction}
          onCut={blockAction}
          onContextMenu={blockAction}
        />

      </div>

    </section>
  );
}

export default TypingBox;