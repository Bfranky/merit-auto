"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Oluwafemi Oyoyo",
    text: "Merit automobile, home of affordable, brand new car, you will love it! I bought my 2024 Toyota Corolla here and the price was unbelievable for a BRAND NEW car. Highly recommended!",
    time: "1 month ago",
    car: "2024 Toyota Corolla",
  },
  {
    name: "Odukoya Mariam",
    text: "Excellent customer service and quality cars. The whole process was stress-free. I'll definitely recommend them anytime anyday 👍 Got my brand new Hyundai and I'm loving every moment!",
    time: "1 month ago",
    car: "2024 Hyundai Elantra",
  },
  {
    name: "Shobola Ambali",
    text: "Got my first car at Merit Automobile and I never regret my decision to patronize them. Driving a BRAND NEW car is an amazing feeling. I shall be back as a returning customer, God Bless",
    time: "1 month ago",
    car: "First Car Owner",
  },
  {
    name: "Mr. Adeleke",
    text: "Best decision ever! I was worried about buying a new car — thought it would be too expensive. But Merit made it affordable and the process was smooth from start to finish. My Honda Accord is perfect!",
    time: "2 months ago",
    car: "2024 Honda Accord",
  },
  {
    name: "Mrs. Johnson",
    text: "I compared prices everywhere — Merit Automobile truly offers the best value for brand new cars in Lagos. Plus their customer service is outstanding. No pressure, just genuine help.",
    time: "2 months ago",
    car: "2024 Kia Sportage",
  },
  {
    name: "David O.",
    text: "From test drive to delivery, everything was professional and stress-free. My family loves our new SUV! Merit Automobile lives up to their perfect rating. Thank you!",
    time: "2 months ago",
    car: "2024 Toyota RAV4",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#0a1628] to-[#050d1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="font-condensed text-yellow-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            Customer Reviews
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            HAPPY <span className="text-yellow-400">CUSTOMERS</span>
          </h2>

          {/* Rating display */}
          <div className="inline-flex items-center gap-4 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl px-8 py-4 mt-4 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} fill="#fbbf24" className="text-yellow-400" />
              ))}
            </div>
            <div>
              <div className="font-display text-4xl text-yellow-400">5.0</div>
              <div className="font-condensed text-xs text-slate-400 uppercase tracking-wide">10 Reviews · 100% Recommend</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-xs font-condensed font-bold uppercase tracking-wide">Recent Reviews — Past Month</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map(({ name, text, time, car }) => (
            <div
              key={name}
              className="bg-gradient-to-b from-white/4 to-white/2 border border-white/8 rounded-2xl p-6 hover:border-yellow-400/30 card-hover relative"
            >
              <Quote size={32} className="text-yellow-400/20 absolute top-4 right-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#fbbf24" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">&ldquo;{text}&rdquo;</p>

              <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-condensed font-bold text-white uppercase text-sm">{name}</div>
                  <div className="font-condensed text-blue-400 text-xs">{car}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-condensed">{time}</div>
                  <div className="text-[10px] text-green-400 font-condensed font-bold">✓ Verified</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-condensed text-xl text-slate-300 mb-4">
            Join 10+ satisfied new car owners! <span className="text-yellow-400 font-bold">Your turn to drive fresh!</span>
          </p>
          <a
            href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%20want%20to%20be%20your%20next%20happy%20customer.%20Can%20we%20talk%20about%20brand%20new%20cars?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shimmer-btn text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all glow-blue"
          >
            Become Our Next Happy Customer
          </a>
        </div>
      </div>
    </section>
  );
}
