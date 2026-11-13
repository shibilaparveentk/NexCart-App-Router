
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../../components/AddToCartButton";
import type { Product } from "../../types/product";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
          >
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative h-40 bg-[#F1F4F4] sm:h-48">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  unoptimized
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain p-6 transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <p className="mb-2 text-xs capitalize text-[#647B85]">
                  {product.category}
                </p>
                <h2 className="line-clamp-2 min-h-10 text-sm font-semibold text-[#263740] group-hover:text-[#647B85]">
                  {product.title}
                </h2>
                <p className="mt-3 font-semibold text-[#263740]">
                  ${product.price}
                </p>
              </div>
            </Link>

            <div className="px-4 pb-4">
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
