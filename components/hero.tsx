"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const HERO_CONTENT = [
  {
    id: 1,
    title: "The Modern Essential",
    subtitle:
      "Sophisticated tailoring designed for the contemporary silhouette.",
    // High-end minimalist tailoring/blazer
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop",
    cta: "Shop The Collection",
    link: "/collections/essentials",
  },
  {
    id: 2,
    title: "Pure Textures",
    subtitle: "Exquisite materials meets timeless, understated design.",
    // Luxury fabrics/knitwear in neutral tones
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",
    cta: "Explore Neutrals",
    link: "/collections/neutrals",
  },
  {
    id: 3,
    title: "Evening Elegance",
    subtitle: "Refined attire for life's most memorable moments.",
    // Elegant evening wear/luxury dress
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop",
    cta: "Discover More",
    link: "/collections/evening",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          {/* Subtle Zooming Image (Ken Burns Effect) */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_CONTENT[current].img}
              alt={HERO_CONTENT[current].title}
              fill
              className="object-cover opacity-70"
              priority
              quality={90}
            />
          </motion.div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/70 text-[11px] uppercase tracking-[0.6em] mb-6 font-medium"
            >
              New Season Premiere — 2026
            </motion.p>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="font-serif text-5xl md:text-8xl text-white font-light tracking-tight mb-6"
            >
              {HERO_CONTENT[current].title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-gray-200 text-sm md:text-xl font-light tracking-wide max-w-xl leading-relaxed"
            >
              {HERO_CONTENT[current].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12"
            >
              <Link
                href={HERO_CONTENT[current].link}
                className="group relative inline-flex items-center overflow-hidden border border-white/40 px-14 py-5 text-white transition-all hover:border-white"
              >
                <span className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.4em]">
                  {HERO_CONTENT[current].cta}
                </span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-400 ease-out" />
                <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-[10px] font-semibold uppercase tracking-[0.4em]">
                  {HERO_CONTENT[current].cta}
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Luxury Navigation Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-10">
        {HERO_CONTENT.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group relative py-4"
          >
            <div
              className={clsx(
                "h-[1.5px] transition-all duration-700",
                current === idx
                  ? "w-16 bg-white"
                  : "w-8 bg-white/30 group-hover:bg-white/60",
              )}
            />
            <span
              className={clsx(
                "absolute -top-4 left-0 text-[10px] tracking-widest transition-opacity duration-500",
                current === idx ? "opacity-100 font-bold" : "opacity-0",
              )}
            >
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Vertical Side Text (Luxury Aesthetic) */}
      <div className="hidden lg:block absolute left-12 top-1/2 -rotate-90 origin-left">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.6em] whitespace-nowrap">
          Verve — Curated Excellence
        </span>
      </div>

      {/* Right Side Est. Text */}
      <div className="hidden lg:block absolute right-12 top-1/2 rotate-90 origin-right">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.6em] whitespace-nowrap">
          EST. 2026 — All Rights Reserved
        </span>
      </div>
    </section>
  );
};

export default Hero;
