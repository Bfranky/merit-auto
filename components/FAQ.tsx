"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "Are all your cars really brand new?", a: "YES! We specialize in factory-fresh, BRAND NEW cars with 0 kilometers. Every vehicle is brand new unless specifically marked otherwise — you get the manufacturer documentation, factory plastics, and full warranty to prove it." },
  { q: "How can you make brand new cars affordable?", a: "We work directly with manufacturers and importers, cutting out unnecessary middlemen. We also offer flexible financing to make monthly payments manageable, so you pay comfortably over time." },
  { q: "What brands of new cars do you sell?", a: "Toyota, Honda, Hyundai, Kia, Nissan, Ford, Mazda, Mitsubishi, and many more! If you want a specific brand or model we don't have in stock, we can source it brand new for you." },
  { q: "Do you accept trade-ins?", a: "Absolutely! Trade in your current car and use its value toward your brand new purchase. We offer fair, transparent valuations and a hassle-free process." },
  { q: "Can you source a specific car I want?", a: "Yes! Don't see your dream car in our showroom? Tell us the exact make, model, color, and features — we'll source it brand new. Call or WhatsApp us to discuss." },
  { q: "How long does delivery take?", a: "Cars currently in stock: immediate to 1 week. Custom orders: typically 4-8 weeks depending on availability and shipping from the manufacturer." },
  { q: "Do you help with financing?", a: "Yes! We connect you with reliable, reputable lenders and guide you through the entire financing process — from application to approval." },
  { q: "What's included with a new car purchase?", a: "Every purchase includes the full manufacturer warranty, complete car documentation, registration support, and our dedicated after-sales support service." },
  { q: "Can I test drive before buying?", a: "Absolutely! We strongly encourage test drives. Come in, experience your new car first-hand, and then make your decision with confidence." },
  { q: "What payment methods do you accept?", a: "Bank transfer, cash, certified bank checks, and financing through our partner financial institutions. We make it easy." },
  { q: "Why are your operating hours until 8 PM?", a: "We know you're busy! We stay open until 8:00 PM daily so you can visit us after work, on weekends, or whenever it's convenient. We're here to serve you on your schedule." },
  { q: "How do I know the car is genuinely brand new?", a: "Every car comes with the manufacturer's certificate of origin, 0 kilometers on the odometer, original factory plastics/stickers intact, and a complete manufacturer warranty — undeniable proof of freshness." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#050d1f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="font-condensed text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            FAQ
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            FREQUENTLY ASKED <span className="text-blue-400">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "border-blue-600/50 bg-blue-900/10" : "border-white/8 bg-white/2 hover:border-white/15"}`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-condensed font-bold text-white uppercase tracking-wide text-sm sm:text-base leading-tight pr-2">
                  {q}
                </span>
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-900/40 flex items-center justify-center">
                  {open === i
                    ? <ChevronUp size={16} className="text-blue-400" />
                    : <ChevronDown size={16} className="text-slate-400" />
                  }
                </div>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-blue-900/30 pt-4">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
