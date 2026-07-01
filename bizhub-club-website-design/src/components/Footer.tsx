import { ArrowUpRight } from "lucide-react";
import { LinkedinIcon, InstagramIcon, TwitterIcon } from "./decor/SocialIcons";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Members", href: "#members" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#EAEAEA] bg-white pt-20 pb-10">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-12 border-b border-[#EAEAEA] pb-14 lg:flex-row lg:items-end">
          <div className="max-w-md">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNav("#home"); }} className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111111]">
                <span className="font-[Sora] text-sm font-bold text-[#F5C518]">B</span>
              </span>
              <span className="font-[Sora] text-[15px] font-bold tracking-tight text-[#111111]">
                BizHub<span className="text-[#F5C518]">.</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-[#6B7280]">
              Aryan College's entrepreneurship community — where ideas evolve into startups, and
              leaders are nurtured for tomorrow.
            </p>
          </div>

          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav("#contact"); }} className="btn-primary">
            Join BizHub Today <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
          <nav className="flex flex-wrap justify-center gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="text-sm text-[#6B7280] transition-colors hover:text-[#111111]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAEAEA] text-[#111111] transition-colors hover:border-[#F5C518]">
              <InstagramIcon size={15} />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAEAEA] text-[#111111] transition-colors hover:border-[#F5C518]">
              <LinkedinIcon size={15} />
            </a>
            <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAEAEA] text-[#111111] transition-colors hover:border-[#F5C518]">
              <TwitterIcon size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#EAEAEA] pt-6 text-xs text-[#6B7280] sm:flex-row">
          <p>© {new Date().getFullYear()} BizHub Club, Aryan College. All rights reserved.</p>
          <p>Designed with ❤️ for BizHub Club.</p>
        </div>
      </div>
    </footer>
  );
}
