import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import Reveal from "./decor/Reveal";

const EVENTS = [
  {
    date: "Mar 14, 2026",
    venue: "Innovation Auditorium",
    title: "BizHub Summit 2026",
    desc: "A flagship summit bringing together founders, investors, and students for a day of ideas and pitches.",
    status: "upcoming",
  },
  {
    date: "Feb 22, 2026",
    venue: "Seminar Hall B",
    title: "Startup Bootcamp: Idea to MVP",
    desc: "A hands-on workshop guiding students through validating and building their first MVP in 48 hours.",
    status: "upcoming",
  },
  {
    date: "Dec 10, 2025",
    venue: "Main Auditorium",
    title: "Brand Rejuvenation Challenge",
    desc: "Teams transformed established brands through strategic rebranding and visual identity redesign to make them relevant to modern audiences.",
    status: "past",
  },
  {
    date: "Nov 15, 2025",
    venue: "Tech Innovation Lab",
    title: "AI Prompt Engineering Challenge",
    desc: "A competition on mastering AI interaction and optimizing prompts to unlock language model potential for real-world applications.",
    status: "past",
  },
  {
    date: "Oct 28, 2025",
    venue: "Debate Hall",
    title: "Grand Debate Challenge",
    desc: "Students showcased critical thinking and eloquent argumentation on contemporary business topics with research-backed arguments.",
    status: "past",
  },
  {
    date: "Oct 05, 2025",
    venue: "Conference Center",
    title: "Group Discussion: Geopolitical Dynamics & Global Affairs",
    desc: "A discussion exploring geopolitical issues and their impact on global economics, trade policies, and international business.",
    status: "past",
  },
];

export default function Events() {
  return (
    <section id="events" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="container-px mx-auto max-w-[1000px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-heading-eyebrow justify-center mb-5">Timeline</p>
            <h2 className="font-[Sora] text-4xl font-bold text-[#111111] sm:text-5xl">
              Events &amp; Milestones
            </h2>
            <p className="mt-5 text-[16px] text-[#6B7280]">
              From workshops to summits — a timeline of experiences that shape entrepreneurs.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-20">
          <svg className="absolute left-[19px] top-0 h-full w-[2px] sm:left-1/2 sm:-translate-x-1/2" width="2" height="100%" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="100%" stroke="#EAEAEA" strokeWidth="2" />
            <line x1="1" y1="0" x2="1" y2="100%" stroke="#F5C518" strokeWidth="2" strokeDasharray="6 10" className="animate-dash" />
          </svg>

          <div className="flex flex-col gap-14">
            {EVENTS.map((ev, i) => (
              <Reveal key={ev.title} delay={i * 0.05}>
                <div className={`relative flex flex-col gap-6 sm:flex-row ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                  <div className="absolute left-0 top-1 z-10 sm:left-1/2 sm:-translate-x-1/2">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold ${
                        ev.status === "upcoming"
                          ? "border-[#F5C518] bg-[#F5C518] text-[#111111]"
                          : "border-[#EAEAEA] bg-white text-[#6B7280]"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <div className="w-full pl-16 sm:w-1/2 sm:pl-0" />

                  <div className={`w-full pl-16 sm:w-1/2 sm:pl-0 ${i % 2 === 1 ? "sm:pr-14 sm:text-right" : "sm:pl-14"}`}>
                    <div
                      className={`card p-7 ${ev.status === "past" ? "opacity-70" : ""}`}
                    >
                      <div className={`flex flex-wrap items-center gap-3 text-xs font-medium text-[#6B7280] ${i % 2 === 1 ? "sm:justify-end" : ""}`}>
                        <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} /> {ev.date}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {ev.venue}</span>
                        {ev.status === "upcoming" && (
                          <span className="rounded-full bg-[#F5C518]/20 px-2.5 py-0.5 text-[#111111]">Upcoming</span>
                        )}
                      </div>
                      <h3 className="mt-3 font-[Sora] text-xl font-bold text-[#111111]">{ev.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{ev.desc}</p>
                      {ev.status === "upcoming" && (
                        <a href="#contact" className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] group ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                          Register Now <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
