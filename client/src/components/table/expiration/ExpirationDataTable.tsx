import React, { useState } from "react";
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
import useSearch from "src/hooks/useSearchHook";
import SearchForm from "src/components/form/search/SearchForm";

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
  const [searchQuery, handleSearch] = useSearch();

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

  const filteredProducts = sortedProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
      <SearchForm onSearch={handleSearch} />
      <Table className="min-w-full bg-white text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-full bg-white text-center">
              분류
            </TableHead>
            <TableHead className="min-w-full bg-white text-center">
              제품명
            </TableHead>
            <TableHead className="min-w-full bg-white text-center">
              수량
            </TableHead>
            <TableHead className="min-w-full bg-white text-center">
              유통기한
            </TableHead>
            <TableHead className="min-w-full bg-white text-center">
              폐기
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product.productCategory}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                {new Date(product.expirationDate).toDateString()}
              </TableCell>
              <TableCell>
                <ButtonComponent
                  className="w-24 text-center bg-cyan-500 rounded-xl text-white text-sm leading-loose border border-transparent hover:text-cyan-500 hover:bg-white hover:border hover:border-cyan-500"
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
        title="폐기 확인"
        content="제품을 폐기하시겠습니까?"
      />
    </>
  );
};
