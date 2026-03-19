"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Inventory from "@/components/Inventory";
import WhyNew from "@/components/WhyNew";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Financing from "@/components/Financing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { CTABanner, Footer } from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <WhyChoose />
      <Inventory />
      <WhyNew />
      <Process />
      <Services />
      <Testimonials />
      <Financing />
      <FAQ />
      <Contact />
      <CTABanner />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
