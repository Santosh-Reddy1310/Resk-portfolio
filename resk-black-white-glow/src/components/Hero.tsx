import { useState } from "react";

export default function Hero() {
  const [cardPosition, setCardPosition] = useState({ x: 24, y: 24 });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const cardWidth = 288;
    const cardHeight = 200;
    const minX = 0;
    const minY = 0;
    const maxX = rect.width - cardWidth;
    const maxY = rect.height - cardHeight;
    const nextX = event.clientX - rect.left + 16;
    const nextY = event.clientY - rect.top + 16;

    setCardPosition({
      x: Math.max(minX, Math.min(nextX, maxX)),
      y: Math.max(minY, Math.min(nextY, maxY)),
    });
  };

  const handleMouseLeave = () => {
    setCardPosition({ x: 24, y: 24 });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/deipj6eb9/video/upload/f_auto:video,vc_auto,q_auto:best,w_1920/From_KlickPin_CF-_Productivity_Hacks_Inspiration_for_Back-to-School_1651_-_P20XkTBJq_gcqns5.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/65" />

      <div className="relative z-10 h-full w-full">
        <div
          className="absolute w-full max-w-[18rem] rounded-2xl border border-white/25 bg-black/45 p-4 text-white shadow-2xl backdrop-blur-md sm:max-w-xs"
          style={{
            left: `${cardPosition.x}px`,
            top: `${cardPosition.y}px`,
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/75">Portfolio</p>
          <h1 className="mt-2 text-lg font-semibold leading-tight sm:text-xl">
            Reddy Santosh Kumar
          </h1>
          <p className="mt-2 text-xs text-white/90 sm:text-sm">
            Full Stack Developer and AI/ML Engineer building practical, intelligent products.
          </p>
          <div className="mt-3 space-y-1 text-[11px] text-white/80 sm:text-xs">
            <p>Alias: RESK</p>
            <p>Location: Vijayawada, Andhra Pradesh, India</p>
            <p>Email: reddysantosh1310@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
