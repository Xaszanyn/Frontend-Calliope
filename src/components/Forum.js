import { useEffect } from "react";

export default function Forum() {
  useEffect(() => {
    document.querySelector("#send a").addEventListener("click", (event) => {
      event.preventDefault();

      if (document.querySelector("textarea").value == "") return;

      let li = document.createElement("li");
      li.classList.add("squished");
      let img = document.createElement("img");
      img.src = "https://randomuser.me/api/portraits/men/54.jpg";
      img.classList.add("threadLeft");
      let right = document.createElement("div");
      right.classList.add("threadRight");
      let h6 = document.createElement("h6");
      h6.innerHTML = "Ekin Aslan ";
      let span = document.createElement("span");
      let today = new Date();
      span.innerHTML =
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear();
      h6.append(span);
      right.append(h6);
      let p = document.createElement("p");
      p.innerHTML = document.querySelector("textarea").value;
      document.querySelector("textarea").value = "";
      right.append(p);
      li.append(img);
      li.append(right);

      document.querySelector("#threads").append(li);
      setTimeout(() => {
        li.classList.remove("squished");
      }, 1000);
    });
  }, []);
  return (
    <section className="content">
      <h4>Forum</h4>
      <section>
        <textarea rows={3}></textarea>
        <br />
        <div id="send">
          <a href="#">Send</a>
        </div>
      </section>
      <ul id="threads">
        <li>
          <img
            className="threadLeft"
            src="https://randomuser.me/api/portraits/men/44.jpg"
          ></img>
          <div className="threadRight">
            <h6>
              Warren Carr <span>25/12/2022</span>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type
            </p>
          </div>
        </li>
        <li>
          <img
            className="threadLeft"
            src="https://randomuser.me/api/portraits/women/95.jpg"
          ></img>
          <div className="threadRight">
            <h6>
              Louise Scott <span>25/12/2022</span>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
