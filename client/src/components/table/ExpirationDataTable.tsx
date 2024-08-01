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


export const ExpirationDataTable: React.FC = () => {
  const { data, loading, error, deleteProduct } = ExpirationDateHook();  //구조 분해 할당 
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const sortedProducts = data.sort((a, b) => {
    return new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();  //오름차순 으로 정렬한 것
  });

  const handleDelete = (productID: number) => {
    deleteProduct(productID.toString()); //이건 왜지 왜 숫자인 것을 스트링으로 변경하지 
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
          <TableRow key={product.productID}>
            <TableCell>{product.productName}</TableCell>
            {/* <TableCell>{product.productingredient}</TableCell> //혹시 몰라서 요리들 재료 들어오는 거 생각해서 만들어준 것 이름은 변경해야함  */}
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{new Date(product.expirationDate).toDateString()}</TableCell>
            <TableCell className="text-right">
              <ButtonComponent variant="default" type="button" onClick={() => handleDelete(product.productID)}>폐기하기</ButtonComponent>{/* handleDelete 데이터 가져오기*/}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
