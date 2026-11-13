import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Heart,
  MousePointerClick,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NexCart",
  description:
    "Learn about NexCart and our mission to make everyday online shopping simple and convenient.",
};

export default function AboutPage() {
  const reasons = [
    {
      icon: ShoppingBag,
      title: "Product Variety",
      description:
        "Explore different categories and discover products for your everyday needs.",
    },
    {
      icon: MousePointerClick,
      title: "Easy Shopping",
      description:
        "Enjoy a simple browsing experience and find your favourite products with ease.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "We aim to make every shopping experience simple, convenient and enjoyable.",
    },
  ];

  return (
    <div className="bg-[#F7F9FA]">
      {/* herosection */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-18">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#F1F4F4] p-7 sm:p-10 md:grid-cols-2 lg:p-16">
          <div>
            <p className="text-xs font-semibold uppercase text-[#647B85]">
              ABOUT NEXCART
            </p>
            <h1 className="mt-4 text-4xl font-semibold  text-[#263740] sm:text-5xl lg:text-6xl">
              Shopping made
              <span className="block text-[#647B85]">simple for you.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
              Welcome to NexCart! We bring together a variety of products in one
              place to make discovering your everyday favourites easier and more
              enjoyable.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#263740] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#647B85]"
            >
              Explore Collection
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Visual Section */}
          <div className="relative min-h-64 overflow-hidden rounded-3xl sm:min-h-80">
            <Image
              src="/images/about/about-hero.png"
              alt="NexCart shopping collection"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story and Mission */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#E9EEF0]">
            <Sparkles size={23} className="text-[#647B85]" />
          </div>
          <p className="mt-5 text-xs font-semibold uppercase  text-[#647B85]">
            OUR MISSION
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#263740] sm:text-4xl">
            Making everyday shopping easier.
          </h2>
          <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
            At NexCart, our goal is to bring a convenient and enjoyable shopping
            experience to everyone. We want to make it easier to explore
            different products, discover new favourites and find what you need
            in one place.
          </p>
        </div>
      </section>

      {/* Why Choose NexCart */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase  text-[#647B85]">
              THE NEXCART EXPERIENCE
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#263740] sm:text-4xl">
              Why Shop with NexCart?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
              We focus on making your shopping journey simple, convenient and
              enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-[#263740]/10 bg-[#F7F9FA] p-7 transition  hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#E9EEF0]">
                    <Icon size={24} className="text-[#647B85]" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#263740]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="grid items-center gap-8 rounded-3xl bg-[#E9EEF0] p-7 sm:p-10 md:grid-cols-2 lg:p-14">
          <div>
            <p className="text-xs font-semibold uppercase text-[#647B85]">
              WHAT MATTERS TO US
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#263740] sm:text-4xl">
              Built around a better shopping experience.
            </h2>
          </div>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-[#263740]">Simplicity</h3>
              <p className="mt-1 text-sm leading-7 text-gray-600">
                Keeping the shopping experience easy to understand and use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#263740]">Convenience</h3>
              <p className="mt-1 text-sm leading-7 text-gray-600">
                Bringing different product categories together in one place.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#263740]">
                Customer Satisfaction
              </h3>
              <p className="mt-1 text-sm leading-7 text-gray-600">
                Making every visit to NexCart a pleasant experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:pb-20">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#263740] px-6 py-12 text-center sm:px-12 md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase text-[#B8C7CC]">
              YOUR NEXT FAVOURITE IS WAITING
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Ready to explore NexCart?
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Discover products and find something you'll love.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#263740] transition hover:bg-[#647B85] hover:text-white"
          >
            Start Shopping
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
