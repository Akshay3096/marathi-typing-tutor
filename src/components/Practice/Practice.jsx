import "./Practice.css";

function Practice({ paragraph }) {
  return (
    <section className="practice">

      <div className="practice-header">
        <h2>Practice Paragraph</h2>
      </div>

      <div className="practice-content">
        <p className="practice-text">
          {paragraph}
        </p>
      </div>

    </section>
  );
}

export default Practice;