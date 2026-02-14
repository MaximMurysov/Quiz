import { useState } from "react";
import styles from "./styles.module.css";
import { questions } from "./questions";
import QuestionNav from "./QuestionNav";
import QuizCompleted from "./QuizCompleted";
import QuestionCard from "./QuestionCard";
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
        <QuestionNav
          questions={questions}
          activeQuestion={activeQuestion}
          setActiveQuestion={setActiveQuestion}
        />
        <>
          {isFinish ? (
            <QuizCompleted
              score={score}
              questions={questions}
              tryAgain={tryAgain}
            />
          ) : (
            <QuestionCard
              activeQuestion={activeQuestion}
              questions={questions}
              nextAnswer={nextAnswer}
            />
          )}
        </>
      </div>
    </div>
  );
}
export default QuizApp;
