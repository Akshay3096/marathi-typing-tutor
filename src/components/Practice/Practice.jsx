import "./Practice.css";

function Practice({ characterStatuses }) {
  return (
    <section className="practice">

      <div className="practice-header">
        <h2>Practice Paragraph</h2>
      </div>

      <div className="practice-content">

        <p className="practice-text">

          {characterStatuses.map((item, index) => (
            <span
              key={index}
              className={`character ${item.status}`}
            >
              {item.character}
            </span>
          ))}

        </p>

      </div>

    </section>
  );
}

export default Practice;