import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="../public/title (4).png" alt="Macbook Title" />
      </div>
      <video
        ref={videoRef}
        src="../public/videos/hero (4).mp4"
        autoPlay
        muted
        playsInline
      />

      <button>Buy now</button>

      <p>From 1599$ or 1299$ with trade-in</p>
    </section>
  );
}

export default Hero;
