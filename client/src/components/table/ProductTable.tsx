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

import { ProductUseTableHook } from "src/hooks/productUseTableHook";

export const ProductTable: React.FC = () => {
  const { data, loading, error } = ProductUseTableHook("/");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Table>
      <TableCaption>재고조회</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">재고명</TableHead>
          <TableHead>수량</TableHead>
          <TableHead>단가</TableHead>
          <TableHead className="text-right">주문</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{data!.productName}</TableCell>
          <TableCell>{data!.quantity}</TableCell>
          <TableCell>{data!.unitPrice}</TableCell>
          <TableCell className="text-right">
            <ButtonComponent variant="default" type="submit">
              주문하기
            </ButtonComponent>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
