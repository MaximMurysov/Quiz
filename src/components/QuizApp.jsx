import { useState } from "react";
import styles from "./styles.module.css";
import { questions } from "./questions";

function QuizApp() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);

  const nextAnswer = (term) => {
    if (term) {
      setScore(score + 1);
    }

    if (activeQuestion === questions.length - 1) {
      setIsFinish(true);
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };
  const tryAgain = () => {
    setIsFinish(false);
    setScore(0);
    setActiveQuestion(0);
  };
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
        <>
          {isFinish ? (
            <div className={styles.quizComleted}>
              <h1>Quiz completed</h1>
              <p className={styles.quizResult}>
                Correct answers {score} / {questions.length}
              </p>
              <button className={styles.tryAgain} onClick={tryAgain}>
                Try again
              </button>
            </div>
          ) : (
            <>
              <div className={styles.questionTitle}>
                <h3>
                  Question {activeQuestion + 1}/{questions.length}
                </h3>
                {questions[activeQuestion].title}
              </div>
              <div className={styles.answers}>
                {questions[activeQuestion].list.map((elem, i) => (
                  <div key={i} className={styles.answerElem}>
                    <button className={styles.numberAnswer}>{i + 1}</button>
                    <p
                      onClick={() => nextAnswer(elem.term)}
                      className={styles.answerElemText}
                    >
                      {elem.answer}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
}
export default QuizApp;
