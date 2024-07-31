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
import OrderModal from "../modal/OrderModal";

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

  const handleSave = async (updatedProduct: ProductDTO) => {
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
                  <ButtonComponent
                    variant="default"
                    type="button"
                    onClick={() => openOrderModal(row)}
                  >
                    발주하기
                  </ButtonComponent>
                </TableCell>
                <TableCell className="text-center">
                  <ButtonComponent
                    variant="default"
                    type="button"
                    onClick={() => openUpdateModal(row)}
                  >
                    수정하기
                  </ButtonComponent>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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
