import { ProductDTO } from "@shared/DTO/products/product.dto";

export default interface productUpdateHook {
  updateProduct: (product: ProductDTO) => Promise<ProductDTO>;
  loading: boolean;
  error: string | null;
}
