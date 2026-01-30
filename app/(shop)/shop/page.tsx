import ProductCard from "@/components/productCard";
import { ProductFilters } from "@/components/ProductFilters";
import api from "@/lib/axios";

interface Product {
  id: any;
  name: string;
  price: string;
  imgURL: string;
}

const ShopPage = async () => {
  let products: Product[] = [];
  try {
    const response = await api.get("/products");
    products = response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Editorial Header */}
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">
              Archive 2026
            </span>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tighter italic">
              Shop All
            </h1>
          </div>

          <div className="flex items-center gap-12">
            <div className="hidden md:flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40">
              <span>Showing {products.length} Results</span>
            </div>

            <div className="relative group">
              <select className="bg-transparent border-none text-[10px] uppercase tracking-[0.2em] focus:outline-none appearance-none cursor-pointer pr-6">
                <SortOptions />
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-2 h-[1px] bg-white/40" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-12">
          {/* Refine System - Now a streamlined top-section toggle or slim side-bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <aside className="lg:col-span-2">
              <div className="lg:sticky lg:top-32 space-y-12">
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8">
                    Refine
                  </h3>
                  <ProductFilters />
                </div>
              </div>
            </aside>

            {/* Cinematic Product Grid */}
            <div className="lg:col-span-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                      id={product.id}
                    />
                  ))
                ) : (
                  <div className="col-span-full h-64 flex items-center justify-center border border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                      Collection Empty / Check Connection
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const SortOptions = () => (
  <>
    <option value="featured">Featured</option>
    <option value="newest">Latest Drop</option>
    <option value="best-selling">High Demand</option>
    <option value="price-asc">Price: Ascending</option>
    <option value="price-desc">Price: Descending</option>
  </>
);

export default ShopPage;
