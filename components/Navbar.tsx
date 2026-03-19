"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MessageCircle, ChevronRight, Star, Clock, Zap, Car, Shield, DollarSign } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "#home",
    id: "home",
  },
  {
    label: "New Cars",
    href: "#inventory",
    id: "inventory",
    mega: [
      { icon: Car, label: "Browse Inventory", sub: "All brand new models in stock", href: "#inventory" },
      { icon: Zap, label: "Latest Arrivals", sub: "Fresh this week", href: "#inventory" },
      { icon: Shield, label: "Custom Orders", sub: "Source any car brand new", href: "#services" },
      { icon: DollarSign, label: "Best Prices", sub: "Affordable factory-fresh deals", href: "#financing" },
    ],
  },
  {
    label: "Why New",
    href: "#why-new",
    id: "why-new",
  },
  {
    label: "Financing",
    href: "#financing",
    id: "financing",
  },
  {
    label: "Reviews",
    href: "#reviews",
    id: "reviews",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];

const ticker = [
  "🚗 Brand New Cars — 0 KM, Full Warranty",
  "⭐ Perfect 5.0 Rating — 10 Verified Reviews",
  "🕗 Open Until 8 PM Daily — Visit After Work!",
  "📍 98 Baale Animashaun Road, Alakuko Lagos",
  "💰 Affordable Brand New Cars — Call 0816 926 4568",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [tickerVisible, setTickerVisible] = useState(true);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      // Active section tracking
      const sections = ["home", "inventory", "why-new", "financing", "reviews", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ticker rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerVisible(false);
      setTimeout(() => {
        setTickerIdx((i) => (i + 1) % ticker.length);
        setTickerVisible(true);
      }, 350);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Close mega on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (id: string) => activeSection === id;

  return (
    <>
      {/* ── ANNOUNCEMENT TICKER BAR ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-9 flex items-center justify-between px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
        style={{
          background: "linear-gradient(90deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)",
          borderBottom: "1px solid rgba(251,191,36,0.25)",
        }}
      >
        {/* Left: star rating pill */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} fill="#fbbf24" className="text-yellow-400" />
          ))}
          <span className="text-yellow-300 text-[10px] font-condensed font-bold tracking-widest ml-1 uppercase">
            5.0 Perfect Rating
          </span>
        </div>

        {/* Centre: animated ticker */}
        <div className="flex-1 flex justify-center overflow-hidden">
          <span
            className={`text-white text-[11px] font-condensed font-semibold tracking-wide transition-all duration-300 ${
              tickerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {ticker[tickerIdx]}
          </span>
        </div>

        {/* Right: quick call */}
        <a
          href="tel:+2348169264568"
          className="hidden sm:flex items-center gap-1.5 text-[11px] text-blue-200 hover:text-white font-condensed font-bold tracking-wide transition-colors shrink-0"
        >
          <Phone size={11} /> 0816 926 4568
        </a>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header
        ref={megaRef}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          scrolled ? "top-0" : "top-9"
        } ${
          scrolled
            ? "bg-[#060f24]/96 backdrop-blur-xl shadow-2xl border-b border-blue-900/40"
            : "bg-gradient-to-b from-[#060f24]/90 to-transparent"
        }`}
        style={{
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(30,64,175,0.2)" : "none",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #fbbf24 30%, #ef4444 60%, #1e40af 100%)",
            opacity: scrolled ? 1 : 0,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>

            {/* ── LOGO ── */}
            <a href="#home" className="flex items-center gap-3 group shrink-0">
              {/* Animated logo mark */}
              <div className="relative">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                    boxShadow: "0 0 20px rgba(30,64,175,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                >
                  <span className="font-display text-white text-2xl leading-none">M</span>
                </div>
                {/* Live dot */}
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#060f24]">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-60" />
                </div>
              </div>

              <div className="leading-none">
                <div className="font-display text-[22px] tracking-widest leading-none text-white group-hover:text-blue-100 transition-colors">
                  MERIT{" "}
                  <span
                    className="text-transparent"
                    style={{
                      WebkitTextStroke: "1.5px #fbbf24",
                    }}
                  >
                    AUTO
                  </span>
                </div>
                <div className="text-[9px] text-blue-300/80 font-condensed font-bold tracking-[0.2em] uppercase mt-0.5">
                  Home of Brand New Cars
                </div>
              </div>
            </a>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = isActive(link.id);
                const hasMega = !!link.mega;
                const isMegaOpen = megaOpen === link.id;

                return (
                  <div key={link.id} className="relative">
                    <a
                      href={link.href}
                      onMouseEnter={() => hasMega ? setMegaOpen(link.id) : setMegaOpen(null)}
                      onClick={() => setMegaOpen(null)}
                      className={`relative flex items-center gap-1 px-4 py-2.5 text-[13px] font-condensed font-bold tracking-widest uppercase transition-all duration-200 rounded-lg group ${
                        active
                          ? "text-yellow-400"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {link.label}

                      {/* Active indicator dot */}
                      {active && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
                      )}

                      {/* Hover bg */}
                      <span
                        className={`absolute inset-0 rounded-lg transition-opacity duration-200 ${
                          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                        style={{ background: "rgba(30,64,175,0.15)" }}
                      />

                      {/* Animated underline */}
                      <span
                        className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300 origin-left"
                        style={{
                          background: active
                            ? "linear-gradient(90deg,#fbbf24,#f59e0b)"
                            : "linear-gradient(90deg,#3b82f6,#1e40af)",
                          transform: active ? "scaleX(1)" : "scaleX(0)",
                        }}
                      />
                    </a>

                    {/* ── MEGA DROPDOWN ── */}
                    {hasMega && isMegaOpen && (
                      <div
                        onMouseLeave={() => setMegaOpen(null)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl overflow-hidden z-50"
                        style={{
                          background: "linear-gradient(145deg, #0d1f3c 0%, #0a1628 100%)",
                          border: "1px solid rgba(30,64,175,0.4)",
                          boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(30,64,175,0.15)",
                        }}
                      >
                        {/* Dropdown header */}
                        <div className="px-4 py-3 border-b border-blue-900/40"
                          style={{ background: "rgba(30,64,175,0.1)" }}
                        >
                          <p className="text-[10px] font-condensed font-black text-blue-400 uppercase tracking-widest">
                            Explore Inventory
                          </p>
                        </div>

                        {link.mega!.map(({ icon: Icon, label, sub, href }) => (
                          <a
                            key={label}
                            href={href}
                            onClick={() => setMegaOpen(null)}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-blue-800/20 transition-colors group/item border-b border-blue-900/20 last:border-0"
                          >
                            <div className="w-9 h-9 rounded-xl bg-blue-900/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-700/50 transition-colors">
                              <Icon size={16} className="text-blue-400 group-hover/item:text-white transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white text-[12px] font-condensed font-bold uppercase tracking-wide leading-none mb-0.5">
                                {label}
                              </div>
                              <div className="text-slate-500 text-[10px] font-condensed truncate">{sub}</div>
                            </div>
                            <ChevronRight size={14} className="text-slate-600 group-hover/item:text-blue-400 transition-colors flex-shrink-0" />
                          </a>
                        ))}

                        {/* CTA inside dropdown */}
                        <div className="px-4 py-3" style={{ background: "rgba(30,64,175,0.08)" }}>
                          <a
                            href="https://wa.me/2348169264568?text=Hi!%20I%27m%20interested%20in%20your%20brand%20new%20cars."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-green-600 hover:bg-green-500 text-white text-[11px] font-condensed font-black uppercase tracking-widest transition-all hover:scale-105"
                          >
                            <MessageCircle size={12} /> WhatsApp for Quick Quote
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ── DESKTOP RIGHT CTAs ── */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {/* Hours pill */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <Clock size={11} className="text-green-400" />
                <span className="text-green-300 text-[10px] font-condensed font-bold tracking-wide uppercase">
                  Open · Until 8 PM
                </span>
              </div>

              {/* Call button */}
              <a
                href="tel:+2348169264568"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-condensed font-bold text-blue-200 hover:text-white hover:bg-blue-800/30 transition-all tracking-wide"
              >
                <Phone size={13} />
                0816 926 4568
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20buying%20a%20brand%20new%20car."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-condensed font-bold text-white bg-green-600 hover:bg-green-500 transition-all hover:scale-105 tracking-wide"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>

              {/* Primary CTA */}
              <a
                href="#inventory"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-condensed font-black text-white tracking-wide transition-all hover:scale-105 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
                  boxShadow: "0 4px 20px rgba(30,64,175,0.4)",
                }}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                <Zap size={13} /> View Cars
              </a>
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
              style={{
                background: open ? "rgba(239,68,68,0.15)" : "rgba(30,64,175,0.2)",
                border: `1px solid ${open ? "rgba(239,68,68,0.3)" : "rgba(30,64,175,0.3)"}`,
              }}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                    open ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    open ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                    open ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN DRAWER ── */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 lg:hidden w-[88vw] max-w-sm transition-all duration-500 ease-in-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #060f24 100%)",
          borderLeft: "1px solid rgba(30,64,175,0.3)",
          boxShadow: "-20px 0 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b border-blue-900/40 shrink-0"
          style={{ background: "rgba(30,64,175,0.08)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#1e40af,#1e3a8a)", boxShadow: "0 0 16px rgba(30,64,175,0.4)" }}
            >
              <span className="font-display text-white text-xl">M</span>
            </div>
            <div>
              <div className="font-display text-lg text-white tracking-widest leading-none">
                MERIT <span style={{ WebkitTextStroke: "1px #fbbf24", color: "transparent" }}>AUTO</span>
              </div>
              <div className="text-[9px] text-blue-300/70 font-condensed font-bold tracking-widest uppercase mt-0.5">
                Home of Brand New Cars
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center hover:bg-red-500/25 transition-colors"
          >
            <X size={15} className="text-red-400" />
          </button>
        </div>

        {/* Rating strip */}
        <div className="flex items-center justify-center gap-2 py-2.5 shrink-0"
          style={{ background: "rgba(251,191,36,0.05)", borderBottom: "1px solid rgba(251,191,36,0.1)" }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} fill="#fbbf24" className="text-yellow-400" />
            ))}
          </div>
          <span className="text-yellow-400/90 text-[10px] font-condensed font-bold tracking-widest uppercase">
            Perfect 5.0 Rating · 10 Reviews
          </span>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navLinks.map((link, idx) => {
            const active = isActive(link.id);
            const hasMega = !!link.mega;
            const isExpanded = mobileExpanded === link.id;

            return (
              <div key={link.id}>
                <div
                  className={`flex items-center rounded-xl overflow-hidden transition-all duration-200 ${
                    active
                      ? "bg-blue-900/30 border border-blue-700/40"
                      : "border border-transparent hover:border-blue-900/30 hover:bg-blue-900/15"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={() => { if (!hasMega) setOpen(false); }}
                    className={`flex-1 flex items-center gap-3 px-4 py-3.5 ${
                      active ? "text-yellow-400" : "text-slate-200"
                    }`}
                  >
                    {/* Active bar */}
                    <span
                      className={`w-1 h-5 rounded-full transition-all duration-200 flex-shrink-0 ${
                        active ? "bg-yellow-400" : "bg-blue-800/40"
                      }`}
                    />
                    <span className="font-condensed font-black text-base uppercase tracking-widest">
                      {link.label}
                    </span>
                  </a>

                  {hasMega && (
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : link.id)}
                      className="px-3 py-3.5 text-slate-500 hover:text-white transition-colors"
                    >
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile mega expansion */}
                {hasMega && isExpanded && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-blue-800/30 pl-3">
                    {link.mega!.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-blue-900/20 transition-colors group"
                      >
                        <Icon size={13} className="text-blue-500 group-hover:text-blue-300 flex-shrink-0" />
                        <span className="text-slate-400 group-hover:text-white text-sm font-condensed font-semibold uppercase tracking-wide transition-colors">
                          {label}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer footer CTAs */}
        <div className="px-4 py-4 space-y-3 border-t border-blue-900/40 shrink-0"
          style={{ background: "rgba(0,0,0,0.2)" }}
        >
          {/* Hours badge */}
          <div className="flex items-center justify-center gap-2 py-2 rounded-xl bg-green-900/20 border border-green-700/20">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <Clock size={12} className="text-green-400" />
            <span className="text-green-300 text-xs font-condensed font-bold uppercase tracking-widest">
              Open Now · Until 8:00 PM
            </span>
          </div>

          <a
            href="tel:+2348169264568"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-condensed font-black uppercase tracking-widest text-white transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg,#1e3a8a,#1e40af)",
              border: "1px solid rgba(59,130,246,0.3)",
              boxShadow: "0 4px 20px rgba(30,64,175,0.3)",
            }}
          >
            <Phone size={15} /> Call: 0816 926 4568
          </a>

          <a
            href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20buying%20a%20brand%20new%20car."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-condensed font-black uppercase tracking-widest text-white bg-green-600 hover:bg-green-500 transition-all hover:scale-[1.02]"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={15} /> WhatsApp Us Now
          </a>
        </div>
      </div>
    </>
  );
}
