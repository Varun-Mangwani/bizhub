import Reveal from "./decor/Reveal";
import { PlusPattern } from "./decor/Decor";
import { LinkedinIcon, InstagramIcon } from "./decor/SocialIcons";

const MEMBERS = [
  { name: "Varun Mangwani", role: "Core Member", img: "" },
  { name: "Kavya Sharma", role: "Core Member", img: "" },
  { name: "Mahendra", role: "Core Member", img: "" },
  { name: "Akshat Nahar", role: "Core Member", img: "" },
  { name: "Muskan Gangwani", role: "Core Member", img: "" },
  { name: "Kartik Soni", role: "Core Member", img: "" },
  { name: "Pramod Somani", role: "Core Member", img: "" },
  { name: "Vanshika", role: "Core Member", img: "" },
  { name: "Devesh Saini", role: "Core Member", img: "" },
  { name: "Piyush Tolani", role: "Core Member", img: "" },
  { name: "Iqra", role: "Core Member", img: "" },
  { name: "Hardik Khandelwal", role: "Core Member", img: "" },
  { name: "Ankit Yadav", role: "Core Member", img: "" },
  { name: "Tanish Purswani", role: "Core Member", img: "" },
  { name: "Krishang Pagdi", role: "Core Member", img: "" },
  { name: "Manjur Alam", role: "Core Member", img: "" },
  { name: "Gary Bedi", role: "Core Member", img: "" },
  { name: "Bhavya", role: "Core Member", img: "" },
  { name: "Lakshay", role: "Core Member", img: "" },
  { name: "Pradyuman Singh", role: "Core Member", img: "" },
  { name: "Anurag Pareek", role: "Core Member", img: "" },
  { name: "Jitisha", role: "Core Member", img: "" },
  { name: "Divesh Gurjar", role: "Core Member", img: "" },
];

export default function Members() {
  return (
    <section id="members" className="relative py-28 lg:py-36 overflow-hidden">
      <PlusPattern className="hidden lg:block top-16 right-24" />
      <div className="container-px mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-heading-eyebrow justify-center mb-5">The Team</p>
            <h2 className="font-[Sora] text-4xl font-bold text-[#111111] sm:text-5xl">
              Meet the Core Members
            </h2>
            <p className="mt-5 text-[16px] text-[#6B7280]">
              A team of driven, curious, and relentless student leaders building the future of
              entrepreneurship on campus.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.06}>
              <div className="group card relative overflow-hidden p-5 text-center">
                <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-transparent bg-[#F8F8F8] transition-colors duration-500 group-hover:border-[#F5C518] sm:h-32 sm:w-32">
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-[#EAEAEA]">{m.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <h3 className="font-[Sora] text-[15px] font-semibold text-[#111111] sm:text-base">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">{m.role}</p>
                <div className="mt-4 flex justify-center gap-3 opacity-0 -translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                  <a href="#" aria-label={`${m.name} LinkedIn`} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F8F8] text-[#111111] transition-colors hover:bg-[#F5C518]">
                    <LinkedinIcon size={14} />
                  </a>
                  <a href="#" aria-label={`${m.name} Instagram`} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F8F8] text-[#111111] transition-colors hover:bg-[#F5C518]">
                    <InstagramIcon size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
