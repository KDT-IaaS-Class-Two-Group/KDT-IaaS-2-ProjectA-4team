import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@../../components/ui/table";
import ButtonComponent from "../../button/customized/CustomButton";
import { ExpirationDateHook } from "src/hooks/expiration/ExpirationDateHook";
import { ConfirmDeleteModal } from "../../modal/expiration/ExpirationDateModal";

/**
 * @jojayeon 24.08.07
 * @returns 유통기한 관리 테이블
 */

export const ExpirationDataTable: React.FC = () => {
  const { data, loading, error, deleteProduct } = ExpirationDateHook();
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

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

  // 도달창 띄우고 취소 확인
  //확인
  const handleDelete = () => {
    if (selectedProductId) {
      deleteProduct(selectedProductId);
      setOpen(false);
    }
  };

  //폐기 버튼
  const openModal = (product: string) => {
    setSelectedProductId(product);
    setOpen(true);
  };

  //취소 버튼
  const closeModal = () => {
    setOpen(false);
    setSelectedProductId(null);
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
      {/* 모달창 */}
      <ConfirmDeleteModal
        open={open}
        onClose={closeModal}
        onConfirm={handleDelete}
      />
    </>
  );
};
