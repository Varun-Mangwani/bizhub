import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, CalendarDays, Mic2, Lightbulb, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { icon: Users, value: 20, suffix: "+", label: "Active Members" },
  { icon: CalendarDays, value: 25, suffix: "+", label: "Events Hosted" },
  { icon: Mic2, value: 15, suffix: "+", label: "Industry Sessions" },
  { icon: Lightbulb, value: 8, suffix: "+", label: "Startup Ideas" },
  { icon: Trophy, value: 5, suffix: "+", label: "Awards Won" },
];

export default function Stats() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stats-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        }
      );

      const counters = rootRef.current?.querySelectorAll<HTMLElement>(".counter-num");
      counters?.forEach((counter) => {
        const target = Number(counter.dataset.value);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%", once: true },
          onUpdate: () => {
            counter.textContent = Math.floor(obj.val).toString();
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative -mt-10 z-10 px-6">
      <div className="container-px mx-auto max-w-[1200px]">
        <div className="stats-card glass grid grid-cols-2 gap-8 rounded-[28px] border border-[#EAEAEA] px-8 py-10 shadow-[0_30px_80px_-30px_rgba(17,17,17,0.15)] sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <Icon className="mb-1 text-[#F5C518]" size={26} strokeWidth={1.8} />
              <p className="font-num text-3xl font-bold text-[#111111] sm:text-4xl">
                <span className="counter-num" data-value={value}>0</span>{suffix}
              </p>
              <p className="text-xs font-medium text-[#6B7280] sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
