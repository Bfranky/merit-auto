"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "New Cars", href: "#inventory" },
  { label: "Why New", href: "#why-new" },
  { label: "Financing", href: "#financing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a1628]/95 backdrop-blur-md border-b border-blue-900/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center glow-blue group-hover:scale-105 transition-transform">
              <span className="font-display text-white text-xl">M</span>
            </div>
            <div>
              <div className="font-display text-xl text-white tracking-wider leading-none">
                MERIT <span className="text-yellow-400">AUTO</span>
              </div>
              <div className="text-[10px] text-blue-300 font-condensed font-semibold tracking-widest uppercase">
                Home of Brand New Cars
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-condensed font-semibold tracking-wide text-slate-300 hover:text-yellow-400 transition-colors uppercase rounded-lg hover:bg-blue-900/30"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+2348169264568"
              className="flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors"
            >
              <Phone size={15} />
              0816 926 4568
            </a>
            <a
              href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20buying%20a%20brand%20new%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
            >
              WhatsApp Us
            </a>
            <a
              href="#inventory"
              className="shimmer-btn text-white px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
            >
              View Cars
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 rounded-lg bg-blue-900/40"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0a1628]/98 backdrop-blur-md border-t border-blue-900/50 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-base font-condensed font-semibold tracking-wide text-slate-200 hover:text-yellow-400 hover:bg-blue-900/30 rounded-lg transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-blue-900/40">
              <a
                href="tel:+2348169264568"
                className="flex items-center justify-center gap-2 py-3 bg-blue-900/40 rounded-lg text-blue-200 font-semibold"
              >
                <Phone size={16} /> 0816 926 4568
              </a>
              <a
                href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20buying%20a%20brand%20new%20car."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-green-600 text-white text-center rounded-lg font-bold"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
