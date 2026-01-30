import Hero from "@/components/hero";
import ProductCard from "@/components/productCard";
import api from "@/lib/axios";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  imgURL: string;
}

async function getTrendingProducts(): Promise<Product[]> {
  try {
    const res = await api.get("/products");
    return res.data.slice(0, 4);
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
}

export default async function Home() {
  const trendingProducts = await getTrendingProducts();

  return (
    <div className="flex flex-col bg-black text-white">
      <Hero />

      {/* 1. Curated Collections - Asymmetric Editorial Grid */}
      <section className="py-32 px-6 lg:px-12 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4">
            Editorial Selects
          </span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter italic">
            The Curated Edit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 h-full">
          <div className="md:col-span-7">
            <CategoryCard
              title="Essential Tailoring"
              img="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200"
              href="/shop/tailoring"
              label="Collection 01"
            />
          </div>
          <div className="md:col-span-5 md:mt-24">
            <CategoryCard
              title="Evening Silk"
              img="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200"
              href="/shop/evening"
              label="Collection 02"
            />
          </div>
        </div>
      </section>

      {/* 2. New Arrivals - Minimalist Gallery */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-6xl tracking-tighter mb-6">
                New Releases
              </h2>
              <p className="text-white/40 text-sm uppercase tracking-widest leading-loose">
                A study of silhouette and texture. Our latest drop focuses on
                the intersection of avant-garde form and daily utility.
              </p>
            </div>
            <Link
              href="/shop"
              className="group flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.3em] border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
            >
              Explore All
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {trendingProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imgURL={product.imgURL}
                id={product.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Brand Philosophy - The "Colophon" Style */}
      <section className="py-40 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Subtle Background Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
            <h2 className="text-[20rem] font-serif uppercase select-none">
              Verve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 relative z-10">
            {[
              {
                title: "Conscious Craft",
                desc: "We prioritize traceability and ethical labor, ensuring every stitch reflects our commitment to the planet.",
              },
              {
                title: "Global Presence",
                desc: "Operating from our Parisian atelier, we provide bespoke distribution to over 40 countries.",
              },
              {
                title: "Eternal Forms",
                desc: "We do not follow seasons. We create timeless artifacts designed to be worn for a lifetime.",
              },
            ].map((value, i) => (
              <div key={i} className="flex flex-col space-y-8 group">
                <span className="text-white/20 font-serif text-4xl italic group-hover:text-white transition-colors duration-700">
                  0{i + 1}
                </span>
                <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white">
                  {value.title}
                </h4>
                <p className="text-white/40 text-xs leading-loose tracking-wide">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  title,
  img,
  href,
  label,
}: {
  title: string;
  img: string;
  href: string;
  label: string;
}) {
  return (
    <Link href={href} className="group relative block w-full h-full">
      {/* The shimmer-bg shows while the image is loading */}
      <div className="relative aspect-[4/5] md:aspect-auto md:h-[700px] overflow-hidden bg-[#0a0a0a] shimmer-bg">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-[2s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110 opacity-70 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-4 transition-colors group-hover:text-white">
            {label}
          </span>
          <h3 className="font-serif text-4xl md:text-5xl text-white font-light tracking-tighter group-hover:italic transition-all duration-700">
            {title}
          </h3>
          <div className="w-0 group-hover:w-24 h-[1px] bg-white mt-6 transition-all duration-1000 ease-out" />
        </div>
      </div>
    </Link>
  );
}
