import { useEffect, useState } from "react";

export default function Quiz(props) {
  const [questionAnswer, setQuestionAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);

  function setAnswers() {
    console.log("answers Setting..");
    document.querySelectorAll("#answers li").forEach((answer, i) => {
      answer.addEventListener("click", () => {
        setQuestionAnswer(i);
        document.querySelector("#next a").classList.remove("disabled");

        document.querySelectorAll("#answers li").forEach((otherAnswer, j) => {
          if (i != j) {
            otherAnswer.classList.remove("selected");
          } else otherAnswer.classList.add("selected");
        });
      });
    });
  }

  useEffect(() => {
    document.querySelector("#next a").addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.className == "disabled") return;
      setAnswering((a) => !a);
    });
  }, []);

  useEffect(() => {
    if (questionAnswer != -1) {
      props.setAnswer(questionAnswer);
    }
  }, [answering]);

  useEffect(() => {
    document.querySelector("#quiz").classList.add("fade");

    setTimeout(() => {
      document.querySelector("#answers").innerHTML = "";
      props.quiz.answers.forEach((answer) => {
        document.querySelector("#answers").innerHTML += `<li>${answer}</li>`;
      });
      setAnswers();

      document.querySelector("#question").innerHTML = props.quiz.question;
    }, 500);

    setTimeout(() => {
      document.querySelector("#quiz").classList.remove("fade");
    }, 1000);
  }, [props.quiz]);

  return (
    <section
      id="quizSection"
      className="content"
      style={{ position: "relative" }}
    >
      <h4>Quiz Heading</h4>
      <section className="fade" id="quiz">
        <section id="question">
          This is a simple question. Which one is true?
        </section>
        <ul id="answers">
          <li>Ankara</li>
          <li>İstanbul</li>
          <li>İzmir</li>
          <li>Marmaris</li>
        </ul>
      </section>
      <div id="next">
        <a className="disabled" href="#">
          Next Question
        </a>
      </div>
      <div id="result" style={{ display: "none" }}>
        Congrats! You did it.
        <br /> <br />
        <a href="">GO</a>
      </div>
    </section>
  );
}
