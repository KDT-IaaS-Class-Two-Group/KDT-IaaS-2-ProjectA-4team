const Products = [
    {
      productID: 112313123123123123,
      productName: 'Apple Juice',
      unitPrice: 3.50,
      quantity: 200,
      restockData: new Date('2024-02-15'),
      expirationDate: new Date('2024-12-31'),
    },
    {
      productID: 212312312312312,
      productName: '오랜지',
      unitPrice: 4.00,
      quantity: 150,
      restockData: new Date('2024-03-01'),
      expirationDate: new Date('2024-11-30'),
    },
    {
      productID: 31231231231231233,
      productName: '바나나',
      unitPrice: 5.00,
      quantity: 100,
      restockData: new Date('2024-04-10'),
      expirationDate: new Date('2025-01-15'),
    },
    {
      productID: 3123123123123123312313,
      productName: '딸기',
      unitPrice: 5.00,
      quantity: 100,
      restockData: new Date('2024-04-10'),
      expirationDate: new Date('2024-01-15'),
    },
    {
      productID: 31231231231231233123123123,
      productName: '딸기',
      unitPrice: 5.00,
      quantity: 50,
      restockData: new Date('2024-04-8'),
      expirationDate: new Date('2024-01-13'),
    },
    {
      productID: 312312312312312331231231231223,
      productName: '복숭아',
      unitPrice: 5.00,
      quantity: 100,
      restockData: new Date('2024-04-10'),
      expirationDate: new Date('2023-01-15'),
    },
  ];

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

export const StockTable = () => {
  const sortedProducts = Products.sort((a, b) => {
    return a.expirationDate.getTime() - b.expirationDate.getTime();
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>재고명</TableHead>
          <TableHead>수량</TableHead>
          <TableHead>유통기한 </TableHead>
          <TableHead className="text-right">폐기</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedProducts.map((product) => (
          <TableRow key={product.productID}>
            <TableCell>{product.productName}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{product.expirationDate.toDateString()}</TableCell>
            <TableCell className="text-right">
              <ButtonComponent id={`dispose-${product.productID}`} />폐기하기
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

//! 지금 해야하는 것 
//1. 데이터 받아오는 것 만들기 
// 2. 페기버튼 