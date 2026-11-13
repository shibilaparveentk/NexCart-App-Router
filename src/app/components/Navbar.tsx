"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../../context/cart-context";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F9FA] p-3 sm:p-4">
      <nav className="mx-auto max-w-350 rounded-2xl border border-[#263740]/10 bg-white px-4 py-3 shadow-sm md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/nexcart-logo.png"
              alt="NexCart"
              width={150}
              height={47}
              priority
              className="h-auto w-28 sm:w-32 md:w-36"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="whitespace-nowrap text-[#263740] transition hover:text-[#647B85]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <div className="hidden min-w-0 max-w-60 flex-1 items-center gap-2 rounded-full border border-gray-200 bg-[#F7F9FA] px-4 py-2.5 focus-within:border-[#647B85] xl:flex">
              <Search size={17} className="shrink-0 text-[#647B85]" />
              <input
                type="text"
                aria-label="Search products"
                placeholder="Search products..."
                onChange={(e) =>
                  router.replace(
                    `/products?search=${encodeURIComponent(e.target.value)}`,
                  )
                }
                className="w-full min-w-0 bg-transparent text-sm text-[#263740] outline-none placeholder:text-gray-400"
              />
            </div>
            <Link
              href="/login"
              aria-label="Account"
              className="hidden items-center justify-center text-[#263740] sm:flex"
            >
              <FaRegUser size={19} strokeWidth={1.8} />
            </Link>
            <Link
              href="/cart"
              className="relative flex size-9 items-center justify-center overflow-visible rounded-full text-[#263740] transition hover:bg-[#647B85]/10 sm:size-10"
            >
              <ShoppingCart size={22} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-2 z-10 flex size-5 items-center justify-center rounded-full bg-[#263740] text-[10px] font-bold leading-none text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex size-9 items-center justify-center rounded-full text-[#263740] transition hover:bg-[#647B85]/10 lg:hidden"
            >
              {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Dropdown */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-gray-100 pt-4 lg:hidden">
            <div className="mb-4 flex items-center gap-2 rounded-full border border-gray-200 bg-[#F7F9FA] px-4 py-3 focus-within:border-[#647B85]">
              <Search size={17} className="shrink-0 text-[#647B85]" />
              <input
                type="text"
                aria-label="Search products"
                placeholder="Search products..."
                onChange={(e) =>
                  router.replace(
                    `/products?search=${encodeURIComponent(e.target.value)}`,
                  )
                }
                className="w-full min-w-0 bg-transparent text-sm text-[#263740] outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[#263740] transition hover:bg-[#647B85]/10 hover:text-[#647B85]"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#263740] transition hover:bg-[#647B85]/10"
              >
                <FaRegUser size={18} />
                Account
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
