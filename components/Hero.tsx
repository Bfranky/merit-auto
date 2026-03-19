"use client";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, ChevronDown, Star, Zap, Clock, Award, Shield } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80"
          alt="Brand new luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1f]/95 via-[#050d1f]/80 to-[#050d1f]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1f] via-transparent to-transparent" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(30,64,175,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,64,175,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Rating badge */}
          <div
            className={`inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/40 rounded-full px-4 py-2 mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#fbbf24" className="text-yellow-400" />
              ))}
            </div>
            <span className="text-yellow-400 font-condensed font-bold text-sm tracking-wide">
              PERFECT 5.0 RATING · 10 VERIFIED REVIEWS
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none mb-4 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            MERIT
            <br />
            <span className="text-blue-400">AUTOMOBILE</span>
          </h1>

          <div
            className={`font-condensed text-xl sm:text-2xl md:text-3xl font-black text-yellow-400 mb-2 tracking-wide uppercase transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Home of Affordable Brand New Cars
          </div>

          <div
            className={`font-condensed text-lg sm:text-xl text-slate-300 mb-8 uppercase tracking-wider transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Drive Fresh · Drive New · Drive Merit
          </div>

          {/* Highlights */}
          <div
            className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {[
              { icon: Zap, label: "Brand New Cars!", color: "bg-red-500/20 border-red-500/50 text-red-300" },
              { icon: Award, label: "Affordable Prices", color: "bg-blue-500/20 border-blue-500/50 text-blue-300" },
              { icon: Star, label: "Perfect 5.0★", color: "bg-yellow-500/20 border-yellow-500/50 text-yellow-300" },
              { icon: Clock, label: "Open Until 8 PM", color: "bg-green-500/20 border-green-500/50 text-green-300" },
              { icon: Shield, label: "Stress-Free Process", color: "bg-purple-500/20 border-purple-500/50 text-purple-300" },
            ].map(({ icon: Icon, label, color }) => (
              <span key={label} className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-condensed font-bold tracking-wide uppercase ${color}`}>
                <Icon size={13} /> {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="#inventory"
              className="flex items-center justify-center gap-2 shimmer-btn text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all glow-blue"
            >
              <Zap size={20} /> View New Cars
            </a>
            <a
              href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20buying%20a%20brand%20new%20car.%20Can%20you%20show%20me%20what%27s%20available?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all"
            >
              <MessageCircle size={20} /> WhatsApp Us Now
            </a>
            <a
              href="tel:+2348169264568"
              className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/60 text-white px-6 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all backdrop-blur-sm"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>

          {/* Address */}
          <p className={`text-slate-400 text-sm font-condensed tracking-wide transition-all duration-700 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            📍 98 Baale Animashaun Road, Alakuko, Lagos · Open Daily Until 8:00 PM
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors animate-bounce"
      >
        <span className="text-xs font-condensed tracking-widest uppercase">Explore</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
