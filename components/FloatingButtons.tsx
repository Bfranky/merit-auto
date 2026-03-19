"use client";
import { useEffect, useState } from "react";
import { MessageCircle, ChevronUp, Phone } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20buying%20a%20brand%20new%20car.%20Can%20you%20show%20me%20what%27s%20available?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-float group"
        aria-label="WhatsApp"
      >
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
          <div className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <MessageCircle size={26} className="text-white" />
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs font-condensed font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </div>
        </div>
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-10 h-10 bg-blue-700 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}

      {/* Mobile sticky bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden mobile-cta">
        <div className="flex items-stretch h-14">
          <a
            href="tel:+2348169264568"
            className="flex-1 flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-600 text-white text-sm font-condensed font-bold uppercase tracking-wide transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
          <div className="w-px bg-white/10" />
          <a
            href="https://wa.me/2348169264568?text=Hi%20Merit%20Automobile!%20I%27m%20interested%20in%20buying%20a%20brand%20new%20car.%20Can%20you%20show%20me%20what%27s%20available?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-condensed font-bold uppercase tracking-wide transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <div className="w-px bg-white/10" />
          <a
            href="#inventory"
            className="flex-1 flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-sm font-condensed font-bold uppercase tracking-wide transition-colors"
          >
            View Cars
          </a>
        </div>
      </div>

      {/* Bottom padding spacer on mobile to account for sticky bar */}
      <div className="h-14 lg:hidden" />
    </>
  );
}
