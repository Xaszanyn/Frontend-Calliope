export default function Forum() {
  return (
    <section className="content">
      <h4>Forum Heading</h4>
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
              Profile Name <span>25/12/2022</span>
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
              Profile Name <span>25/12/2022</span>
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
