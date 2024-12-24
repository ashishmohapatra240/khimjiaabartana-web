export default function VideoSection() {
  return (
    <section className="h-screen overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full absolute scale-[2] duration-500 overflow-hidden md:ml-60 md:mt-0 mt-80"
      >
        {/* <source src="/videos/Hero.mp4" type="video/quicktime" /> */}
        <source src="/videos/Hero.mp4" />
      </video>
    </section>
  );
}
