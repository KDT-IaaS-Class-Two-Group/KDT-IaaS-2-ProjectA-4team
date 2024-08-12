import { ProductDTO } from "@shared/DTO/products/product.dto";

export default interface UseOrderProductHook {
  orderProductData: (product: ProductDTO) => Promise<ProductDTO>;
  loading: boolean;
  error: string | null;
}
