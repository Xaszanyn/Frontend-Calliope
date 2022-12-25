export default function Profile() {
  return (
    <section className="content">
      <div className="flex" style={{ paddingTop: "2rem" }}>
        <div id="profileLeft">
          <img src="https://randomuser.me/api/portraits/men/54.jpg"></img>
        </div>
        <div id="profileRight">
          <h4>Ekin Aslan</h4>
          <h5 style={{ marginBottom: "2rem" }}>ekinaslan.js@gmail.com</h5>
          <span className="displaying">Turkey</span>
          <span className="displaying">
            Profile Point:{" "}
            <span style={{ color: "var(--secondary)" }}>790</span>
          </span>
        </div>
      </div>
      <div style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
        <h5
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Completed Modules
        </h5>
        <ul id="completed">
          <li>English Native Speaking (Bundle)</li>
          <li>Complete English Business Terms</li>
          <li>Learning With Accents</li>
        </ul>
      </div>
    </section>
  );
}
