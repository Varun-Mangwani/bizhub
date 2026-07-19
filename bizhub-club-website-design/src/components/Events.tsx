import { useState } from "react";
import { CalendarDays, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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

// Simple calendar generation for demo
const generateCalendar = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array(firstDay).fill(null);
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1)); // March 2026 for demo

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const days = generateCalendar(currentMonth.getFullYear(), currentMonth.getMonth());
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  return (
    <section id="events" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="container-px mx-auto max-w-[1000px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-heading-eyebrow justify-center mb-5">Events</p>
            <h2 className="font-[Sora] text-4xl font-bold text-[#000000] sm:text-5xl">
              Events &amp; Milestones
            </h2>
            <p className="mt-5 text-[16px] text-[#6B7280]">
              From workshops to summits — experiences that shape entrepreneurs.
            </p>
          </div>
        </Reveal>

        {/* 2 points / Segmented control */}
        <Reveal delay={0.1}>
          <div className="mt-10 mx-auto max-w-[300px] bg-[#ECDBCC] border border-[#EAEAEA] rounded-full p-1.5 flex shadow-sm">
            <button
              onClick={() => handleTabClick(0)}
              className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-all duration-300 ${activeIndex === 0 ? "bg-[#4169E1] text-[#ECDBCC] shadow-md" : "text-[#000000] hover:bg-black/5"}`}
            >
              Timeline
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-all duration-300 ${activeIndex === 1 ? "bg-[#4169E1] text-[#ECDBCC] shadow-md" : "text-[#000000] hover:bg-black/5"}`}
            >
              Calendar
            </button>
          </div>
        </Reveal>

        <div className="mt-16 w-full overflow-visible">
          <Swiper
            onSwiper={setSwiperInstance}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            spaceBetween={50}
            slidesPerView={1}
            autoHeight={true}
            allowTouchMove={true}
            modules={[Navigation]}
          >
            {/* Timeline View */}
            <SwiperSlide>
              <div className="relative pt-6 pb-20">
                <svg className="absolute left-[19px] top-0 h-full w-[2px] sm:left-1/2 sm:-translate-x-1/2" width="2" height="100%" preserveAspectRatio="none">
                  <line x1="1" y1="0" x2="1" y2="100%" stroke="#EAEAEA" strokeWidth="2" />
                  <line x1="1" y1="0" x2="1" y2="100%" stroke="#4169E1" strokeWidth="2" strokeDasharray="6 10" className="animate-dash" />
                </svg>

                <div className="flex flex-col gap-14">
                  {EVENTS.map((ev, i) => (
                    <div key={ev.title} className={`relative flex flex-col gap-6 sm:flex-row ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                      <div className="absolute left-0 top-1 z-10 sm:left-1/2 sm:-translate-x-1/2">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold ${ev.status === "upcoming"
                              ? "border-[#4169E1] bg-[#4169E1] text-[#ECDBCC]"
                              : "border-[#EAEAEA] bg-[#ECDBCC] text-[#6B7280]"
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
                              <span className="rounded-full bg-[#4169E1]/20 px-2.5 py-0.5 text-[#000000]">Upcoming</span>
                            )}
                          </div>
                          <h3 className="mt-3 font-[Sora] text-xl font-bold text-[#000000]">{ev.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{ev.desc}</p>
                          {ev.status === "upcoming" && (
                            <a href="#contact" className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#000000] group ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                              Register Now <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            {/* Calendar View */}
            <SwiperSlide>
              <div className="max-w-[700px] mx-auto pb-10">
                <div className="card p-6 sm:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <button onClick={prevMonth} className="p-2 rounded-full hover:bg-black/5 transition-colors">
                      <ChevronLeft size={24} className="text-[#000000]" />
                    </button>
                    <h3 className="text-xl font-[Sora] font-bold text-[#000000]">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h3>
                    <button onClick={nextMonth} className="p-2 rounded-full hover:bg-black/5 transition-colors">
                      <ChevronRight size={24} className="text-[#000000]" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div key={day} className="text-sm font-semibold text-[#6B7280] py-2">
                        {day}
                      </div>
                    ))}
                    {days.map((day, idx) => {
                      // Demo logic to highlight event dates
                      const isEvent = day === 14 || day === 22; // Hardcoded matches for Mar/Feb 2026 events for demo purposes
                      const currentMonthMatches = (currentMonth.getMonth() === 2 && day === 14) || (currentMonth.getMonth() === 1 && day === 22);

                      return (
                        <div
                          key={idx}
                          className={`aspect-square flex flex-col items-center justify-center rounded-xl text-sm transition-colors ${!day ? "" : "hover:bg-black/5 cursor-pointer"} ${day && currentMonthMatches ? "bg-[#4169E1]/10 border border-[#4169E1]/30 font-bold text-[#4169E1]" : "text-[#000000]"
                            }`}
                        >
                          {day && <span>{day}</span>}
                          {day && currentMonthMatches && <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1" />}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EAEAEA]">
                    <h4 className="text-sm font-semibold text-[#000000] mb-4">Upcoming in {monthNames[currentMonth.getMonth()]}</h4>
                    <div className="flex flex-col gap-3">
                      {currentMonth.getMonth() === 2 ? (
                        <div className="flex items-center gap-4 text-sm bg-black/5 p-3 rounded-xl">
                          <div className="flex flex-col items-center justify-center bg-[#ECDBCC] rounded-lg w-12 h-12 flex-shrink-0 border border-[#EAEAEA]">
                            <span className="text-[10px] uppercase text-[#6B7280] font-bold">Mar</span>
                            <span className="font-bold text-[#000000] text-lg">14</span>
                          </div>
                          <div>
                            <p className="font-semibold text-[#000000]">BizHub Summit 2026</p>
                            <p className="text-xs text-[#6B7280] mt-0.5">Innovation Auditorium</p>
                          </div>
                        </div>
                      ) : currentMonth.getMonth() === 1 ? (
                        <div className="flex items-center gap-4 text-sm bg-black/5 p-3 rounded-xl">
                          <div className="flex flex-col items-center justify-center bg-[#ECDBCC] rounded-lg w-12 h-12 flex-shrink-0 border border-[#EAEAEA]">
                            <span className="text-[10px] uppercase text-[#6B7280] font-bold">Feb</span>
                            <span className="font-bold text-[#000000] text-lg">22</span>
                          </div>
                          <div>
                            <p className="font-semibold text-[#000000]">Startup Bootcamp: Idea to MVP</p>
                            <p className="text-xs text-[#6B7280] mt-0.5">Seminar Hall B</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-[#6B7280]">No events scheduled for this month.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
