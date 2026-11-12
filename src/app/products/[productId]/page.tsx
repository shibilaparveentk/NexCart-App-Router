import { Suspense } from "react";
import ProductDetail from "./ProductDetail";
import type { Metadata } from "next";
import { ProductService } from "../../services/products-service";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { productId } = await params;

  const product = await ProductService.getProductById(Number(productId));

  return {
    title: `${product.title} | NexCart`,
    description: product.description,
  };
}

export default function ProductDetailsPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <p className="py-20 text-center text-[#647B85]">
          Loading product details...
        </p>
      }
    >
      <ProductDetail params={params} />
    </Suspense>
  );
}