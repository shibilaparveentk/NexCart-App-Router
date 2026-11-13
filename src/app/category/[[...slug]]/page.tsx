
import { ProductService } from "../../services/products-service";
import ProductList from "../../products/components/ProductList";
import { Suspense } from "react";
import ProductSkeleton from "../../products/components/ProductSkeleton";

// Group related DummyJSON categories
const categoryGroups: Record<string, string[]> = {
  electronics: [
    "smartphones",
    "laptops",
    "tablets",
    "mobile-accessories",
  ],
  jewellery: ["womens-jewellery"],
  "mens-clothing": [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
  ],
  "womens-clothing": [
    "womens-dresses",
    "womens-shoes",
    "womens-bags",
    "womens-watches",
    "tops",
  ],
};

const categoryNames: Record<string, string> = {
  electronics: "Electronics",
  jewellery: "Jewellery",
  "mens-clothing": "Men's Clothing",
  "womens-clothing": "Women's Clothing",
};

async function CategoryProducts({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  const category = slug?.[0]?.toLowerCase() || "";
  const categoryName = categoryNames[category] || category;

  const products = await ProductService.getProducts();

  const selectedCategories = categoryGroups[category] || [category];

  const filteredProducts = category
    ? products.filter((product) =>
        selectedCategories.includes(product.category.toLowerCase()),
      )
    : products;

  return (
    <>
      <section className="px-4 pt-4 text-center">
        <h1 className="text-4xl font-semibold text-[#263740] capitalize">
          {categoryName || "Browse Categories"}
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Explore products from your favourite categories.
        </p>
      </section>

      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold text-[#263740]">
            No products found!
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            No products available in this category.
          </p>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      <Suspense fallback={<ProductSkeleton />}>
        <CategoryProducts params={params} />
      </Suspense>
    </div>
  );
}
