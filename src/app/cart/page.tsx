"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../../context/cart-context";

export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
  } = useCart();

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F9FA] px-4 py-16">
        <div className="mx-auto flex min-h-100 max-w-7xl flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#E9EEF0] text-[#647B85]">
            <ShoppingCart size={36} />
          </div>

          <h1 className="text-2xl font-semibold text-[#263740] sm:text-3xl">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            There are no products in your cart yet.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#263740] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#647B85]"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <Link
          href="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[#647B85] transition hover:text-[#263740]"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#263740] sm:text-3xl">
              Shopping Cart
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              You have {cartCount} items in your cart.
            </p>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="rounded-full border border-red-200 px-5 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Content */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_350px]">
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm sm:gap-6 sm:p-6"
              >
                {/* Product Image */}
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[#E9EEF0] p-3 sm:h-32 sm:w-32">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 96px, 128px"
                    className="object-contain p-3"
                  />
                </div>

                {/* Product Information */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs capitalize text-[#647B85]">
                    {item.category}
                  </p>

                  <h2 className="line-clamp-2 text-sm font-semibold text-[#263740] sm:text-base">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-base font-bold text-[#263740]">
                    ${item.price.toFixed(2)}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DCE3E6] text-[#263740] transition hover:bg-[#E9EEF0]"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="min-w-5 text-center text-sm font-semibold text-[#263740]">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DCE3E6] text-[#263740] transition hover:bg-[#E9EEF0]"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Remove Product */}
                <button
                  type="button"
                  aria-label={`Remove ${item.title} from cart`}
                  onClick={() => removeFromCart(item.id)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7 lg:sticky lg:top-24">
            <h2 className="text-xl font-semibold text-[#263740]">
              Order Summary
            </h2>

            <div className="mt-7 space-y-5 text-sm">
              <div className="flex items-center justify-between text-gray-500">
                <span>Total Items</span>
                <span className="font-medium text-[#263740]">{cartCount}</span>
              </div>

              <div className="flex items-center justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-medium text-[#263740]">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between text-gray-500">
                <span>Shipping</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
            </div>

            <div className="my-6 border-t border-gray-200" />

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#263740]">
                Total
              </span>

              <span className="text-2xl font-bold text-[#263740]">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout */}
            <button
              type="button"
              className="mt-7 w-full rounded-full bg-[#263740] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#647B85]"
            >
              Proceed to Checkout
            </button>

            <Link
              href="/products"
              className="mt-4 block text-center text-sm font-medium text-[#647B85] transition hover:text-[#263740]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
