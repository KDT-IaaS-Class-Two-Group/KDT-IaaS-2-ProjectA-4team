import IProduct from "../../../../../db/products/product.interface";
import { ProductDTO } from "@shared/DTO/products/product.dto";

export default interface OrderModalProps {
  isOpen: boolean;
  product: IProduct;
  onClose: () => void;
  onSave: (product: ProductDTO) => void;
}
