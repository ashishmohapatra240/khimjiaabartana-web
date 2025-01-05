export default function VideoSection() {
  return (
    <section className="h-[50vh] md:h-[100vh] overflow-hidden relative md:bg-[#aa030e] bg-[#b81d18]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full absolute top-0 md:scale-[1.9] md:hover:scale-[2] duration-500
          object-cover object-top md:ml-80 md:mt-0 mt-36 md:py-0 scale-[1.4] "
      >
        <source src="/media/Phone.mp4" media="(max-width: 768px)" />
        <source src="/media/Desktop.mp4" media="(min-width: 769px)" />
      </video>
    </section>
  );
}
