import styles from "./styles.module.css";

function QuestionNav({ questions, setActiveQuestion, activeQuestion }) {
  return (
    <div className={styles.numberQuestion}>
      {questions.map((_, i) => (
        <button
          onClick={() => setActiveQuestion(i)}
          key={i}
          className={`${styles.questionItem} ${i === activeQuestion ? styles.active : ""}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
export default QuestionNav;
