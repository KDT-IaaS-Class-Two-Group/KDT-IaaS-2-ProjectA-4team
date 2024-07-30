import { useState, useCallback } from "react";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import { saveProductData } from "src/model/productFetchTableData";

const useOrderModalHook = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDTO | null>(
    null,
  );
  const [quantity, setQuantity] = useState<number>(0);

  const openModal = useCallback((product: ProductDTO) => {
    setSelectedProduct(product);
    setQuantity(0);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedProduct(null);
  }, []);

  const saveOrder = useCallback(async () => {
    if (selectedProduct) {
      const updatedProduct = new ProductDTO({
        ...selectedProduct,
        quantity,
        restockDate: selectedProduct.restockDate || new Date(),
      });
      await saveProductData(updatedProduct);
      closeModal();
    }
  }, [selectedProduct, quantity, closeModal]);

  return {
    modalOpen,
    selectedProduct,
    quantity,
    setQuantity,
    openModal,
    closeModal,
    saveOrder,
  };
};

export default useOrderModalHook;
