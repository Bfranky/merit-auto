"use client";
import { Search, Tag, Landmark, FileText, Key } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Choose Your Dream Car",
    desc: "Browse our current inventory of brand new cars. Tell us what you're looking for — any make, any model. We'll find the perfect factory-fresh vehicle for you.",
    color: "from-blue-600 to-blue-400",
    border: "border-blue-500/30",
  },
  {
    icon: Tag,
    num: "02",
    title: "Get the Best Price",
    desc: "Transparent pricing discussion with competitive rates. We explain all flexible payment options, evaluate your trade-in, and share any current promos.",
    color: "from-yellow-600 to-yellow-400",
    border: "border-yellow-500/30",
  },
  {
    icon: Landmark,
    num: "03",
    title: "Secure Financing",
    desc: "Need financing? We connect you with reliable lenders, guide you through bank requirements, and make brand new car ownership genuinely affordable.",
    color: "from-green-600 to-green-400",
    border: "border-green-500/30",
  },
  {
    icon: FileText,
    num: "04",
    title: "Complete Documentation",
    desc: "We handle ALL the paperwork — stress-free, customer-proven! Registration, insurance guidance, customs clearing. You just sign and relax.",
    color: "from-purple-600 to-purple-400",
    border: "border-purple-500/30",
  },
  {
    icon: Key,
    num: "05",
    title: "Drive Home Your NEW Car!",
    desc: "Final inspection together. Handover of keys and full documents. Car orientation. Then drive away in your BRAND NEW car — after-sales support begins!",
    color: "from-red-600 to-red-400",
    border: "border-red-500/30",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#050d1f] to-[#0a1628] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%), radial-gradient(circle at 80% 50%, #ef4444 0%, transparent 50%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="font-condensed text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            How It Works
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            YOUR JOURNEY TO <span className="text-blue-400">NEW CAR</span> OWNERSHIP
          </h2>
          <p className="font-condensed text-xl text-slate-400 max-w-2xl mx-auto uppercase tracking-wide">
            Simple, Stress-Free Process in 5 Steps
          </p>
        </div>

        {/* Desktop: horizontal connector */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 opacity-30" />

          {steps.map(({ icon: Icon, num, title, desc, color, border }, i) => (
            <div key={num} className="flex-1 relative px-3">
              <div className={`group bg-[#0d1729] border ${border} rounded-2xl p-6 hover:border-white/20 card-hover transition-all h-full`}>
                {/* Step number circle */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>

                <div className={`font-display text-5xl text-center mb-2 bg-gradient-to-br ${color} bg-clip-text text-transparent opacity-20`}>
                  {num}
                </div>

                <h3 className="font-condensed font-black text-white uppercase text-center text-base mb-3 leading-tight tracking-wide">
                  {title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed text-center">{desc}</p>
              </div>

              {/* Arrow between cards */}
              {i < steps.length - 1 && (
                <div className="absolute -right-2 top-10 z-20 text-slate-600 font-bold text-lg hidden lg:block">›</div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden space-y-4">
          {steps.map(({ icon: Icon, num, title, desc, color, border }, i) => (
            <div key={num} className={`flex gap-4 bg-[#0d1729] border ${border} rounded-2xl p-5`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <div className={`font-condensed font-black text-xs bg-gradient-to-r ${color} bg-clip-text text-transparent uppercase tracking-widest mb-1`}>
                  STEP {num}
                </div>
                <h3 className="font-condensed font-black text-white uppercase text-sm mb-1 leading-tight">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
