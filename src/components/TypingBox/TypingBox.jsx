import "./TypingBox.css";

function TypingBox() {

    const handleBlockedAction = (event) => {
        event.preventDefault();
    };

    return (

        <section className="typing-box">

            <div className="typing-header">

                <h2>Typing Area</h2>

            </div>

            <div className="typing-body">

                <textarea
                    className="typing-input"
                    placeholder="येथे टायपिंग सुरू करा..."
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    onPaste={handleBlockedAction}
                    onCopy={handleBlockedAction}
                    onCut={handleBlockedAction}
                    onContextMenu={handleBlockedAction}
                />

            </div>

        </section>

    );

}

export default TypingBox;