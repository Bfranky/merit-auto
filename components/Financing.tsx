"use client";
import { useState } from "react";
import { MessageCircle, Calculator } from "lucide-react";

export default function Financing() {
  const [price, setPrice] = useState(20000000);
  const [downPct, setDownPct] = useState(30);
  const [months, setMonths] = useState(48);

  const downPayment = Math.round((price * downPct) / 100);
  const loanAmount = price - downPayment;
  const monthlyRate = 0.18 / 12; // ~18% annual
  const monthly = Math.round(
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
  );

  const formatN = (n: number) => "₦" + n.toLocaleString("en-NG");

  return (
    <section id="financing" className="py-20 bg-[#0a1628]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="font-condensed text-green-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            Financing
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            OWN YOUR <span className="text-green-400">DREAM CAR</span>
          </h2>
          <p className="font-condensed text-xl text-slate-400 mb-2 uppercase tracking-wide">
            Brand New Cars Are More Affordable Than You Think!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Financing details */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Down Payment", value: "As Low as 30%" },
                { label: "Loan Tenor", value: "Up to 5 Years" },
                { label: "Approval", value: "Quick Process" },
                { label: "Partners", value: "Leading Banks" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-green-900/20 border border-green-800/40 rounded-xl p-4">
                  <div className="font-condensed text-green-400 text-xs uppercase tracking-wide mb-1">{label}</div>
                  <div className="font-condensed font-black text-white text-xl">{value}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
              <h3 className="font-condensed font-black text-white text-xl uppercase mb-4">How It Works</h3>
              {[
                "Choose your brand new car",
                "We connect you with trusted lenders",
                "Quick approval — often same day",
                "Flexible monthly payments",
                "Drive home your new car!",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-green-600 text-white font-condensed font-black text-sm flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-slate-300 text-sm font-condensed">{step}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27d%20like%20to%20discuss%20financing%20options%20for%20a%20brand%20new%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle size={20} /> Get Financing Help on WhatsApp
            </a>
          </div>

          {/* Right: Calculator */}
          <div className="bg-gradient-to-b from-white/4 to-transparent border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calculator size={22} className="text-green-400" />
              <h3 className="font-condensed font-black text-white text-xl uppercase">Financing Calculator</h3>
            </div>

            <div className="space-y-6">
              {/* Car price slider */}
              <div>
                <div className="flex justify-between font-condensed text-sm mb-2">
                  <span className="text-slate-400 uppercase font-semibold">Car Price</span>
                  <span className="text-white font-bold">{formatN(price)}</span>
                </div>
                <input
                  type="range" min={10000000} max={50000000} step={500000}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-600 font-condensed mt-1">
                  <span>₦10M</span><span>₦50M</span>
                </div>
              </div>

              {/* Down payment slider */}
              <div>
                <div className="flex justify-between font-condensed text-sm mb-2">
                  <span className="text-slate-400 uppercase font-semibold">Down Payment</span>
                  <span className="text-white font-bold">{downPct}% — {formatN(downPayment)}</span>
                </div>
                <input
                  type="range" min={20} max={70} step={5}
                  value={downPct}
                  onChange={(e) => setDownPct(Number(e.target.value))}
                  className="w-full accent-green-500 h-2 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-600 font-condensed mt-1">
                  <span>20%</span><span>70%</span>
                </div>
              </div>

              {/* Loan duration */}
              <div>
                <div className="flex justify-between font-condensed text-sm mb-2">
                  <span className="text-slate-400 uppercase font-semibold">Loan Duration</span>
                  <span className="text-white font-bold">{months} months</span>
                </div>
                <div className="flex gap-2">
                  {[12, 24, 36, 48, 60].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`flex-1 py-2 rounded-xl text-xs font-condensed font-bold transition-all ${months === m ? "bg-blue-600 text-white" : "bg-white/5 text-slate-400 hover:bg-white/10"}`}
                    >
                      {m}m
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-blue-900/40 to-green-900/20 border border-blue-700/40 rounded-2xl p-5">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-condensed text-[10px] text-slate-500 uppercase mb-1">Loan Amount</div>
                    <div className="font-condensed font-black text-white text-sm">{formatN(loanAmount)}</div>
                  </div>
                  <div className="border-x border-white/10">
                    <div className="font-condensed text-[10px] text-slate-500 uppercase mb-1">Est. Monthly</div>
                    <div className="font-display text-3xl text-green-400">{formatN(monthly)}</div>
                  </div>
                  <div>
                    <div className="font-condensed text-[10px] text-slate-500 uppercase mb-1">Duration</div>
                    <div className="font-condensed font-black text-white text-sm">{months} months</div>
                  </div>
                </div>
                <p className="text-center text-[10px] text-slate-600 font-condensed mt-3">
                  *Sample estimate at ~18% p.a. Actual terms vary by lender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
