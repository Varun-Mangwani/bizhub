import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Reveal from "./decor/Reveal";

import img1 from "../images/img1.webp";
import img2 from "../images/_Celebrating innovation_ teamwork_ and fresh thinking_ Congratulations to the winning team of the Brand Rejuvenation Challenge_ and kudos to all participa_2.webp";
import img3 from "../images/_Celebrating innovation_ teamwork_ and fresh thinking_ Congratulations to the winning team of the Brand Rejuvenation Challenge_ and kudos to all participa_3.webp";
import img4 from "../images/_Celebrating innovation_ teamwork_ and fresh thinking_ Congratulations to the winning team of the Brand Rejuvenation Challenge_ and kudos to all participa_4.webp";
import img5 from "../images/_From boardrooms to back offices _ is AI taking ov(JPG).jpg.jpeg";
import img6 from "../images/_From boardrooms to back offices _ is AI taking ov(JPG)_1.jpg.jpeg";
import img7 from "../images/_From boardrooms to back offices _ is AI taking ov(JPG)_2.jpg.jpeg";
import img8 from "../images/_From boardrooms to back offices _ is AI taking ov(JPG)_3.jpg (1).jpeg";
import img9 from "../images/_From boardrooms to back offices _ is AI taking ov(JPG)_3.jpg.jpeg";
import img10 from "../images/_Success is not just about winning_ but about the ideas you contribute along the way._ ✨__BizHub Club proudly congratulates Varun Mangwani🎉 for being (.webp";
import img11 from "../images/_Success is not just about winning_ but about the ideas you contribute along the way._ ✨__BizHub Club proudly congratulates Varun Mangwani🎉 for being_1.webp";
import img12 from "../images/_Success is not just about winning_ but about the ideas you contribute along the way._ ✨__BizHub Club proudly congratulates Varun Mangwani🎉 for being_2.webp";
import img13 from "../images/_Success is not just about winning_ but about the ideas you contribute along the way._ ✨__BizHub Club proudly congratulates Varun Mangwani🎉 for being_3.webp";

const CATEGORIES = ["All", "Events", "Workshops", "Competitions", "Networking"] as const;

const IMAGES = [
  { src: img1, cat: "Competitions", tall: true },
  { src: img2, cat: "Events", tall: false },
  { src: img3, cat: "Networking", tall: false },
  { src: img4, cat: "Competitions", tall: true },
  { src: img5, cat: "Workshops", tall: false },
  { src: img6, cat: "Workshops", tall: true },
  { src: img7, cat: "Networking", tall: false },
  { src: img8, cat: "Events", tall: false },
  { src: img9, cat: "Workshops", tall: true },
  { src: img10, cat: "Competitions", tall: false },
  { src: img11, cat: "Events", tall: true },
  { src: img12, cat: "Networking", tall: false },
  { src: img13, cat: "Competitions", tall: false },
];

export default function Gallery() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = IMAGES.filter((img) => active === "All" || img.cat === active);

  const openAt = (src: string) => {
    const idx = filtered.findIndex((i) => i.src === src);
    setLightbox(idx);
  };

  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <section id="gallery" className="relative py-28 lg:py-36 bg-[#F8F8F8]">
      <div className="container-px mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-heading-eyebrow justify-center mb-5">Moments</p>
            <h2 className="font-[Sora] text-4xl font-bold text-[#111111] sm:text-5xl">Gallery</h2>
            <p className="mt-5 text-[16px] text-[#6B7280]">
              A glimpse into the energy, ideas, and collaboration that define BizHub Club.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${active === cat
                    ? "border-[#111111] bg-[#111111] text-[#F5C518]"
                    : "border-[#EAEAEA] bg-white text-[#111111] hover:border-[#F5C518]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 columns-2 gap-5 sm:columns-3 lg:columns-4">
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.button
                layout
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openAt(img.src)}
                className={`group relative mb-5 block w-full overflow-hidden rounded-[20px] border border-[#EAEAEA] ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
              >
                <img
                  src={img.src}
                  alt={img.cat}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#111111]/0 transition-colors duration-400 group-hover:bg-[#111111]/30">
                  <ZoomIn className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" size={24} />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/90 p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-[#F5C518]"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 sm:left-10 text-white/80 hover:text-[#F5C518]"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={filtered[lightbox].src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightbox].src}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 sm:right-10 text-white/80 hover:text-[#F5C518]"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
