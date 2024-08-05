import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@../../components/ui/table";
import ButtonComponent from "src/components/CustomButton";
import { TestHook } from "./testhook";

export const TestExpirationDataTable: React.FC = () => {
  const { data, loading, error, deleteProduct } = TestHook(); //구조 분해 할당
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const sortedProducts = data.sort((a, b) => {
    return (
      new Date(a.expirationDate).getTime() -
      new Date(b.expirationDate).getTime()
    ); //오름차순 으로 정렬한 것
  });

  const handleDelete = (_id: string) => {
    deleteProduct(_id);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>분류</TableHead>
          <TableHead>재고명</TableHead>
          <TableHead className="pr-10%">수량</TableHead>
          <TableHead className="">유통기한</TableHead>
          <TableHead className="text-right pr-10">폐기</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedProducts.map((product) => (
          <TableRow key={product._id.toString()}>
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
                onClick={() => handleDelete(product._id.toString())}
              >
                폐기하기
              </ButtonComponent>
              {/* handleDelete 데이터 가져오기*/}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
