"use client";
import { Sparkles, DollarSign, Star, Smile, Headphones, Clock } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Brand New Cars — Not Used!",
    text: "We specialize in BRAND NEW, factory-fresh vehicles. No mileage, no previous owners, no worries. Just that amazing new car smell and experience!",
    color: "from-red-600 to-red-400",
    badge: "KEY BENEFIT",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    text: "Customers call us 'home of affordable brand new cars' for a reason! We make new car ownership possible with competitive pricing and flexible options.",
    color: "from-green-600 to-green-400",
    badge: "SAVE MORE",
  },
  {
    icon: Star,
    title: "Perfect 5.0★ Rating",
    text: "10 reviews, 10 perfect scores! Our customers LOVE us. 'I never regret my decision' — real customer quote. Join our family of satisfied car owners!",
    color: "from-yellow-600 to-yellow-400",
    badge: "AWARD WINNER",
  },
  {
    icon: Smile,
    title: "Stress-Free Process",
    text: "'The whole process was stress-free' — customer review. We handle everything from paperwork to delivery. You just enjoy your new ride!",
    color: "from-purple-600 to-purple-400",
    badge: "EASY BUY",
  },
  {
    icon: Headphones,
    title: "Excellent Customer Service",
    text: "Rated for 'excellent customer service' by multiple customers. We're not just here to sell — we're here to serve and build lasting relationships.",
    color: "from-blue-600 to-blue-400",
    badge: "TOP RATED",
  },
  {
    icon: Clock,
    title: "Extended Hours & Convenience",
    text: "Open until 8:00 PM daily! Work late? No problem. Visit us after office hours. Located on Baale Animashaun Road, Alakuko — easy to find!",
    color: "from-orange-600 to-orange-400",
    badge: "CONVENIENT",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#050d1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="font-condensed text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            WHY CHOOSE <span className="text-blue-400">MERIT</span>?
          </h2>
          <p className="font-condensed text-xl text-slate-400 max-w-2xl mx-auto uppercase tracking-wide">
            For Your New Car — 6 Reasons Our Customers Keep Coming Back
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, text, color, badge }) => (
            <div
              key={title}
              className="group relative bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/20 card-hover overflow-hidden"
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Badge */}
              <span className={`inline-block mb-4 px-2 py-0.5 bg-gradient-to-r ${color} rounded text-white text-[10px] font-condensed font-black tracking-widest uppercase`}>
                {badge}
              </span>

              <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon size={26} className="text-white" />
              </div>

              <h3 className="font-condensed font-black text-xl text-white mb-3 uppercase tracking-wide leading-tight">
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
