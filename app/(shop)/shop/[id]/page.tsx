import api from "@/lib/axios";
import Image from "next/image";
import { notFound } from "next/navigation";

// In Next.js 15, params is a Promise
type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;

  let product;
  try {
    const res = await api.get(`/products/${id}`);
    product = res.data;
  } catch (err) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#121212] pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Product Image */}
        <div className="relative aspect-[3/4] bg-[#191919] overflow-hidden">
          <Image
            src={product.imgURL}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <h1 className="brand-logo text-5xl md:text-7xl lowercase text-white">
              {product.name}
            </h1>
            <p className="text-2xl font-bold tracking-tighter text-white/90">
              ${product.price} USD
            </p>
          </div>

          <p className="text-white/40 leading-relaxed font-light max-w-md">
            Hand-curated piece from our studio. Every item is unique and
            sustainably sourced to match your aesthetic mood.
          </p>

          <button className="w-full md:w-max px-12 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-transparent hover:text-white border border-white transition-all">
            Add to Bag
          </button>
        </div>
      </div>
    </main>
  );
}
