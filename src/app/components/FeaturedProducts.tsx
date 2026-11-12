"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AddToCartButton from "./AddToCartButton";
import type { Product } from "../types/product";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data.slice(0, 4));
      } catch (error) {
        setError("Unable to load featured products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-[#647B85]">
            Handpicked for you
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#263740] sm:text-3xl">
            Featured Products
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Discover our favourite picks for you.
          </p>
        </div>

        <Link
          href="/products"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#647B85] transition hover:text-[#263740]"
        >
          View All <ArrowUpRight size={16} />
        </Link>
      </div>

      {loading && (
        <p className="py-10 text-center text-[#647B85]">
          Loading featured products...
        </p>
      )}

      {error && (
        <p className="py-10 text-center text-red-500">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative flex h-52 items-center justify-center bg-[#E9EEF0] p-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-6 transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="mb-2 text-xs capitalize text-[#647B85]">
                    {product.category}
                  </p>

                  <h3 className="line-clamp-2 min-h-10 text-sm font-semibold text-[#263740]">
                    {product.title}
                  </h3>

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
      )}
    </section>
  );
}
