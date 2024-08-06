import React from 'react';
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

/**
 * @jojayeon 24.08.05
 * @returns 유통기한 관리 테이블 
 */

export const ExpirationDataTable: React.FC = () => {
  const { data, loading, error, deleteProduct } = ExpirationDateHook();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const sortedProducts = data.sort((a, b) => {
    return new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();
  });

  const handleDelete = (_id:string) => {
    deleteProduct(_id);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead >재고명</TableHead>
          <TableHead className='pr-10%'>수량</TableHead>
          <TableHead className=''>유통기한</TableHead>
          <TableHead className="text-right pr-10" >폐기</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedProducts.map((product) => (
          <TableRow key={product._id}>
          <TableCell>{product.productCategory}</TableCell>
          <TableCell>{product.productName}</TableCell>
          <TableCell>{product.quantity}</TableCell>
          <TableCell>{new Date(product.expirationDate).toDateString()}</TableCell>
          <TableCell className="text-right">
            <ButtonComponent variant="default" type="button" onClick={() => handleDelete(product._id)}>폐기하기</ButtonComponent>
          </TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
