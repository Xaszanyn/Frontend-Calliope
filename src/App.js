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

import {
  getContents,
  getLessons,
  getCategories,
  getQuizzes,
  getQuestions,
} from "./util/Request";

export default function App() {
  if (!localStorage.progress) localStorage.progress = 0;

  if (!localStorage.complete) localStorage.complete = "000";

  const [data, setData] = useState({});

  const [questionNo, setQuestionNo] = useState(0);

  const [rightAnswer, setRightAnswer] = useState(-1);

  const [allRightAnswers, setAllRightAnswers] = useState(0);

  const [page, setPage] = useState(true);

  const [progress, setProgress] = useState(parseInt(localStorage.progress));

  const [quiz, setQuiz] = useState({
    question: "This is a simple question. Which one is true?",
    answers: ["Marmaris", "İzmir", "Ankara", "İstanbul"],
    correctAnswer: 0,
  });

  const [complete, setComplete] = useState(localStorage.complete);

  const [answer, setAnswer] = useState(-1);

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

  useEffect(async function () {
    let completion = localStorage.complete;

    let d = await getData();

    let lesson = d.lessons[parseInt(completion[0])];
    let content = d.contents[parseInt(completion[0])];
    let quiz = d.quizzes[parseInt(completion[0])];

    console.log(d);

    let questions = await getQuestions(quiz.title);

    let answerTexts = [];
    questions[questionNo].answer.forEach((ans, i) => {
      answerTexts.push(ans.answer_text);

      if (ans.is_right) {
        setRightAnswer(-1);
        setRightAnswer(i);
        console.log("RIGHT IS " + i);
      }
    });

    document.querySelector("#lessonVideo h3").innerHTML =
      lesson.lesson_title +
      `<span class="difficulty ${assignDifficult(
        lesson.difficulty
      ).toLowerCase()}">${assignDifficult(lesson.difficulty)}</span>`;

    document.querySelector("#progress h5").innerHTML = lesson.lesson_title;

    document.querySelector("#quizSection h4").innerHTML = quiz.title;

    setQuiz({
      question: questions[questionNo].question_text,
      answers: answerTexts,
      correctAnswer: rightAnswer,
    });

    let v;
    if (completion[0] == "0") {
      v = "YUlNbVLJTJo";
    } else {
      v = "AVYfyTvc9KY";
    }

    document.querySelector("#frame").innerHTML = `<iframe
        src="https://www.youtube.com/embed/${v}?controls=0"
        title="Lesson"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;

    document.querySelector("#lessonText").innerHTML =
      content.content_text.replaceAll("\n", "<br>");
  }, []);

  function assignDifficult(difficulty) {
    switch (difficulty) {
      case 1:
        return "Beginner";
      case 2:
        return "Intermediate";
      case 3:
        return "Advance";
    }
  }

  useEffect(() => {
    if (answer != -1) {
      if (answer == rightAnswer) {
        setAllRightAnswers((a) => a + 1);
      }
      setAnswer(-1);
      setQuestionNo((q) => q + 1);
    }
  }, [answer]);

  useEffect(() => {
    if (questionNo == 0) return;

    let quiz = data.quizzes[parseInt(localStorage.complete[0])];

    if (quiz.questions.length == questionNo) {
      if (allRightAnswers >= 4) {
        if (complete == "000") {
          setComplete("100");
          setProgress(50);
          localStorage.progress = 50;
          localStorage.complete = "100";
        } else if (complete == "100") {
          setComplete("000");
          setProgress(100);
          localStorage.progress = 100;
          localStorage.complete = "000";
        }

        document.querySelector("#result").innerHTML = `Congrats! You did it.
        <br /> <br />
        <a href="">GO</a>`;
        document.querySelector("#result").style.display = "block";
      } else {
        document.querySelector("#result").innerHTML = `Failed, try again.
        <br /> <br />
        <a href="">GO</a>`;
        document.querySelector("#result").style.display = "block";
      }

      //FINAL
      return;
    }

    let answerTexts = [];
    quiz.questions[questionNo].answer.forEach((ans, i) => {
      answerTexts.push(ans.answer_text);

      if (ans.is_right) {
        setRightAnswer(-1);
        setRightAnswer(i);
        console.log("ANS IS " + i);
      }
    });

    document.querySelector("#quizSection h4").innerHTML = quiz.title;

    setQuiz({
      question: quiz.questions[questionNo].question_text,
      answers: answerTexts,
      correctAnswer: rightAnswer,
    });
  }, [questionNo]);

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

  async function getData() {
    let c = {};
    c.lessons = await getLessons();
    c.categories = await getCategories();
    c.quizzes = await getQuizzes();
    c.contents = await getContents();

    c.quizzes.forEach(async function (quiz, i) {
      c.quizzes[i].questions = await getQuestions(
        c.quizzes[i].title.replaceAll(" ", "%20")
      );
    });

    setData(c);

    console.log(c);

    return c;
  }

  ////////////////////////////////////////////////////////////////// DEBUG ZONE
  useEffect(() => {
    document.addEventListener("keypress", function (event) {
      switch (event.key) {
        case "1":
          break;
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
