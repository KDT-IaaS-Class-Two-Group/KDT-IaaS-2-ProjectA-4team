import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@../../components/ui/table";
import ButtonComponent from "../CustomButton";
// import OrderModal from "../modal/OrderModal";
// import UpdateModal from "../modal/updateModal";
import { ProductUseTableHook } from "src/hooks/ProductUseTableHook";
// import useOrderModalHook from "src/hooks/useOrderModalHook";

export const ProductTable: React.FC = () => {
  const { data, loading, error } = ProductUseTableHook();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Table>
        <TableCaption>재고조회</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">카테고리</TableHead>
            <TableHead>재품명</TableHead>
            <TableHead>수량</TableHead>
            <TableHead>단가</TableHead>
            <TableHead>발주</TableHead>
            <TableHead className="text-right">수정</TableHead>
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
              <TableCell className="text-right">
                <ButtonComponent
                  variant="default"
                  type="button"
                  // onClick={() => openModal(row)}
                >
                  주문하기
                </ButtonComponent>
                <ButtonComponent
                  variant="default"
                  type="button"
                  // onClick={() => openModal(row)}
                >
                  수정하기
                </ButtonComponent>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
