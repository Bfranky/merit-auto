"use client";
import { Car, Settings, Landmark, RefreshCw, FileText, Truck, Headphones, Shield } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Brand New Car Sales",
    desc: "Our specialty! Any make, any model — factory-fresh vehicles only. Latest models with competitive pricing.",
    color: "from-blue-600 to-blue-400",
    cta: "View Inventory",
    href: "#inventory",
  },
  {
    icon: Settings,
    title: "Custom Orders",
    desc: "Don't see what you want? We'll source ANY brand new car — specific color, features, or trim. Direct factory ordering.",
    color: "from-purple-600 to-purple-400",
    cta: "Place Order",
    href: "https://wa.me/2348169264568?text=Hi!%20I%20want%20to%20place%20a%20custom%20order%20for%20a%20brand%20new%20car.",
  },
  {
    icon: Landmark,
    title: "Financing Assistance",
    desc: "Connect with reliable lenders. We guide you through the application, maximize approval chances, and explain all options.",
    color: "from-green-600 to-green-400",
    cta: "Get Help",
    href: "#financing",
  },
  {
    icon: RefreshCw,
    title: "Trade-In Services",
    desc: "Trading in your old car? Fair valuation guaranteed. Use it towards your brand new vehicle — all brands accepted.",
    color: "from-yellow-600 to-yellow-400",
    cta: "Get Quote",
    href: "https://wa.me/2348169264568?text=Hi!%20I%20want%20to%20trade%20in%20my%20car%20and%20buy%20a%20brand%20new%20one%20from%20Merit%20Automobile.",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    desc: "Complete paperwork support — vehicle registration, transfer of ownership, customs documentation, insurance connections.",
    color: "from-orange-600 to-orange-400",
    cta: "Learn More",
    href: "#contact",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Car delivered right to your doorstep. Safe, secure transport within Lagos and beyond Nigeria. Small fee applies.",
    color: "from-cyan-600 to-cyan-400",
    cta: "Request Delivery",
    href: "https://wa.me/2348169264568?text=Hi!%20I%20want%20to%20arrange%20home%20delivery%20for%20my%20new%20car%20from%20Merit%20Automobile.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    desc: "We're here after purchase! Warranty claim assistance, service center recommendations, genuine parts guidance.",
    color: "from-red-600 to-red-400",
    cta: "Contact Support",
    href: "#contact",
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    desc: "Beyond manufacturer warranty — extended coverage plans available. Protect your investment affordably for longer.",
    color: "from-indigo-600 to-indigo-400",
    cta: "Explore Options",
    href: "https://wa.me/2348169264568?text=Hi!%20I%27m%20interested%20in%20extended%20warranty%20options%20for%20my%20new%20car.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="font-condensed text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            Our Services
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            COMPREHENSIVE <span className="text-blue-400">SERVICES</span>
          </h2>
          <p className="font-condensed text-xl text-slate-400 max-w-2xl mx-auto uppercase tracking-wide">
            Beyond Sales — We Support You Every Step of the Way
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, color, cta, href }) => (
            <div
              key={title}
              className="group bg-gradient-to-b from-white/4 to-transparent border border-white/8 rounded-2xl p-5 hover:border-white/20 card-hover flex flex-col"
            >
              <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-condensed font-black text-white uppercase text-sm mb-2 leading-tight tracking-wide">
                {title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{desc}</p>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`inline-block text-center text-xs font-condensed font-bold uppercase tracking-wide px-4 py-2 rounded-xl bg-gradient-to-r ${color} text-white hover:opacity-90 hover:scale-105 transition-all`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
