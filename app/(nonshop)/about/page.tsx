"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero: The Vision */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2000"
            alt="Atelier texture"
            fill
            className="object-cover grayscale"
          />
        </motion.div>

        <div className="relative z-10 text-center space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] uppercase tracking-[0.8em] text-white/60"
          >
            Established 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-serif text-6xl md:text-9xl tracking-tighter italic"
          >
            The Verve Manifesto
          </motion.h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 lg:px-12 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <div className="lg:col-span-7 relative aspect-[16/9] bg-[#0a0a0a] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1200"
            alt="Craftsmanship"
            fill
            className="object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
          />
        </div>

        <div className="lg:col-span-5 space-y-12">
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white/40">
            01 / The Ethos
          </h2>
          <p className="font-serif text-3xl md:text-4xl leading-tight tracking-tight italic text-white/90">
            "Design is not a response to a trend, but an architectural
            commitment to the human form."
          </p>
          <p className="text-white/40 text-sm leading-loose tracking-wide max-w-md">
            At VERVE, we believe in the permanence of the silhouette. Our
            garments are engineered in our Tbilisi atelier, blending brutalist
            structural influences with the fluid grace of raw silk and
            structured wool.
          </p>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-32">
          {[
            {
              title: "Materiality",
              desc: "Sourcing only from carbon-neutral mills in Italy and Japan. We focus on fibers that age with dignity.",
            },
            {
              title: "Precision",
              desc: "Every seam is a calculated decision. We prioritize the 'invisible' details—the inner lining, the hand-finished hem.",
            },
            {
              title: "Scarcity",
              desc: "We produce in limited editions. When a textile is gone, the collection ends. We do not restock; we evolve.",
            },
          ].map((pillar, idx) => (
            <div key={idx} className="space-y-6 group">
              <span className="font-serif text-5xl text-white/10 group-hover:text-white/40 transition-colors duration-700">
                {idx + 1}.
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold">
                {pillar.title}
              </h4>
              <p className="text-white/40 text-xs leading-loose">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Atelier Call to Action */}
      <section className="pb-40 px-6 text-center">
        <div className="h-[1px] w-24 bg-white/20 mx-auto mb-20" />
        <h3 className="font-serif text-4xl md:text-6xl tracking-tighter mb-12">
          Join the Journal
        </h3>
        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-12">
          Deep dives into our process and private viewings.
        </p>
        <button className="border border-white/20 px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">
          Become a Member
        </button>
      </section>
    </main>
  );
};

export default AboutUs;
