import { ProductService } from "../services/products-service";
import { Suspense } from "react";
import ProductList from "./components/ProductList";
import { ShoppingBag } from "lucide-react";
import ProductSkeleton from "./components/ProductSkeleton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product List",
  description: "Product list page",
};

async function ProductsList({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;

  const products = await ProductService.getProducts();

  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-[#263740]">
          No products found!
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          Sorry, we couldn&apos;t find any products matching &quot;{search}&quot;.
          Try searching for something else.
        </p>
      </div>
    );
  }

  return <ProductList products={filteredProducts} />;
}

export default function Product({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#647B85]/20 bg-white px-4 py-2 text-xs font-semibold text-[#647B85] shadow-sm">
          <ShoppingBag size={15} />
          EXPLORE OUR COLLECTION
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold text-[#263740] sm:text-5xl lg:text-6xl">
          Find your
          <span className="block text-[#647B85]">
            everyday favourites.
          </span>
        </h1>

        <p className="mt-5 text-sm text-gray-500">
          Explore our collection of products and discover something you&apos;ll
          love.
        </p>
      </section>

      {/* Product List */}
      <Suspense fallback={<ProductSkeleton />}>
        <ProductsList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
