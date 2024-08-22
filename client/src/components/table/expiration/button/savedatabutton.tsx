import React, { useState } from "react";
import { AddProductModal } from "../../../modal/addmodal/AddProductModal";
import ButtonComponent from "src/components/button/customized/CustomButton";
import { useExpirationDate } from "src/model/expiration/useExpirationDate";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import { PRODUCT_ORDER } from "static/components/table/expiration/button/savedatabutton.static";
/**
 * @jojayeon 24.08.09
 * @returns 제품 구매 버튼
 */
const ProductPage: React.FC = () => {
  const { addProduct } = useExpirationDate();
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
      throw error;
    }
  };

  return (
    <div className="w-24 h-8 mt-6 text-center bg-cyan-500 rounded-xl text-white text-sm leading-loose border border-transparent hover:text-cyan-500 hover:bg-white hover:border hover:border-cyan-500">
      <ButtonComponent onClick={openModal} variant="default">
        {PRODUCT_ORDER}
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
