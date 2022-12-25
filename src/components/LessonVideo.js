export default function LessonVideo() {
  return (
    <section className="content">
      <h3>Lesson Title</h3>
      <iframe
        src="https://www.youtube.com/embed/wFt9odQjJEY?controls=0"
        title="Lesson"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
}
