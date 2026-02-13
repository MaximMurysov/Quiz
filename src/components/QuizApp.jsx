import { useState } from "react";
import styles from "./styles.module.css";
import { questions } from "./questions";

function QuizApp() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <div className={styles.quiz}>
      <div className={styles.quizContainer}>
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
        <div className={styles.questionTitle}>
          <h3>
            Question {activeQuestion + 1}/{questions.length}
          </h3>
          {questions[activeQuestion].title}
        </div>
        <div className={styles.answers}>
          {questions[activeQuestion].list.map((elem, i) => (
            <div className={styles.answerElem}>
              <button className={styles.numberAnswer}>{i + 1}</button>
              <p className={styles.answerElemText}>{elem.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default QuizApp;
