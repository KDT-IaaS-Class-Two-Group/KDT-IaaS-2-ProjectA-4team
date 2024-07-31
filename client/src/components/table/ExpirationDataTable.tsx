import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@../../components/ui/table";  // 실제 경로로 수정 필요
import ButtonComponent from "../CustomButton"; // 실제 경로로 수정 필요
import { ExpirationDateHook } from 'src/hooks/ExpirationDateHook'; // 수정된 훅 경로

export const ExpirationDataTable: React.FC = () => {
  const { data, loading, error, deleteProduct } = ExpirationDateHook(); // 구조 분해 할당 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const sortedProducts = data.sort((a, b) => {
    return new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();
  });

  const handleDelete = (productID: number) => {
    deleteProduct(productID.toString()); 
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>재고명</TableHead>
          <TableHead>수량</TableHead>
          <TableHead>유통기한</TableHead>
          <TableHead className="text-right">폐기</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedProducts.map((product) => (
          <TableRow key={product.productID}>
            <TableCell>{product.productName}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{new Date(product.expirationDate).toDateString()}</TableCell>
            <TableCell className="text-right">
              <ButtonComponent variant="default" type="button" onClick={() => handleDelete(product.productID)}>폐기하기</ButtonComponent>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
