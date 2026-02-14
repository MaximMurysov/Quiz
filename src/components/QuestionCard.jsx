import styles from "./styles.module.css";

function QuestionCard({ activeQuestion, questions, nextAnswer }) {
  return (
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
  );
}
export default QuestionCard;
