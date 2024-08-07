import React, { useState } from "react";
import ButtonComponent from "src/components/button/CustomButton";
import { ProductUseTableHook } from "src/hooks/ProductUseTableHook";
import UpdateModal from "src/components/modal/update/UpdateModal";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import OrderModal from "src/components/modal/order/OrderModal";
import { formatDateToYYYYMMDD } from "src/utils/formatDateToYYYYMMDD";
import DynamicTable from "../DynamicTable";

/**
 * @moonhr 24.07.31
 * @returns 재고 테이블
 */
const ProductTable: React.FC = () => {
  const { data, loading, error, refetch } = ProductUseTableHook();
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDTO | null>(
    null,
  );

  const openUpdateModal = (product: ProductDTO) => {
    setSelectedProduct(product);
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedProduct(null);
  };

  const openOrderModal = (product: ProductDTO) => {
    setSelectedProduct(product);
    setOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSave = async () => {
    try {
      await refetch();
      closeUpdateModal();
      closeOrderModal();
    } catch (err) {
      console.error("Failed to fetch updated products:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // 데이터 전처리 (예: ProductDTO 인스턴스로 변환)
  const processedData = data.map((item) => {
    const formattedItem = {
      ...item,
      restockDate: formatDateToYYYYMMDD(new Date(item.restockDate)),
      expirationDate: formatDateToYYYYMMDD(new Date(item.expirationDate)),
    };
    return new ProductDTO(formattedItem);
  });
  return (
    <>
      <DynamicTable<ProductDTO>
        data={processedData}
        renderActions={(row) => (
          <>
            <ButtonComponent
              variant="default"
              type="button"
              onClick={() => openOrderModal(row)}
              className="mb-1 text-xs bg-slate-500 hover:bg-black"
            >
              발주하기
            </ButtonComponent>
            <ButtonComponent
              variant="default"
              type="button"
              onClick={() => openUpdateModal(row)}
              className="mt-1 text-xs bg-slate-500 hover:bg-black"
            >
              수정하기
            </ButtonComponent>
          </>
        )}
      />
      {updateModalOpen && selectedProduct && (
        <UpdateModal
          isOpen={updateModalOpen}
          product={selectedProduct}
          onClose={closeUpdateModal}
          onSave={handleSave}
        />
      )}
      {orderModalOpen && selectedProduct && (
        <OrderModal
          isOpen={orderModalOpen}
          product={selectedProduct}
          onClose={closeOrderModal}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default ProductTable;
