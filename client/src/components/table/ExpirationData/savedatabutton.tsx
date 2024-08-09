import React, { useState } from "react";
import { AddProductModal } from "./AddProductModal";
import ButtonComponent from "src/components/CustomButton";
import { ExpirationDateHook } from "src/hooks/ExpirationDateHook"; // Hook 경로 확인
import { ProductDTO } from "@shared/DTO/products/product.dto";

const ProductPage: React.FC = () => {
  const { addProduct } = ExpirationDateHook();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기
  const closeModal = () => setIsModalOpen(false);

  // 모달에서 주문 처리
  const handleAddProduct = async (productData: ProductDTO) => {
    try {
      await addProduct(productData); 
      closeModal();
    } catch (error) {
      console.error("제품 추가 실패:", error);
    }
  };

  return (
    <div>
      <ButtonComponent onClick={openModal} variant="default">
        제품 추가
      </ButtonComponent>
      <AddProductModal open={isModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />
    </div>
  );
};

export default ProductPage;
