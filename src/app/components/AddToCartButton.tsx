"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import type { Product } from "../types/product";

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#263740] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#647B85]"
    >
      <ShoppingCart size={16} />
      Add to Cart
    </button>
  );
}
