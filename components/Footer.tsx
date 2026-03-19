"use client";
import { MessageCircle, Phone, Zap } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
          alt="Brand new car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1f]/95 via-[#050d1f]/85 to-[#050d1f]/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block new-badge text-white px-4 py-1 rounded-lg text-xs tracking-widest uppercase mb-6">
          🚗 Ready to Drive?
        </div>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
          DRIVE A BRAND NEW CAR<br />
          <span className="text-blue-400">HOME TODAY!</span>
        </h2>
        <p className="font-condensed text-xl text-slate-300 mb-8 uppercase tracking-wide">
          Affordable · Brand New · Perfect 5.0★ Rating · Stress-Free Process
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#inventory"
            className="flex items-center justify-center gap-2 shimmer-btn text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all glow-blue"
          >
            <Zap size={20} /> View New Cars
          </a>
          <a
            href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20ready%20to%20drive%20a%20brand%20new%20car%20home.%20Let%27s%20talk!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all"
          >
            <MessageCircle size={20} /> WhatsApp Us Now
          </a>
          <a
            href="tel:+2348169264568"
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all"
          >
            <Phone size={20} /> 0816 926 4568
          </a>
        </div>

        <p className="text-slate-400 font-condensed text-sm uppercase tracking-wide">
          📍 98 Baale Animashaun Road, Alakuko Lagos · Open Daily Until 8:00 PM
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#040a18] border-t border-blue-900/30 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="font-display text-white text-xl">M</span>
              </div>
              <div>
                <div className="font-display text-xl text-white tracking-wider">MERIT <span className="text-yellow-400">AUTO</span></div>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-condensed leading-relaxed mb-3">
              Home of Affordable Brand New Cars in Lagos, Nigeria.
            </p>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
              <span className="text-slate-400 text-xs font-condensed ml-1">5.0 · 10 Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-condensed font-black text-white uppercase tracking-wide mb-4 text-sm">Quick Links</h4>
            <div className="space-y-2">
              {[
                ["Home", "#home"],
                ["Brand New Cars", "#inventory"],
                ["Why Buy New", "#why-new"],
                ["Financing", "#financing"],
                ["Customer Reviews", "#reviews"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="block text-slate-400 hover:text-blue-400 transition-colors text-sm font-condensed">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-condensed font-black text-white uppercase tracking-wide mb-4 text-sm">Popular Brands</h4>
            <div className="space-y-2">
              {["Toyota", "Honda", "Hyundai", "Kia", "Nissan", "Ford", "Mazda", "Mitsubishi"].map((brand) => (
                <div key={brand} className="text-slate-400 text-sm font-condensed">{brand}</div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed font-black text-white uppercase tracking-wide mb-4 text-sm">Contact</h4>
            <div className="space-y-3 text-sm font-condensed text-slate-400">
              <p>98 Baale Animashaun Road,<br />Alakuko, Lagos 101232</p>
              <a href="tel:+2348169264568" className="block text-blue-400 hover:text-white transition-colors font-bold">
                0816 926 4568
              </a>
              <p className="text-yellow-400 font-semibold">Open Daily Until 8:00 PM</p>
              <p className="text-slate-500">info@meritautomobile.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs font-condensed">
            © 2026 Merit Automobile. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-condensed">
            Home of Affordable Brand New Cars · Alakuko, Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
