import { useEffect, useState, useRef } from "react";
import { useLenis } from "./lib/useLenis";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Members from "./components/Members";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import SuccessStories from "./components/SuccessStories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import introVideo from "./images/intro.mp4";

export default function App() {
  useLenis();
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Fallback timeout in case video fails to load or play
    const t = setTimeout(() => setLoaded(true), 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#ECDBCC] text-[#000000] antialiased">
      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#ECDBCC] transition-opacity duration-1000 ${
          loaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <video
          ref={videoRef}
          src={introVideo}
          autoPlay
          muted
          playsInline
          onEnded={() => setLoaded(true)}
          className="h-[80%] w-[80%] max-w-4xl object-contain mix-blend-multiply opacity-90 animate-pulse-soft"
          style={{ animationDuration: '4s' }}
        />
      </div>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />

        <About />
        <VisionMission />
        <Members />
        <Gallery />
        <Events />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
