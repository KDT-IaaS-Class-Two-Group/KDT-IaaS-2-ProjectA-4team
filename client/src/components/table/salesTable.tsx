import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "components/ui/table";
import React from "react";
// import ButtonComponent from "../CustomButton";

const SalesTable:React.FC = () => {
  return (
    <Table className="flex flex-col">
      <TableCaption>재고조회</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">상품명</TableHead>
          <TableHead>수량</TableHead>
          <TableHead>단가</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* 데이터 수만큼 열 생성 */}
        {/* {data.map((row) => (
          <TableRow key={row.productID}>
            <TableCell className="font-medium">{row!.productName}</TableCell>
            <TableCell>{row!.quantity}</TableCell>
            <TableCell>{row!.unitPrice}</TableCell>
            <TableCell className="text-right">
              <ButtonComponent variant="default" type="submit">
                주문하기
              </ButtonComponent>
            </TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  );
}

export default SalesTable;