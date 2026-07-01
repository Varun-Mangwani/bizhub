import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Members", href: "#members" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass border-b border-[#EAEAEA] py-3" : "border-b border-transparent py-6"
      }`}
    >
      <div className="container-px mx-auto flex max-w-[1440px] items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav("#home"); }} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111111]">
            <span className="font-[Sora] text-sm font-bold text-[#F5C518]">B</span>
          </span>
          <span className="font-[Sora] text-[15px] font-bold tracking-tight text-[#111111]">
            BizHub<span className="text-[#F5C518]">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
          className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm"
        >
          Join BizHub <ArrowUpRight size={16} />
        </a>

        <button
          className="lg:hidden text-[#111111]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#EAEAEA]"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  className="py-3 text-base font-medium text-[#111111] border-b border-[#F8F8F8]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                className="btn-primary mt-4 w-full"
              >
                Join BizHub <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
