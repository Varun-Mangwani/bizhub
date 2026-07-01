import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./decor/Reveal";
import { OrbitRings } from "./decor/Decor";

const STORIES = [
  {
    name: "Rohan Verma",
    achievement: "Founder, GreenCart — ₹1.2Cr Seed Funded",
    img: "https://images.pexels.com/photos/7752822/pexels-photo-7752822.jpeg?auto=compress&cs=tinysrgb&h=400",
    quote: "BizHub gave me my first pitch deck review and my first co-founder. Three years later, we're a funded startup solving sustainable grocery delivery.",
  },
  {
    name: "Meera Nair",
    achievement: "Founder, StudySprint — 50,000+ Users",
    img: "https://images.pexels.com/photos/29132010/pexels-photo-29132010.jpeg?auto=compress&cs=tinysrgb&h=400",
    quote: "The mentorship sessions at BizHub pushed me to validate my idea before writing a single line of code. That discipline shaped everything after.",
  },
  {
    name: "Aditya Singh",
    achievement: "Co-founder, FinLeap — Featured in TechCrunch",
    img: "https://images.pexels.com/photos/5497662/pexels-photo-5497662.jpeg?auto=compress&cs=tinysrgb&h=400",
    quote: "I walked into a BizHub workshop with a napkin sketch. I walked out with a business model canvas and the confidence to build FinLeap.",
  },
  {
    name: "Priya Desai",
    achievement: "Founder, CraftLoop — National Award Winner",
    img: "https://images.pexels.com/photos/34780953/pexels-photo-34780953.jpeg?auto=compress&cs=tinysrgb&h=400",
    quote: "BizHub's network connected me to my first investor. The club doesn't just teach entrepreneurship, it opens doors.",
  },
];

export default function SuccessStories() {
  return (
    <section id="stories" className="relative overflow-hidden bg-[#111111] py-28 lg:py-36">
      <div className="pointer-events-none absolute -top-40 right-0 opacity-10">
        <OrbitRings className="h-[500px] w-[500px]" />
      </div>
      <div className="container-px relative mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-heading-eyebrow justify-center mb-5 !text-[#F5C518]">Success Stories</p>
            <h2 className="font-[Sora] text-4xl font-bold text-white sm:text-5xl">
              From Idea to Industry
            </h2>
            <p className="mt-5 text-[16px] text-white/50">
              Real founders. Real ventures. Alumni who started their journey at BizHub Club.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: ".story-prev", nextEl: ".story-next" }}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
            className="!pb-4"
          >
            {STORIES.map((s) => (
              <SwiperSlide key={s.name}>
                <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                  <Quote className="mb-5 text-[#F5C518]" size={28} />
                  <p className="flex-1 text-[15px] leading-relaxed text-white/70">"{s.quote}"</p>
                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <img src={s.img} alt={s.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="font-[Sora] text-sm font-semibold text-white">{s.name}</p>
                      <p className="mt-0.5 text-xs text-[#F5C518]">{s.achievement}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-10 flex justify-center gap-4">
            <button className="story-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F5C518] hover:text-[#F5C518]" aria-label="Previous">
              <ArrowLeft size={18} />
            </button>
            <button className="story-next flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F5C518] hover:text-[#F5C518]" aria-label="Next">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
