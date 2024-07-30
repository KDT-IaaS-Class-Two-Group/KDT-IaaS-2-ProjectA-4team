import React from "react";
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

const ProductTable: React.FC = () => {
  const { data, loading, error } = ProductUseTableHook();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-end justify-center gap-4">
      <ButtonComponent variant="secondary">메뉴 추가</ButtonComponent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">카테고리</TableHead>
            <TableHead>재품명</TableHead>
            <TableHead>수량</TableHead>
            <TableHead>단가</TableHead>
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
                <ButtonComponent variant="default" type="button">
                  수정하기
                </ButtonComponent>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
