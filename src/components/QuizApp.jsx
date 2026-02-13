import { useState } from "react";
import styles from "./styles.module.css";
import { questions } from "./questions";

function QuizApp() {
  return (
    <div className={styles.quiz}>
      <div className={styles.quizContainer}>
        <div className={styles.numberQuestion}>
          {questions.map((_, i) => (
            <button key={i} className={styles.questionItem}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default QuizApp;
