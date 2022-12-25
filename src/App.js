import React from "react";

import "./css/style.css";

import Navigation from "./components/Navigation";
import LessonVideo from "./components/LessonVideo";
import LessonText from "./components/LessonText";
import Quiz from "./components/Quiz";
import Progress from "./components/Progress";
import Forum from "./components/Forum";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <section id="page">
        <Navigation />
        <section id="main">
          <section id="content">
            <LessonVideo />
            <LessonText />
            <Quiz />
          </section>
          <aside>
            <Progress />
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
