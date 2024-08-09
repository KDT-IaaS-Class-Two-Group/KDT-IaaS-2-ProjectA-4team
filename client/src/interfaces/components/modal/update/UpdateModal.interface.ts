import { ProductDTO } from "@shared/DTO/products/product.dto";

export default interface UpdateModalProps {
  isOpen: boolean;
  product: ProductDTO;
  onClose: () => void;
  onSave: (product: ProductDTO) => void;
}
