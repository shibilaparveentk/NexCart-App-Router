import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <section className="mx-auto max-w-7xl py-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
          404
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl font-semibold">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500  ">
          Sorry, we couldn't find the requested resource.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#263740] px-6 py-3 text-white hover:bg-[#647B85]"
        >
          Return Home
        </Link>
      </section>
    </div>
  );
}