import { useEffect, useState } from "react";
import { useLenis } from "./lib/useLenis";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Members from "./components/Members";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import SuccessStories from "./components/SuccessStories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useLenis();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#111111] antialiased">
      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-opacity duration-700 ${
          loaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#111111]">
          <span className="font-[Sora] text-xl font-bold text-[#F5C518] animate-pulse-soft">B</span>
        </span>
      </div>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
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
