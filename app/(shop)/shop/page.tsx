import ProductCard from "@/components/productCard";
import { ProductFilters } from "@/components/ProductFilters";
import api from "@/lib/axios";

interface Product {
  id: number;
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
    <main className="min-h-screen bg-[#121212] py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tighter mb-10">
          Shop All
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <ProductFilters />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const SortOptions = () => (
  <>
    <option selected className="text-black" value="featured">
      Featured
    </option>
    <option className="text-black" value="Newest">
      Newest
    </option>
    <option className="text-black" value="Best Selling">
      Best Selling
    </option>
    <option className="text-black" value="Price: Low to High">
      Price: Low to High
    </option>
    <option className="text-black" value="Price: High to Low">
      Price: High to Low
    </option>
  </>
);

export default ShopPage;
