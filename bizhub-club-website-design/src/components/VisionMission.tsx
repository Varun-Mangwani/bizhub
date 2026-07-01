import { Eye, Compass } from "lucide-react";
import Reveal from "./decor/Reveal";
import { GridOverlay, FlowLines } from "./decor/Decor";

export default function VisionMission() {
  return (
    <section id="vision" className="relative py-28 lg:py-36 bg-[#F8F8F8] overflow-hidden">
      <FlowLines className="left-0 top-0 opacity-70 w-full" />
      <div className="container-px relative mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-heading-eyebrow justify-center mb-5">Purpose</p>
            <h2 className="font-[Sora] text-4xl font-bold text-[#111111] sm:text-5xl">
              Vision &amp; Mission
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card relative overflow-hidden p-10 lg:p-12 h-full">
              <GridOverlay className="opacity-60" />
              <div className="relative">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C518]/15">
                  <Eye className="text-[#111111]" size={26} />
                </div>
                <h3 className="font-[Sora] text-2xl font-bold text-[#111111]">Our Vision</h3>
                <p className="mt-5 text-[16px] leading-relaxed text-[#6B7280]">
                  To build a thriving ecosystem within Aryan College where every student has the
                  confidence, network, and resources to transform an idea into an impactful
                  enterprise — making entrepreneurship an accessible path for all.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[24px] bg-[#111111] p-10 lg:p-12 h-full">
              <GridOverlay className="opacity-10" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#F5C518]/10 blur-3xl" />
              <div className="relative">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C518]/20">
                  <Compass className="text-[#F5C518]" size={26} />
                </div>
                <h3 className="font-[Sora] text-2xl font-bold text-white">Our Mission</h3>
                <p className="mt-5 text-[16px] leading-relaxed text-white/60">
                  To empower students through mentorship, workshops, and real-world exposure —
                  bridging the gap between classroom learning and startup execution, while
                  cultivating leadership, resilience, and innovative thinking.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
