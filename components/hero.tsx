"use client";

import Image from "next/image";
import Link from "next/link";
import { Slider } from "@/components/Slider";
import slider1 from "../public/slider/slider1.jpg";

const HERO_CONTENT = [
  {
    id: 1,
    title: "The Midnight Collection",
    subtitle: "Darkness defines the new aesthetic",
    img: slider1,
    cta: "Shop Now",
    link: "/shop/midnight",
  },
  {
    id: 2,
    title: "Earthy Neutrals",
    subtitle: "Sustainable style for the modern soul",
    img: slider1,
    cta: "Explore Earthy",
    link: "/mood/earthy",
  },
  {
    id: 3,
    title: "Vampy Romantic",
    subtitle: "Lace, velvet, and the allure of the night",
    img: slider1,
    cta: "Discover Mood",
    link: "/mood/vampy",
  },
];

const Hero = () => {
  const slides = HERO_CONTENT.map((slide, index) => (
    <div
      key={slide.id}
      className="relative w-full h-[70vh] md:h-[20vh] min-h-125"
    >
      <Image
        className="object-cover"
        fill
        alt={slide.title}
        quality={90}
        priority={index === 0}
        src={slide.img}
        sizes="100vw"
      />

      {/* Industry Standard Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl space-y-4">
          <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.3em] animate-fade-in">
            New Arrival
          </p>
          <h2 className="text-white text-4xl md:text-7xl font-bold uppercase tracking-tighter">
            {slide.title}
          </h2>
          <p className="text-white/90 text-sm md:text-lg font-light italic">
            {slide.subtitle}
          </p>
          <div className="pt-6">
            <Link
              href={slide.link}
              className="inline-block bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="relative w-full overflow-hidden">
      <Slider slides={slides} />
    </section>
  );
};

export default Hero;
