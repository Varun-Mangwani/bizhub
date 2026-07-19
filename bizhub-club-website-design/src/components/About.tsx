import { Quote, Rocket, Target, Users2 } from "lucide-react";
import Reveal from "./decor/Reveal";
import { DotMatrix, PlusPattern } from "./decor/Decor";

const HIGHLIGHTS = [
  { icon: Rocket, value: "2019", label: "Founded" },
  { icon: Users2, value: "300+", label: "Community" },
  { icon: Target, value: "40+", label: "Mentors" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      <DotMatrix className="hidden lg:block top-10 right-10 opacity-60" />
      <PlusPattern className="hidden lg:block bottom-24 left-16" />

      <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-[28px] border border-[#EAEAEA] bg-[#F8F8F8]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="BizHub Club members collaborating"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 w-[230px] rounded-2xl border border-[#EAEAEA] bg-[#ECDBCC] p-5 shadow-xl sm:-right-10">
              <Quote className="mb-2 text-[#4169E1]" size={22} />
              <p className="text-sm leading-snug text-[#000000]">
                "We don't just teach business, we build founders."
              </p>
            </div>
            <div className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-full border border-dashed border-[#4169E1] opacity-60 sm:block" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="section-heading-eyebrow mb-5">About BizHub</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-[Sora] text-4xl font-bold leading-tight text-[#000000] sm:text-5xl">
              A community built for <span className="text-[#4169E1]">founders</span>, by founders.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#6B7280]">
              BizHub Club is Aryan College's official entrepreneurship cell — a space where
              students step out of the classroom and into the real world of business. We host
              workshops, mentor startups, and connect students with industry leaders to turn bold
              ideas into ventures that matter.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-8 border-l-2 border-[#4169E1] pl-6 text-lg font-medium italic text-[#000000]">
              "Entrepreneurship is not a career path — it's a mindset. At BizHub, we build that
              mindset together."
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#EAEAEA] pt-8">
              {HIGHLIGHTS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="card p-5 text-center">
                  <Icon className="mx-auto mb-2 text-[#4169E1]" size={22} />
                  <p className="font-num text-xl font-bold text-[#000000]">{value}</p>
                  <p className="mt-0.5 text-xs text-[#6B7280]">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
