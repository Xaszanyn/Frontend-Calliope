export default function Quiz() {
  return (
    <section className="content">
      <h4>Quiz Heading</h4>
      <section id="quiz">This is a simple question. Which one is true?</section>
      <ul id="answers">
        <li>Ankara</li>
        <li>İstanbul</li>
        <li>İzmir</li>
        <li>Marmaris</li>
      </ul>
      <div id="next">
        <a className="disabled" href="#">
          Next Question
        </a>
      </div>
    </section>
  );
}
