"use client";
import { Star, Clock, CheckCircle, Users, Car } from "lucide-react";

const stats = [
  { icon: Star, value: "5.0★", label: "Perfect Score!", color: "from-yellow-600 to-yellow-400" },
  { icon: Car, value: "100%", label: "Brand New Cars", color: "from-blue-700 to-blue-500" },
  { icon: Users, value: "10+", label: "All Positive Reviews", color: "from-green-700 to-green-500" },
  { icon: Clock, value: "8 PM", label: "Extended Hours", color: "from-red-700 to-red-500" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 stripe-bg opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-condensed text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            About Us
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            WELCOME TO <span className="text-blue-400">MERIT</span>
          </h2>
          <p className="font-condensed text-xl text-slate-400 max-w-2xl mx-auto uppercase tracking-wide">
            Where Your Dream of Owning a Brand New Car Becomes Reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p className="text-lg">
              <span className="text-white font-bold">Merit Automobile</span> is Lagos&apos;s premier dealer of{" "}
              <span className="text-blue-400 font-bold">affordable brand new cars</span>, proudly serving customers across Alakuko and beyond with a perfect <span className="text-yellow-400 font-bold">5.0-star rating</span>.
            </p>
            <p>
              We specialize in making <strong className="text-white">brand new car ownership accessible</strong> to every Nigerian. Why settle for used when you can afford NEW? We offer factory-fresh vehicles at prices that surprise and delight our customers.
            </p>
            <p>
              Every car in our showroom carries <strong className="text-white">zero kilometers</strong> on the odometer — no surprises, no hidden history, just that incredible new car experience you deserve. Full manufacturer warranty included on every purchase.
            </p>
            <p>
              Our streamlined, <strong className="text-white">stress-free process</strong> handles everything from selection through financing, documentation, and delivery. Our customers return again and again — and they send their friends!
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Open Until 8 PM", "Financing Available", "All Brands Available", "Trade-Ins Accepted"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-blue-300 font-condensed font-semibold">
                  <CheckCircle size={14} className="text-blue-400 flex-shrink-0" /> {item}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-blue">
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80"
                alt="Brand new cars in showroom"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-blue-900/80 backdrop-blur-sm rounded-xl p-3 border border-blue-700/50">
                <p className="text-sm text-blue-200 italic font-condensed">
                  &ldquo;Excellent customer service and quality cars. The whole process was stress-free.&rdquo;
                </p>
                <p className="text-xs text-blue-400 font-bold mt-1 font-condensed uppercase">— Odukoya Mariam ★★★★★</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-2xl p-3 font-condensed font-black text-center shadow-2xl glow-red">
              <div className="text-2xl font-display">NEW</div>
              <div className="text-xs tracking-wider">ARRIVALS</div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="relative overflow-hidden bg-white/3 border border-white/8 rounded-2xl p-6 text-center card-hover group">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon size={22} className="text-white" />
              </div>
              <div className="font-display text-4xl text-white mb-1">{value}</div>
              <div className="font-condensed text-xs text-slate-400 uppercase tracking-wide font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
