import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] px-4 py-12 sm:px-6">
      <div className="mx-auto flex min-h-[75vh] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-sm md:grid-cols-2">
          {/* Left Section */}
          <div className="hidden flex-col justify-between bg-[#263740] p-10 text-white md:flex lg:p-14">
            <div>
              <p className="text-sm font-semibold text-[#B8C7CC]">
                WELCOME TO NEXCART
              </p>
              <h1 className="mt-8 text-4xl font-semibold lg:text-5xl">
                Shopping made
                <span className="block text-[#B8C7CC]">simple for you.</span>
              </h1>
              <p className="mt-6 text-sm leading-7 text-white/65">
                Sign in to explore your favourites, manage your orders, and
                enjoy a seamless shopping experience.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium">
                Your favourite products, all in one place.
              </p>
              <p className="mt-2 text-xs text-white/50">
                Discover. Shop. Enjoy.
              </p>
            </div>
          </div>
          {/* Right Section - form */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#647B85]">
                WELCOME BACK
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#263740]">
                Sign in to your account
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Enter your details to continue shopping.
              </p>
            </div>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#263740]"
                >
                  Email address
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#F8FAFB] px-4 py-3.5 focus-within:border-[#647B85]">
                  <Mail size={18} className="text-[#647B85]" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent text-sm text-[#263740] outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#263740]"
                >
                  Password
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#F8FAFB] px-4 py-3.5 focus-within:border-[#647B85]">
                  <Lock size={18} className="text-[#647B85]" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="w-full bg-transparent text-sm text-[#263740] outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-[#647B85] hover:text-[#263740]"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-[#263740] px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3D5661]"
              >
                Sign In
              </button>
            </form>
            <p className="mt-8 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-[#647B85] hover:text-[#263740]"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
