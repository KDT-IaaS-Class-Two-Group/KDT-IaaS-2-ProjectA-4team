import React, { useState, useCallback, useEffect } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@../../components/ui/table";
import ButtonComponent from "src/components/button/customized/CustomButton";
import { ExpirationDateHook } from "src/hooks/expiration/ExpirationDateHook";
import { ConfirmDeleteModal } from "../../modal/expiration/ExpirationDateModal";
import { AddProductModal } from "src/components/modal/addmodal/AddProductModal";
import { ProductDTO } from "@shared/DTO/products/product.dto";

/**
 * @jojayeon 24.08.07
 * @returns 유통기한 관리 테이블
 */

export const ExpirationDataTable: React.FC = () => {
  const { data, loading, error, deleteProduct, addProduct, refetch } =
    ExpirationDateHook();
  const [open, setOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    refetch(); // 컴포넌트 마운트 시 데이터 가져오기
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  //정렬하기 날짜별, 이름별 2번
  const sortedProducts = data.sort((a, b) => {
    const expirationDateComparison =
      new Date(a.expirationDate).getTime() -
      new Date(b.expirationDate).getTime();

    if (expirationDateComparison !== 0) {
      return expirationDateComparison;
    }

    return a.productName.localeCompare(b.productName);
  });

  const handleDelete = async () => {
    if (selectedProductId) {
      await deleteProduct(selectedProductId);
      setOpen(false);
      refetch(); // 데이터 갱신
    }
  };

  const openModal = (product: string) => {
    setSelectedProductId(product);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedProductId(null);
  };
  const handleAddProduct = async (product: ProductDTO) => {
    await addProduct(product);
    setOpenAddModal(false);
    refetch(); // 제품 추가 후 데이터 갱신
  };
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>분류</TableHead>
            <TableHead>제품명</TableHead>
            <TableHead>수량</TableHead>
            <TableHead className="">유통기한</TableHead>
            <TableHead className="text-right pr-10">폐기</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProducts.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product.productCategory}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                {new Date(product.expirationDate).toDateString()}
              </TableCell>
              <TableCell className="text-right">
                <ButtonComponent
                  variant="default"
                  type="button"
                  onClick={() => openModal(product._id)}
                >
                  폐기하기
                </ButtonComponent>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ConfirmDeleteModal
        open={open}
        onClose={closeModal}
        onConfirm={handleDelete}
        title="폐기 확인"
        content="제품을 폐기하시겠습니까?"
      />
      <AddProductModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onAddProduct={handleAddProduct}
      />
    </>
  );
};
