"use client";
import { CheckCircle, XCircle } from "lucide-react";

const newBenefits = [
  "Zero mileage — you're the first owner",
  "Latest technology and safety features",
  "Full manufacturer warranty included",
  "No hidden mechanical issues",
  "That amazing new car feeling!",
  "Latest model year",
  "Factory-fresh condition",
  "Peace of mind guaranteed",
  "Lower initial maintenance costs",
  "Modern fuel efficiency",
];

const usedDrawbacks = [
  "Unknown vehicle history",
  "Possible hidden problems",
  "Older technology",
  "Limited or no warranty",
  "Wear and tear from prior use",
  "Previous accident risk",
  "Higher long-term repair costs",
  "Less modern safety tech",
];

const advantages = [
  { emoji: "👑", title: "Be First Owner", desc: "You control the entire car history from day one." },
  { emoji: "🛡️", title: "Full Warranty", desc: "Manufacturer warranty covers repairs for years." },
  { emoji: "💻", title: "Latest Tech", desc: "Advanced infotainment, safety & fuel economy." },
  { emoji: "✅", title: "Zero Hidden Issues", desc: "No accidents, no mechanical surprises." },
  { emoji: "🏦", title: "Easier Financing", desc: "Banks prefer new cars — better rates await." },
  { emoji: "📈", title: "Better Resale", desc: "New cars with full records hold value longer." },
  { emoji: "🎨", title: "Customization", desc: "Pick your color, features, and trim level." },
  { emoji: "⛽", title: "Fuel Efficient", desc: "Newest engines designed for maximum economy." },
];

export default function WhyNew() {
  return (
    <section id="why-new" className="py-20 bg-[#050d1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="font-condensed text-yellow-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            The Merit Advantage
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            BRAND NEW <span className="text-yellow-400">WINS</span>
          </h2>
          <p className="font-condensed text-xl text-slate-400 max-w-2xl mx-auto uppercase tracking-wide">
            Why settle for used when Merit makes NEW affordable?
          </p>
        </div>

        {/* Comparison table */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* New cars column */}
          <div className="bg-gradient-to-b from-blue-900/30 to-blue-900/10 border border-blue-500/40 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-display text-white text-xl">M</div>
              <div>
                <div className="font-condensed font-black text-white uppercase text-lg tracking-wide">Merit Automobile</div>
                <div className="font-condensed text-blue-400 text-sm font-semibold uppercase">Brand New Cars ✓</div>
              </div>
            </div>
            <div className="space-y-3">
              {newBenefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm font-condensed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Used cars column */}
          <div className="bg-gradient-to-b from-slate-800/30 to-slate-800/10 border border-slate-700/40 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-500" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 text-xl">?</div>
              <div>
                <div className="font-condensed font-black text-slate-300 uppercase text-lg tracking-wide">Used Car Dealers</div>
                <div className="font-condensed text-slate-500 text-sm font-semibold uppercase">Unknown History ✗</div>
              </div>
            </div>
            <div className="space-y-3">
              {usedDrawbacks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <XCircle size={16} className="text-red-400 flex-shrink-0" />
                  <span className="text-slate-400 text-sm font-condensed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="text-center mb-16 bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6">
          <p className="font-condensed text-xl text-yellow-300 font-bold">
            💡 At Merit, you get NEW car benefits at prices you thought were only possible for used cars!
          </p>
        </div>

        {/* 8 advantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map(({ emoji, title, desc }) => (
            <div key={title} className="bg-white/3 border border-white/8 rounded-2xl p-5 text-center hover:bg-white/6 hover:border-blue-700/40 card-hover transition-all">
              <div className="text-4xl mb-3">{emoji}</div>
              <div className="font-condensed font-black text-white uppercase text-base mb-2">{title}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
