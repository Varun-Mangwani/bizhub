import Reveal from "./decor/Reveal";
import { PlusPattern } from "./decor/Decor";
import { LinkedinIcon, InstagramIcon } from "./decor/SocialIcons";

const MEMBERS = [
  { name: "Vanshika Khandelwal", role: "CEO", img: "" },
  { name: "Jitisha Golani", role: "Vice President", img: "" },

  { name: "Kavya Sharma", role: "Research & Development Head", img: "" },
  { name: "Iqra Bano", role: "Communication Head", img: "" },
  { name: "Muskan Gangwani", role: "Social Media Head", img: "" },
  { name: "Piyush Tolani", role: "Multimedia Head", img: "" },
  { name: "Varun Mangwani", role: "IT Head", img: "" },
  { name: "Mahendra", role: "Networking Head", img: "" },
  { name: "Bhavya Jain", role: "Operations Head", img: "" },

  { name: "Akshat Nahar", role: "Core Member", img: "" },
  { name: "Kartik Soni", role: "Core Member", img: "" },
  { name: "Pramod Somani", role: "Core Member", img: "" },
  { name: "Hardik Khandelwal", role: "Core Member", img: "" },
  { name: "Ankit Yadav", role: "Core Member", img: "" },
  { name: "Tanish Purswani", role: "Core Member", img: "" },
  { name: "Krishang Pagdi", role: "Core Member", img: "" },
  { name: "Manjur Alam", role: "Core Member", img: "" },
  { name: "Gary Bedi", role: "Core Member", img: "" },
  { name: "Lakshay Vaishnav", role: "Core Member", img: "" },
  { name: "Pradyuman Singh", role: "Core Member", img: "" },
];

export default function Members() {
  return (
    <section id="members" className="relative py-28 lg:py-36 overflow-hidden">
      <PlusPattern className="hidden lg:block top-16 right-24" />
      <div className="container-px mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-heading-eyebrow justify-center mb-5">The Team</p>
            <h2 className="font-[Sora] text-4xl font-bold text-[#000000] sm:text-5xl">
              Meet the Core Members
            </h2>
            <p className="mt-5 text-[16px] text-[#6B7280]">
              A team of driven, curious, and relentless student leaders building the future of
              entrepreneurship on campus.
            </p>
          </div>
        </Reveal>

        {/* CEO & Vice Presidents */}
        {(() => {
          const ceo = MEMBERS.filter((m) => m.role === "CEO");
          const vps = MEMBERS.filter((m) => m.role === "Vice President");
          const top = [...ceo, ...vps];
          if (top.length === 0) return null;
          return (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {top.map((m, i) => (
                <Reveal key={m.name} delay={(i % 2) * 0.06}>
                  <div className="group card relative overflow-hidden p-5 text-center">
                    <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-transparent bg-[#F8F8F8] transition-colors duration-500 group-hover:border-[#4169E1] sm:h-32 sm:w-32">
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
                    <h3 className="font-[Sora] text-[15px] font-semibold text-[#000000] sm:text-base">{m.name}</h3>
                    <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">{m.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          );
        })()}

        {/* Heads */}
        {(() => {
          const heads = MEMBERS.filter((m) => m.role && m.role.includes("Head"));
          if (heads.length === 0) return null;
          return (
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Heads</h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {heads.map((m, i) => (
                  <Reveal key={m.name} delay={(i % 4) * 0.06}>
                    <div className="group card relative overflow-hidden p-5 text-center">
                      <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-transparent bg-[#F8F8F8] transition-colors duration-500 group-hover:border-[#4169E1] sm:h-32 sm:w-32">
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
                      <h3 className="font-[Sora] text-[15px] font-semibold text-[#000000] sm:text-base">{m.name}</h3>
                      <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">{m.role}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Other Members */}
        {(() => {
          const others = MEMBERS.filter((m) => !["CEO", "Vice President"].includes(m.role) && !(m.role && m.role.includes("Head")));
          if (others.length === 0) return null;
          return (
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Members</h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {others.map((m, i) => (
                  <Reveal key={m.name} delay={(i % 4) * 0.06}>
                    <div className="group card relative overflow-hidden p-5 text-center">
                      <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-transparent bg-[#F8F8F8] transition-colors duration-500 group-hover:border-[#4169E1] sm:h-32 sm:w-32">
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
                      <h3 className="font-[Sora] text-[15px] font-semibold text-[#000000] sm:text-base">{m.name}</h3>
                      <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">{m.role}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
