
import { ServiceBase } from "./service-base";
import type { Product } from "../types/product";

export class ProductService extends ServiceBase {
  static async getProducts(): Promise<Product[]> {
    const response = await fetch(
      this.getUrl("/products?limit=0"),
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  }

  static async getProductById(id: number): Promise<Product> {
    const response = await fetch(
      this.getUrl(`/products/${id}`),
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product: Product = await response.json();
    return product;
  }
}
