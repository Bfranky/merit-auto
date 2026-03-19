"use client";
import { Star, Shield, Zap, ThumbsUp, Clock, Heart } from "lucide-react";

const badges = [
  { icon: Zap, label: "Brand New Vehicles Only", color: "text-red-400" },
  { icon: Shield, label: "Factory Fresh", color: "text-blue-400" },
  { icon: ThumbsUp, label: "Affordable Pricing", color: "text-yellow-400" },
  { icon: Heart, label: "Stress-Free Process", color: "text-green-400" },
  { icon: Star, label: "Excellent Service", color: "text-purple-400" },
  { icon: Clock, label: "Open Until 8 PM", color: "text-orange-400" },
];

export default function Trust() {
  return (
    <section id="trust" className="py-16 bg-gradient-to-b from-[#050d1f] to-[#0a1628] relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Big rating display */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center gap-3 bg-yellow-400/5 border border-yellow-400/20 rounded-3xl px-10 py-8 mb-8">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={36} fill="#fbbf24" className="text-yellow-400 drop-shadow-lg" />
              ))}
            </div>
            <div className="font-display text-7xl sm:text-8xl text-yellow-400 leading-none">5.0</div>
            <div className="font-condensed font-black text-2xl text-white tracking-wide uppercase">
              PERFECT RATING
            </div>
            <div className="text-slate-400 font-condensed text-lg">
              10 Happy Customers · 100% Recommended!
            </div>
          </div>

          <div className="font-condensed text-xl sm:text-2xl text-blue-300 font-bold uppercase tracking-wide mb-4">
            Nigeria&apos;s Home of Affordable Brand New Cars
          </div>

          <blockquote className="max-w-2xl mx-auto bg-blue-900/20 border border-blue-800/40 rounded-2xl p-6 text-slate-300 text-lg italic font-barlow">
            &ldquo;Merit automobile, home of affordable, brand new car, you will love it!&rdquo;
            <cite className="block mt-2 text-blue-400 font-condensed font-bold not-italic text-sm uppercase tracking-wide">
              — Oluwafemi Oyoyo, Verified Customer
            </cite>
          </blockquote>
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 bg-white/3 border border-white/8 rounded-2xl p-4 hover:bg-white/6 hover:border-white/15 transition-all card-hover"
            >
              <div className={`w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center ${color}`}
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <Icon size={22} className={color} />
              </div>
              <span className="text-center text-xs font-condensed font-bold text-slate-300 uppercase tracking-wide leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
