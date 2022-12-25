import { useEffect } from "react";

export default function Navigation(props) {
  useEffect(() => {
    document.querySelector("#storyboard").addEventListener("click", (event) => {
      event.preventDefault();

      props.setPage(true);
    });
    document.querySelector("#profile").addEventListener("click", (event) => {
      event.preventDefault();

      props.setPage(false);
    });
  }, []);

  return (
    <nav>
      <h1>Calliope</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a id="storyboard" href="#">
            Storyboard
          </a>
        </li>
        <li>
          <a id="profile" href="#">
            Profile
          </a>
        </li>
        <li>
          <a href="#">Sign Out</a>
        </li>
      </ul>
    </nav>
  );
}
