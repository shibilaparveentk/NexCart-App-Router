
import { ProductService } from "../../services/products-service";

export async function GET() {
  try {
    const products = await ProductService.getProducts();

    return Response.json(products);
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
