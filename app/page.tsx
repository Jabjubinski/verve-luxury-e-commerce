import Hero from "@/components/hero";
import ProductCard from "@/components/productCard";
import api from "@/lib/axios";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ornament from "../public/ornaments/ornament.png";
import whimsigoth from "../public/clothes/whimsigoth.jpg";
import vampy from "../public/clothes/vampy.jpg";
import earthy from "../public/clothes/earthy.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

async function getTrendingProducts() {
  try {
    const res = await api.get("/products");

    return res.data.slice(0, 4);
  } catch (err) {
    return [];
  }
}

export default async function Home() {
  const trendingProducts = await getTrendingProducts();

  return (
    <div className="flex flex-col bg-[#121212]">
      <Hero />

      <section className="py-20 pt-10 px-4 max-w-360 mx-auto w-full">
        <div className="h-full flex justify-center items-center pb-10">
          <Image src={ornament} width={200} height={200} alt="ornament logo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MoodCategoryCard
            title="Whimsigoth"
            img={whimsigoth}
            href="/mood/whimsigoth"
          />
          <MoodCategoryCard title="Vampy" img={vampy} href="/mood/vampy" />
          <MoodCategoryCard title="Earthy" img={earthy} href="/mood/earthy" />
        </div>
      </section>

      {/* 3. Trending/New Arrivals */}
      <section className="py-20 bg-[#191919]">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">
                New Arrivals
              </h2>
              <p className="text-white/40 text-sm mt-2">
                The latest drops from our studio.
              </p>
            </div>
            <Link
              href="/shop"
              className="group flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold"
            >
              View All{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {trendingProducts.map((product: any) => (
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

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-3">
              Sustainably Sourced
            </h4>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Ethical production from fiber to finish.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-3">
              Global Shipping
            </h4>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Fast, reliable delivery to over 50 countries.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-3">
              Curated Aesthetics
            </h4>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Wear your mood, not just the trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MoodCategoryCard({
  title,
  img,
  href,
}: {
  title: string;
  img: string | StaticImport;
  href: string;
  id: string;
}) {
  return (
    <Link href={href} className="group relative aspect-4/5 overflow-hidden">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold uppercase tracking-[0.2em]">
          {title}
        </h3>
      </div>
    </Link>
  );
}
