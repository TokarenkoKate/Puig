export function HistoryVideoSection() {
  return (
    <section className="history-video-section w-fixed">
      <video autoPlay controls loop playsInline>
        <source src="/assets/video/puig-history.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
