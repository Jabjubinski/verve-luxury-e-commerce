"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  imgURL: string;
  id: string | number;
  category?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  imgURL,
  category = "New Collection",
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative flex flex-col"
    >
      {/* Product Image Container */}
      <Link
        href={`/shop/${id}`}
        className="relative block overflow-hidden aspect-[3/4] bg-[#0A0A0A]"
      >
        {/* Category Badge - Subtle Editorial Touch */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-500">
            {category}
          </span>
        </div>

        <Image
          alt={name}
          src={imgURL}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-[1.5s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
          loading="lazy"
        />

        {/* Quick-Add Hover Overlay (Optional but Industry Standard) */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <button className="w-full py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
              Quick View
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 flex flex-col items-center text-center">
        <Link href={`/shop/${id}`} className="inline-block">
          <h3
            className={`text-xl md:text-2xl text-white mb-1 transition-colors duration-300 hover:text-white/60`}
          >
            {name}
          </h3>
        </Link>

        <div className="relative h-5 overflow-hidden w-full">
          {/* Animated Price/Shop Toggle */}
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 transition-all duration-500 group-hover:-translate-y-full">
            ${price} USD
          </p>
          <p className="absolute inset-0 text-[11px] uppercase tracking-[0.2em] text-white translate-y-full transition-all duration-500 group-hover:translate-y-0 font-bold">
            View Details
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
