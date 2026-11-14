import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  const categories = [
    {
      name: "Electronics",
      slug: "smartphones",
      image: "/images/homepage/category/electronics.jpg",
    },
    {
      name: "Jewellery",
      slug: "womens-jewellery",
      image: "/images/homepage/category/jewellery.jpg",
    },
    {
      name: "Men's Clothing",
      slug: "mens-shirts",
      image: "/images/homepage/category/mens-clothing.jpg",
    },
    {
      name: "Women's Clothing",
      slug: "womens-dresses",
      image: "/images/homepage/category/womens-clothing.jpg",
    },
  ];
  return (
    <div className="bg-[#F7F9FA] pb-10">
      <section className="mx-auto max-w-7xl py-4 sm:py-7 lg:py-9">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-[#F1F4F4] md:grid-cols-2 md:min-h-125">
          <div className="flex flex-col gap-4 justify-center px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <p className="text-sm font-semibold uppercase text-[#647B85]">
              Welcome to NexCart
            </p>
            <h1 className="max-w-xl text-4xl font-semibold text-[#263740]  sm:text-5xl lg:text-6xl xl:text-7xl">
              Discover Your
              <br />
              Next Favorite.
            </h1>
            <p className="max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              Discover everyday essentials, explore new favourites, and enjoy a
              better shopping experience with NexCart.
            </p>
            <Link
              href="/products"
              className="flex items-center w-fit gap-3 rounded-full bg-[#263740] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#647B85]"
            >
              Explore Collection
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="relative m-2.5 h-72 sm:h-96 md:m-0 md:h-full">
            <Image
              src="/images/homepage/hero/hero.png"
              alt="Discover the latest fashion collection"
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center "
            />
          </div>
        </div>
      </section>
      {/* categories */}
      <section className="mx-auto max-w-7xl  px-4 py-10 sm:py-14">
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
          <div>
            <p className="text-xs font-semibold uppercase  text-[#647B85]">
              Find your favourites
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl text-[#263740]">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-1 text-sm transition hover:text-[#647B85]"
          >
            View all <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              href={`/category/${encodeURIComponent(category.slug)}`}
              key={category.name}
              prefetch={true}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative h-36 overflow-hidden sm:h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold sm:text-base text-[#263740]">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">Explore collection</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* featured products */}
      <FeaturedProducts />
      {/* cta */}
      <section className="mx-auto max-w-7xl px-4 py-7 sm:py-14">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#263740] px-6 py-12 text-center sm:px-12 md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase text-[#B8C7CC]">
              Your next favourite is waiting
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Ready to discover something new?
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Explore our collection and find something you'll love.
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center w-fit gap-3 rounded-full bg-white text-[#263740] px-7 py-3.5 text-sm font-semibold transition hover:text-white hover:bg-[#647B85]"
          >
            Start Shopping
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
