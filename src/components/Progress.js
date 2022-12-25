import { useEffect } from "react";

export default function Progress(props) {
  useEffect(() => {
    document.querySelector("#progressBarInner span").innerHTML =
      props.progress + "%";
    document.querySelector("#progressBarInner").style.width =
      props.progress + "%";
  }, [props.progress]);

  return (
    <section id="progress" className="content">
      <h4>Progress</h4>
      <h5>Lesson Title</h5>
      <div id="progressBar">
        <div id="progressBarInner">
          <span>50%</span>
        </div>
      </div>
    </section>
  );
}
