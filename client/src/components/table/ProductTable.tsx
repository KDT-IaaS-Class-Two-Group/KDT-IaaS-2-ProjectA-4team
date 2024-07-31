import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@../../components/ui/table";
import ButtonComponent from "../CustomButton";
import { ProductUseTableHook } from "src/hooks/ProductUseTableHook";
import UpdateModal from "../modal/UpdateModal";
import { ProductDTO } from "@shared/DTO/products/product.dto";

/**
 * @moonhr 24.07.31
 * @returns 재고 테이블
 */
const ProductTable: React.FC = () => {
  const { data, loading, error, refetch } = ProductUseTableHook();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDTO | null>(
    null,
  );

  const openModal = (product: ProductDTO) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSave = async (updatedProduct: ProductDTO) => {
    try {
      await refetch();
      closeModal;
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

  return (
    <>
      <div className="flex flex-col items-end justify-center gap-4">
        <ButtonComponent variant="secondary">메뉴 추가</ButtonComponent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">카테고리</TableHead>
              <TableHead>재품명</TableHead>
              <TableHead>수량</TableHead>
              <TableHead>판매가</TableHead>
              <TableHead className="text-center">발주</TableHead>
              <TableHead className="text-center">수정</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* 데이터 수만큼 열 생성 */}
            {data.map((row) => (
              <TableRow key={row.productID}>
                <TableCell className="font-medium">
                  {row!.productCategory}
                </TableCell>
                <TableCell>{row!.productName}</TableCell>
                <TableCell>{row!.quantity}</TableCell>
                <TableCell>{row!.unitPrice}</TableCell>
                <TableCell className="text-center">
                  <ButtonComponent variant="default" type="button">
                    발주하기
                  </ButtonComponent>
                </TableCell>
                <TableCell className="text-center">
                  <ButtonComponent
                    variant="default"
                    type="button"
                    onClick={() => openModal(row)}
                  >
                    수정하기
                  </ButtonComponent>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {modalOpen && selectedProduct && (
        <UpdateModal
          isOpen={modalOpen}
          product={selectedProduct}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default ProductTable;
