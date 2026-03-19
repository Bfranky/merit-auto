"use client";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with form details
    const msg = `Hi Merit Automobile! My name is ${form.name}. Phone: ${form.phone}. Interested in: ${form.interest}. ${form.message}`;
    window.open(`https://wa.me/2348169264568?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="font-condensed text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">
            VISIT <span className="text-blue-400">OUR SHOWROOM</span>
          </h2>
          <p className="font-condensed text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to Drive Your Brand New Car Home? Let&apos;s Make Your Dream a Reality
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact info */}
          <div className="space-y-5">
            <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
              <h3 className="font-condensed font-black text-white uppercase text-lg mb-5 tracking-wide">
                Merit Automobile
              </h3>
              <div className="space-y-4">
                <a href="tel:+2348169264568" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                    <Phone size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-condensed text-xs text-slate-500 uppercase">Call Us</div>
                    <div className="font-condensed font-bold text-white group-hover:text-blue-400 transition-colors">0816 926 4568</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20your%20brand%20new%20cars."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/40 transition-colors">
                    <MessageCircle size={16} className="text-green-400" />
                  </div>
                  <div>
                    <div className="font-condensed text-xs text-slate-500 uppercase">WhatsApp</div>
                    <div className="font-condensed font-bold text-white group-hover:text-green-400 transition-colors">0816 926 4568</div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-red-400" />
                  </div>
                  <div>
                    <div className="font-condensed text-xs text-slate-500 uppercase">Address</div>
                    <div className="font-condensed font-semibold text-white text-sm leading-snug">
                      98 Baale Animashaun Road,<br />Alakuko, Lagos 101232
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-yellow-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-condensed text-xs text-slate-500 uppercase">Hours</div>
                    <div className="font-condensed font-bold text-white">Open Daily Until 8:00 PM</div>
                    <div className="font-condensed text-yellow-400 text-xs font-semibold">Extended hours for your convenience!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Visit */}
            <div className="bg-blue-900/20 border border-blue-800/40 rounded-2xl p-5">
              <h4 className="font-condensed font-black text-blue-300 uppercase text-sm mb-3 tracking-wide">Why Visit Us?</h4>
              {["See brand NEW cars in person", "Smell that new car scent!", "Test drive available", "No pressure environment", "Expert guidance guaranteed", "Stress-free experience"].map((item) => (
                <div key={item} className="flex items-center gap-2 mb-2">
                  <CheckCircle size={13} className="text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 text-xs font-condensed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-gradient-to-b from-white/4 to-transparent border border-white/10 rounded-2xl p-6">
            <h3 className="font-condensed font-black text-white uppercase text-lg mb-5 tracking-wide">Quick Inquiry</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <CheckCircle size={48} className="text-green-400" />
                <div className="font-condensed font-black text-white uppercase text-xl">Sent via WhatsApp!</div>
                <p className="text-slate-400 text-sm">We&apos;ll get back to you shortly. Thank you!</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-400 text-sm font-condensed underline">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required type="text" placeholder="Your Name *"
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-condensed focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  required type="tel" placeholder="Phone Number *"
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-condensed focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email" placeholder="Email Address"
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-condensed focus:outline-none focus:border-blue-500 transition-colors"
                />
                <select
                  value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm font-condensed focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Interested In...</option>
                  <option>Browse New Cars</option>
                  <option>Specific Car Model</option>
                  <option>Financing Information</option>
                  <option>Trade-In Valuation</option>
                  <option>Custom Order</option>
                  <option>General Inquiry</option>
                </select>
                <textarea
                  placeholder="Your message..."
                  rows={3}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-condensed focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full shimmer-btn text-white py-4 rounded-xl font-bold font-condensed uppercase tracking-wide flex items-center justify-center gap-2 hover:scale-105 transition-all"
                >
                  <Send size={16} /> Send via WhatsApp
                </button>
                <a
                  href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20your%20brand%20new%20cars."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-bold font-condensed uppercase tracking-wide flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <MessageCircle size={16} /> WhatsApp Us Directly
                </a>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="space-y-4">
            <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden h-72 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963!2d3.2833!3d6.6350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ebf!2sMerit%20Automobile!5e0!3m2!1sen!2sng!4v1"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Merit Automobile Location"
              />
            </div>

            <a
              href="https://maps.google.com/?q=98+Baale+Animashaun+Road+Alakuko+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-red-600/20 border border-red-600/40 hover:bg-red-600/30 text-red-300 py-3 rounded-xl font-condensed font-bold uppercase tracking-wide transition-all"
            >
              <MapPin size={16} /> Get Directions
            </a>

            <a
              href="https://wa.me/2348169264568?text=Please%20send%20me%20your%20location%20pin%20for%20Merit%20Automobile%20on%20Baale%20Animashaun%20Road%2C%20Alakuko."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600/20 border border-green-600/40 hover:bg-green-600/30 text-green-300 py-3 rounded-xl font-condensed font-bold uppercase tracking-wide transition-all"
            >
              <MessageCircle size={16} /> Send Location via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
