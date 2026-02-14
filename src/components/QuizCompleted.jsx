import styles from "./styles.module.css";

function QuizCompleted({ score, questions, tryAgain }) {
  return (
    <div className={styles.quizComleted}>
      <h1>Quiz completed</h1>
      <p className={styles.quizResult}>
        Correct answers {score} / {questions.length}
      </p>
      <button className={styles.tryAgain} onClick={tryAgain}>
        Try again
      </button>
    </div>
  );
}
export default QuizCompleted;
