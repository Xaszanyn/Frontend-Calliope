export default function Feynman() {
  return (
    <section className="content" style={{ position: "relative" }}>
      <h4>Feynman Heading</h4>
      <div id="screen">
        <div id="leftScreen">
          <h3>Room List</h3>
          <ul>
            <li>
              <span>1) Dummy Name</span>
              <span>JOIN</span>
            </li>
            <li>
              <span>2) Davas Suka</span>
              <span>JOIN</span>
            </li>
            <li>
              <span>3) Zdravo Turske</span>
              <span>JOIN</span>
            </li>
            <li>
              <span>4) Hello World</span>
              <span>JOIN</span>
            </li>
            <li>
              <span>5) Dummy Stuff</span>
              <span>JOIN</span>
            </li>
            <li>
              <span>6) Something Name</span>
              <span>JOIN</span>
            </li>
          </ul>
        </div>
        <div id="rightScreen">
          <img src={require("../img/blur.png")} />
        </div>
      </div>
      <div id="modalScreen">
        <span style={{ marginBottom: ".5rem", display: "block" }}>
          I want to...
        </span>
        <button>Learn From Others</button>
        <button>Teach To Others</button>
      </div>
    </section>
  );
}
