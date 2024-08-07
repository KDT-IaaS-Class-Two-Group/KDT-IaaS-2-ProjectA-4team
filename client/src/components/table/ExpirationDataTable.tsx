import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@../../components/ui/table"; 
import ButtonComponent from "../CustomButton"; 
import { ExpirationDateHook } from 'src/hooks/ExpirationDateHook'; 
import { ConfirmDeleteModal } from '../modal/ExpirationDateModal';

/**
 * @jojayeon 24.08.05
 * @returns 유통기한 관리 테이블 
 */

export const ExpirationDataTable: React.FC = () => {
  const { data, loading, error, deleteProduct } = ExpirationDateHook();
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  //정렬하기 날짜별, 이름별 2번
  const sortedProducts = data.sort((a, b) => {
    const expirationDateComparison = new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();
  
    if (expirationDateComparison !== 0) {
      return expirationDateComparison;
    }
  
    return a.productName.localeCompare(b.productName);
  });

  // 도달창 띄우고 취소 확인
  //확인
  const handleDelete = () => {
    if (selectedProductId) { //id있는지 한번 더 확인
      deleteProduct(selectedProductId);// 폐기 버튼에서 product인 _id로 지우는 역할
      setOpen(false); //모달창 닫기
    }
  };

  //폐기 버튼
  const openModal = (product: string) => {
    setSelectedProductId(product); //_id 저장 
    setOpen(true);// 처음에 상태코드로 false처리 되어있고 그것을 true하면서 모달창이 열리게 
  };

  //취소 버튼
  const closeModal = () => {
    setOpen(false); //모달창 닫기
    setSelectedProductId(null);// _id 초기화
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>재고명</TableHead>
            <TableHead className='pr-10%'>수량</TableHead>
            <TableHead className=''>유통기한</TableHead>
            <TableHead className="text-right pr-10">폐기</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProducts.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product.productCategory}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{new Date(product.expirationDate).toDateString()}</TableCell>
              <TableCell className="text-right">
                <ButtonComponent variant="default" type="button" onClick={() => openModal(product._id)}>폐기하기</ButtonComponent>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* 모달창 */}
      <ConfirmDeleteModal
        open={open} //모달 창 오픈
        onClose={closeModal} 
        onConfirm={handleDelete}
      />
    </>
  );
};
