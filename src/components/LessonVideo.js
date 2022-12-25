export default function LessonVideo() {
  return (
    <section id="lessonVideo" className="content">
      <h3>Lesson Title</h3>
      <div id="frame">
        <iframe
          src="https://www.youtube.com/embed/wFt9odQjJEY?controls=0"
          title="Lesson"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}
