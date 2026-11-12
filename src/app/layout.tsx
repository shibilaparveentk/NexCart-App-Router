import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/cart-context";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexCart | Online Shopping",
  description: "Discover your favourite products at NexCart. Shop electronics, jewellery, men's and women's clothing with ease.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex min-h-full flex-col antialiased`}
      >
        <CartProvider>
          <Navbar />
          <main className="flex-1 bg-[#F7F9FA]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
