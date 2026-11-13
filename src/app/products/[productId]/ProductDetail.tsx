import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { ProductService } from "../../services/products-service";
import { notFound } from "next/navigation";
import AddToCartButton from "../../components/AddToCartButton";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  let product;

  try {
    product = await ProductService.getProductById(Number(productId));
  } catch {
    notFound();
  }

  if (!product || !product.id) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#647B85] hover:text-[#263740]"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>
        <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2">
          <div className="relative flex min-h-75 items-center justify-center bg-[#F1F4F4] p-8 md:min-h-125">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={350}
              height={350}
              className="h-60 w-full object-contain md:h-80"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="mb-3 text-sm capitalize text-[#647B85]">
              {product.category}
            </p>

            <h1 className="text-2xl font-semibold text-[#263740] sm:text-3xl">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={
                      star <= Math.round(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#263740]">
                {product.rating}
              </span>
              <span className="text-sm text-gray-500">
                ({product.stock} in stock)
              </span>
            </div>
            <p className="mt-5 text-3xl font-bold text-[#263740]">
              ${product.price}
            </p>
            <div className="my-6 border-t border-gray-200" />
            <h2 className="mb-3 font-semibold text-[#263740]">
              Product Description
            </h2>
            <p className="text-sm leading-7 text-gray-500">
              {product.description}
            </p>
            <div className="mt-8 sm:w-fit">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
