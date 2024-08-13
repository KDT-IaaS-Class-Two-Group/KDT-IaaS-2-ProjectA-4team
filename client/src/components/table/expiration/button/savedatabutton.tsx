import React, { useState } from "react";
import { AddProductModal } from "../../../modal/addmodal/AddProductModal";
import ButtonComponent from "src/components/button/customized/CustomButton";
import { ExpirationDateHook } from "src/hooks/expiration/ExpirationDateHook";
import { ProductDTO } from "@shared/DTO/products/product.dto";
/**
 * @jojayeon 24.08.09
 * @returns 제품 구매 버튼
 */
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
    <div className="w-24 h-8 mt-6 text-center bg-cyan-500 rounded-xl text-white text-sm leading-loose border border-transparent hover:text-cyan-500 hover:bg-white hover:border hover:border-cyan-500">
      <ButtonComponent onClick={openModal} variant="default">
        제품 구매
      </ButtonComponent>
      <AddProductModal
        open={isModalOpen}
        onClose={closeModal}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default ProductPage;
