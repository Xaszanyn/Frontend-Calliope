import { useEffect } from "react";

export default function Quiz(props) {
  var questionAnswer;

  function setAnswers() {
    document.querySelectorAll("#answers li").forEach((answer, i) => {
      answer.addEventListener("click", () => {
        questionAnswer = i;
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

      props.setAnswer(questionAnswer);
    });
  }, []);

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
    <section className="content">
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
    </section>
  );
}
