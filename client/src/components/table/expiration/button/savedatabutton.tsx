import React, { useState } from "react";
import { AddProductModal } from "../../../modal/addmodal/AddProductModal";
import ButtonComponent from "src/components/button/customized/CustomButton";
import { useExpirationDate } from "src/model/expiration/useExpirationDate";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import { PRODUCT_ORDER } from "static/components/table/expiration/button/savedatabutton.static";

/**
 * @jojayeon 24.08.09
 * @returns 제품 구매 버튼 ,새로운 제품으 구매하는 버튼 역할을 합니다. 
 * @returns {React.ReactElement}  제품 구매 버튼과 제품 추가 모달을 포함하는 React 컴포넌트입니다.
 * @compoent 
 * * openModal - 모달창 열기
 * * closeModal - 모달창 닫기
 * * handleAddProduct - 주문하는 행동 (주문 처리하고 모달창 닫기)
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

  //버튼이 보는 코드 
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
