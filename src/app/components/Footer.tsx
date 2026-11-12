import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {

  const paymentMethods = ["VISA", "Mastercard", "UPI", "PayPal"];

  return (
    <footer className="bg-[#263740] text-white">
      <div className="max-w-350 mx-auto px-4 md:px-6 py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        {/* logo */}
        <div className="">
          <Link href="/" className="text-2xl">
            Nex<span className="font-bold text-[#647B85]">Cart</span>
          </Link>
          <p className="text-sm text-gray-300 mt-4">
            Your everyday shopping, made simple. Discover quality products at
            great prices.
          </p>
        </div>
        {/* links */}
        <div>
          <h3 className="font-semibold text-sm tracking-wide">Explore</h3>
          <ul className="mt-5 text-sm text-gray-300 space-y-3 ">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="transition-colors hover:text-white"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* customer support */}
        <div>
          <h3 className="font-semibold text-sm tracking-wide">Customer Support</h3>
          <ul className="mt-5 text-sm text-gray-300 space-y-3 ">
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                FAQS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Return Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>
        {/* follow us on */}
        <div>
          <h3 className="font-semibold text-sm tracking-wide">Follow Us On</h3>
          <div className="mt-5 flex items-center gap-3">
            <Link
              href="/"
              className="bg-white/10 rounded-full size-9 flex items-center justify-center transition-colors hover:bg-[#647B85]"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="/"
              className="bg-white/10 rounded-full size-9 flex items-center justify-center transition-colors hover:bg-[#647B85]"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="/"
              className="bg-white/10 rounded-full size-9 flex items-center justify-center transition-colors hover:bg-[#647B85]"
            >
              <FaYoutube size={18} />
            </Link>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-350 mx-auto px-2 md:px-6 py-3 md:py-5 flex  flex-col sm:flex-row items-center justify-between  text-gray-300 text-xs">
          <p className="">&copy; NexCart. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1">We accept :</span>
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold text-[#263740] shadow-sm"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
