import React, { useEffect, useState } from "react";

import "./css/style.css";

import Navigation from "./components/Navigation";
import LessonVideo from "./components/LessonVideo";
import LessonText from "./components/LessonText";
import Quiz from "./components/Quiz";
import Progress from "./components/Progress";
import Forum from "./components/Forum";
import Footer from "./components/Footer";

function App() {
  if (!localStorage.progress) localStorage.progress = 0;

  const [progress, setProgress] = useState(localStorage.progress);

  const [quiz, setQuiz] = useState({
    question: "This is a simple question. Which one is true?",
    answers: ["Marmaris", "İzmir", "Ankara", "İstanbul"],
    correctAnswer: 0,
  });

  const [answer, setAnswer] = useState();

  useEffect(() => {
    // SORU CEVAPLANDIĞINDA ALERTLENECEK
    if (answer) {
      setQuiz({
        question: "Is this the second question?",
        answers: ["Yes", "No"],
        correctAnswer: 0,
      });
    }
  }, [answer]);

  ////////////////////////////////////////////////////////////////// DEBUG ZONE
  useEffect(() => {
    document.addEventListener("keypress", function (event) {
      switch (event.key) {
        case "1":
          setProgress((progress) => progress + 10);
          break;
        case "2":
          setQuiz({
            question: "Is this the second question?",
            answers: ["Yes", "No"],
            correctAnswer: 0,
          });
      }
    });
  }, []);
  ////////////////////////////////////////////////////////////////// DEBUG ZONE

  return (
    <main>
      <section id="page">
        <Navigation />
        <section id="main">
          <section id="content">
            <LessonVideo />
            <LessonText />
            <Quiz quiz={quiz} setAnswer={setAnswer} />
          </section>
          <aside>
            <Progress progress={progress} />
          </aside>
        </section>
        <section id="forum">
          <Forum />
        </section>
      </section>
      <Footer />

      <script src="./js/script.js" />
    </main>
  );
}

export default App;
