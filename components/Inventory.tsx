"use client";
import { useState } from "react";
import { MessageCircle, Phone, Fuel, Shield, Star } from "lucide-react";

type Car = {
  id: number;
  name: string;
  year: number;
  category: string;
  price: string;
  priceNum: number;
  engine: string;
  features: string[];
  badge: string;
  badgeColor: string;
  img: string;
  whatsapp: string;
};

const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    year: 2025,
    category: "Sedan",
    price: "₦18,500,000",
    priceNum: 18500000,
    engine: "1.8L Automatic",
    features: ["Full Warranty", "Smart Safety", "Fuel Efficient"],
    badge: "BEST SELLER",
    badgeColor: "bg-yellow-500",
    img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80",
    whatsapp: "Hi! I'm interested in the 2025 Toyota Corolla. Is it available?"
  },
  {
    id: 2,
    name: "Honda Accord",
    year: 2024,
    category: "Sedan",
    price: "₦22,000,000",
    priceNum: 22000000,
    engine: "1.5T Automatic",
    features: ["Leather Interior", "Advanced Tech", "Full Warranty"],
    badge: "JUST ARRIVED",
    badgeColor: "bg-blue-500",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    whatsapp: "Hi! I'm interested in the 2024 Honda Accord at Merit Automobile. Can you tell me more?"
  },
  {
    id: 3,
    name: "Hyundai Elantra",
    year: 2025,
    category: "Sedan",
    price: "₦16,800,000",
    priceNum: 16800000,
    engine: "2.0L Automatic",
    features: ["Modern Design", "Smart Features", "Great Value"],
    badge: "IN STOCK",
    badgeColor: "bg-green-500",
    img: "https://images.unsplash.com/photo-1617814076668-8dfc6fe3b37d?w=600&q=80",
    whatsapp: "Hello! I'd like info about the 2025 Hyundai Elantra at Merit Automobile."
  },
  {
    id: 4,
    name: "Toyota RAV4",
    year: 2024,
    category: "SUV",
    price: "₦28,500,000",
    priceNum: 28500000,
    engine: "2.5L AWD",
    features: ["7-Seater", "Latest Safety", "Spacious"],
    badge: "FAMILY CHOICE",
    badgeColor: "bg-purple-500",
    img: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&q=80",
    whatsapp: "Hi! I'm interested in the 2024 Toyota RAV4 (Brand New) at Merit Automobile."
  },
  {
    id: 5,
    name: "Kia Sportage",
    year: 2025,
    category: "SUV",
    price: "₦19,500,000",
    priceNum: 19500000,
    engine: "2.0L Automatic",
    features: ["Loaded Features", "Stylish Design", "Full Warranty"],
    badge: "HOT DEAL",
    badgeColor: "bg-red-500",
    img: "https://images.unsplash.com/photo-1614026480209-cd9934144671?w=600&q=80",
    whatsapp: "Hi Merit! Tell me more about the 2025 Kia Sportage. What's the best price?"
  },
  {
    id: 6,
    name: "Honda CR-V",
    year: 2024,
    category: "SUV",
    price: "₦25,000,000",
    priceNum: 25000000,
    engine: "1.5T AWD",
    features: ["Premium SUV", "Advanced Safety", "Comfort First"],
    badge: "PREMIUM",
    badgeColor: "bg-indigo-500",
    img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80",
    whatsapp: "Hello! I'm looking at the 2024 Honda CR-V at Merit Automobile. Can we discuss pricing?"
  },
];

const categories = ["All", "Sedan", "SUV"];

export default function Inventory() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? cars : cars.filter((c) => c.category === filter);

  return (
    <section id="inventory" className="py-20 bg-[#0a1628] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="font-condensed text-red-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            Our Inventory
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            BRAND NEW <span className="text-red-400">CARS</span>
          </h2>
          <p className="font-condensed text-xl text-slate-400 mb-2 uppercase tracking-wide">
            Factory-Fresh Vehicles from Top Manufacturers
          </p>
          <p className="text-blue-300 text-sm font-condensed">
            Latest models · Full warranty · Affordable prices
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl font-condensed font-bold tracking-wide uppercase text-sm transition-all ${
                filter === cat
                  ? "bg-blue-600 text-white glow-blue scale-105"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Car grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <div
              key={car.id}
              className="group bg-gradient-to-b from-[#111c35] to-[#0d1729] border border-white/8 rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={car.img}
                  alt={`Brand new ${car.year} ${car.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1729]/80 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <span className={`${car.badgeColor} text-white text-[10px] font-condensed font-black tracking-widest uppercase px-2.5 py-1 rounded-lg`}>
                    {car.badge}
                  </span>
                  <span className="bg-[#0d1729]/90 border border-white/20 text-white text-[10px] font-condensed font-black tracking-widest uppercase px-2.5 py-1 rounded-lg">
                    BRAND NEW
                  </span>
                </div>

                {/* 0 KM badge */}
                <div className="absolute top-3 right-3 bg-green-600/90 text-white text-[10px] font-condensed font-black px-2 py-1 rounded-lg">
                  0 KM
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-display text-2xl text-white leading-tight">{car.name}</div>
                    <div className="font-condensed text-blue-400 text-sm font-semibold">{car.year} · {car.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-condensed text-xs text-slate-500 uppercase">From</div>
                    <div className="font-condensed font-black text-yellow-400 text-lg leading-tight">{car.price}</div>
                  </div>
                </div>

                <div className="text-sm text-slate-400 font-condensed mb-3 flex items-center gap-1">
                  <Fuel size={13} className="text-blue-400" /> {car.engine}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((f) => (
                    <span key={f} className="flex items-center gap-1 text-[11px] text-blue-300 font-condensed font-semibold bg-blue-900/30 border border-blue-800/40 px-2 py-0.5 rounded-lg">
                      <Shield size={10} /> {f}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/2348169264568?text=${encodeURIComponent(car.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-500 text-white py-2.5 rounded-xl text-sm font-bold font-condensed transition-all hover:scale-105"
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                  <a
                    href="tel:+2348169264568"
                    className="flex items-center justify-center gap-1.5 bg-blue-700/40 hover:bg-blue-700 border border-blue-600/40 text-blue-300 hover:text-white py-2.5 px-3 rounded-xl text-sm font-bold font-condensed transition-all"
                  >
                    <Phone size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More inventory note */}
        <div className="mt-10 text-center bg-blue-900/20 border border-blue-800/40 rounded-2xl p-6">
          <p className="text-slate-300 font-condensed text-lg mb-3">
            🚗 Inventory updates weekly! Don&apos;t see your dream car?
          </p>
          <p className="text-blue-300 font-semibold mb-4">
            Call us — we can source <strong className="text-white">ANY brand new car</strong> you want!
          </p>
          <a
            href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%20want%20a%20specific%20car%20not%20on%20your%20website.%20Can%20you%20source%20it%20brand%20new?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
          >
            <MessageCircle size={18} /> Request Custom Order
          </a>
        </div>
      </div>
    </section>
  );
}
