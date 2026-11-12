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

    if (!productResponse.ok) {
      throw new Error(
        `Product API failed: ${productResponse.status} ${productResponse.statusText}`
      );
    }

    const data: Product[] = await productResponse.json();
    return data;
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
