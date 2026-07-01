import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import Magnetic from "./decor/Magnetic";
import { OrbitRings, GlowBlur, WireframeRocket, GrowthChart, NetworkNodes, DotMatrix, PlusPattern } from "./decor/Decor";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 60, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12 },
          "-=0.35"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.45"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.35"
        )
        .fromTo(
          ".hero-art",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 1.1 },
          "-=0.9"
        );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // mouse-following subtle glow
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = rootRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      gsap.to(glow, {
        x: e.clientX - rect.left - 250,
        y: e.clientY - rect.top - 250,
        duration: 0.9,
        ease: "power3.out",
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32"
    >
      {/* Background decor */}
      <div ref={glowRef} className="pointer-events-none absolute h-[500px] w-[500px] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, rgba(245,197,24,0.25), transparent 70%)", top: 0, left: 0 }} />
      <GlowBlur className="h-[420px] w-[420px] -top-40 -left-40" />
      <GlowBlur className="h-[300px] w-[300px] bottom-0 right-0" />
      <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_70%)]" />
      <PlusPattern className="hidden md:block top-24 left-[8%] animate-pulse-soft" />
      <PlusPattern className="hidden md:block top-1/3 right-[12%] animate-pulse-soft" />
      <PlusPattern className="hidden md:block bottom-20 left-[20%] animate-pulse-soft" />

      <div className="container-px relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="hero-eyebrow section-heading-eyebrow mb-6">BizHub Club · Aryan College</p>
          <h1 className="font-[Sora] text-[44px] leading-[1.05] font-bold tracking-tight text-[#111111] sm:text-[58px] lg:text-[76px]">
            <span className="hero-line block overflow-hidden">Empowering</span>
            <span className="hero-line block overflow-hidden">Tomorrow's <span className="text-[#F5C518]">Entrepreneurs</span>.</span>
          </h1>
          <p className="hero-sub mt-7 max-w-[520px] text-[17px] leading-relaxed text-[#6B7280]">
            BizHub Club is Aryan College's entrepreneurship community where ideas evolve into
            startups, leaders are nurtured, and innovation meets opportunity.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#contact" className="hero-cta btn-primary">
                Join BizHub <ArrowUpRight size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#events" className="hero-cta btn-secondary">
                <PlayCircle size={18} /> Explore Events
              </a>
            </Magnetic>
          </div>

          <div className="mt-16 grid max-w-[420px] grid-cols-3 gap-6 border-t border-[#EAEAEA] pt-8">
            <div className="hero-stat">
              <p className="font-num text-2xl font-semibold text-[#111111]">20+</p>
              <p className="mt-1 text-xs text-[#6B7280]">Members</p>
            </div>
            <div className="hero-stat">
              <p className="font-num text-2xl font-semibold text-[#111111]">25+</p>
              <p className="mt-1 text-xs text-[#6B7280]">Events</p>
            </div>
            <div className="hero-stat">
              <p className="font-num text-2xl font-semibold text-[#111111]">5+</p>
              <p className="mt-1 text-xs text-[#6B7280]">Awards Won</p>
            </div>
          </div>
        </div>

        {/* Right — animated startup ecosystem */}
        <div className="hero-art relative mx-auto h-[460px] w-full max-w-[580px] sm:h-[560px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <OrbitRings className="h-[500px] w-[500px] sm:h-[620px] sm:w-[620px]" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow drop-shadow-2xl">
            <WireframeRocket className="h-[210px] w-auto sm:h-[260px]" />
          </div>
          <div className="absolute -left-4 top-12 hidden rounded-2xl border border-white/50 bg-white/60 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:block animate-float-slower">
            <GrowthChart className="h-[90px] w-[140px]" />
          </div>
          <div className="absolute bottom-6 -right-6 hidden rounded-2xl border border-white/50 bg-white/60 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:block animate-float-slow">
            <NetworkNodes className="h-[110px] w-[150px]" />
          </div>
          <DotMatrix className="hidden sm:block -bottom-10 left-4 opacity-60" />
          <div className="absolute top-4 right-2 flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-5 py-2.5 text-sm font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.05)] backdrop-blur-xl animate-float-slower text-[#111111]">
            <span className="text-lg">🚀</span> <span>Idea <span className="text-[#6B7280]">→</span> Startup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
