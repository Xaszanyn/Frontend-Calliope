import React, { useEffect, useState } from "react";

import "./css/style.css";

import Navigation from "./components/Navigation";
import LessonVideo from "./components/LessonVideo";
import LessonText from "./components/LessonText";
import Quiz from "./components/Quiz";
import Progress from "./components/Progress";
import Forum from "./components/Forum";
import Feynman from "./components/Feynman";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

export default function App() {
  if (!localStorage.progress) localStorage.progress = 0;

  const [page, setPage] = useState(true);

  const [progress, setProgress] = useState(parseInt(localStorage.progress));

  const [quiz, setQuiz] = useState({
    question: "This is a simple question. Which one is true?",
    answers: ["Marmaris", "İzmir", "Ankara", "İstanbul"],
    correctAnswer: 0,
  });

  const [answer, setAnswer] = useState();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY == 0) {
        document.querySelector("nav").classList.remove("smallNav");
        document.querySelector("h1").classList.remove("smallLogo");
      } else {
        document.querySelector("nav").classList.add("smallNav");
        document.querySelector("h1").classList.add("smallLogo");
      }
    });
  }, []);

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

  useEffect(() => {
    document.querySelector("#loading").style.display = "flex";
    setTimeout(() => {
      document.querySelector("#loading").classList.add("loaded");

      if (page) {
        document.querySelector("#storyboardPage").style.display = "block";
        document.querySelector("#profilePage").style.display = "none";
      } else {
        document.querySelector("#storyboardPage").style.display = "none";
        document.querySelector("#profilePage").style.display = "block";
      }
    }, 500);
    setTimeout(() => {
      document.querySelector("#loading").style.display = "none";
      document.querySelector("#loading").classList.remove("loaded");
    }, 800);
  }, [page]);

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
        <Navigation setPage={setPage} />
        <section id="storyboardPage">
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
          <section id="feynman">
            <Feynman />
          </section>
        </section>
        <section id="profilePage">
          <Profile />
        </section>
      </section>
      <Footer />

      <div id="loading">
        <div class="lds-dual-ring"></div>
      </div>
    </main>
  );
}
