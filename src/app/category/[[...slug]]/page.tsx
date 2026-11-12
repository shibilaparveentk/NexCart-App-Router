import { ProductService } from "../../services/products-service";
import ProductList from "../../products/components/ProductList";
import { Suspense } from "react";
import ProductSkeleton from "../../products/components/ProductSkeleton";

async function CategoryProducts({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  const category = decodeURIComponent(slug?.[0] || "");

  const products = await ProductService.getProducts();

  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase(),
      )
    : products;

  if (filteredProducts.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-[#263740]">
          No products found!
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          No products available in this category.
        </p>
      </div>
    );
  }

  return <ProductList products={filteredProducts} />;
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      <section className="px-4 py-12 text-center">
        <h1 className="text-4xl font-semibold text-[#263740]">
          Browse Categories
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Explore products from your favourite categories.
        </p>
      </section>

      <Suspense fallback={<ProductSkeleton />}>
        <CategoryProducts params={params} />
      </Suspense>
    </div>
  );
}
