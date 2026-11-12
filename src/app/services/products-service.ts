import { ServiceBase } from "./service-base";
import { Product } from "../types/product";

export class ProductService extends ServiceBase {
  // static getProducts = async (): Promise<Product[]> => {
  //   const productResponse = await fetch(
  //     this.getUrl("/products"),
  //     {
  //       next: { revalidate: 3600 },
  //     }
  //   );
  //   const data: Product[] = await productResponse.json();
  //   return data;
  // };
  static getProducts = async (): Promise<Product[]> => {
    const productResponse = await fetch(
      this.getUrl("/products"),
      {
        next: { revalidate: 3600 },
      }
    );

    const contentType = productResponse.headers.get("content-type");
    const responseText = await productResponse.text();

    if (!productResponse.ok || !contentType?.includes("application/json")) {
      throw new Error(
        `Product API error: ${productResponse.status}; Content-Type: ${contentType}; Response: ${responseText.slice(0, 300)}`
      );
    }

    return JSON.parse(responseText) as Product[];
  };

  // single product
  static getProductById = async (id: number): Promise<Product> => {
    const productResponse = await fetch(
      this.getUrl(`/products/${id}`),
      {
        next: { revalidate: 3600 },
      }
    );
    const product: Product = await productResponse.json();
    return product;
  };
}
