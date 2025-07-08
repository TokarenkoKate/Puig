export function VideoSection({ videoSrc }: { videoSrc: string }) {
  return (
    <section className="video-section w-fixed">
      <video controls loop playsInline className="w-full">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
