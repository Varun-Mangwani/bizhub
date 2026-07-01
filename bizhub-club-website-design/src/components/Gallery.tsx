import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Reveal from "./decor/Reveal";

const CATEGORIES = ["All", "Events", "Workshops", "Competitions", "Networking"] as const;

const IMAGES = [
  { src: "https://images.pexels.com/photos/8761310/pexels-photo-8761310.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Events", tall: true },
  { src: "https://images.pexels.com/photos/28683737/pexels-photo-28683737.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Workshops", tall: false },
  { src: "https://images.pexels.com/photos/8761650/pexels-photo-8761650.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Networking", tall: false },
  { src: "https://images.pexels.com/photos/8761636/pexels-photo-8761636.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Networking", tall: true },
  { src: "https://images.pexels.com/photos/15141493/pexels-photo-15141493.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Events", tall: false },
  { src: "https://images.pexels.com/photos/8761631/pexels-photo-8761631.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Workshops", tall: true },
  { src: "https://images.pexels.com/photos/18999484/pexels-photo-18999484.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Competitions", tall: false },
  { src: "https://images.pexels.com/photos/8761308/pexels-photo-8761308.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Networking", tall: false },
  { src: "https://images.pexels.com/photos/3321802/pexels-photo-3321802.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Competitions", tall: true },
  { src: "https://images.pexels.com/photos/31772887/pexels-photo-31772887.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Competitions", tall: false },
  { src: "https://images.pexels.com/photos/7942525/pexels-photo-7942525.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Events", tall: false },
  { src: "https://images.pexels.com/photos/31956997/pexels-photo-31956997.jpeg?auto=compress&cs=tinysrgb&h=900", cat: "Events", tall: true },
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
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === cat
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
                className={`group relative mb-5 block w-full overflow-hidden rounded-[20px] border border-[#EAEAEA] ${
                  img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
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
