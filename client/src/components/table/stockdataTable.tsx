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

import { ProductUseTableHook } from "src/hooks/ProductUseTableHook";

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
    productName: 'Orange Juice',
    unitPrice: 4.00,
    quantity: 150,
    restockData: new Date('2024-03-01'),
    expirationDate: new Date('2024-11-30'),
  },
  {
    productID: 31231231231231233,
    productName: 'Grape Juice',
    unitPrice: 5.00,
    quantity: 100,
    restockData: new Date('2024-04-10'),
    expirationDate: new Date('2025-01-15'),
  },
];

export const StockTable: React.FC = () => {
  const { data, loading, error } = ProductUseTableHook();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  
  const sortedProducts = Products.sort((a, b) => {
    if (!(a.expirationDate instanceof Date) || !(b.expirationDate instanceof Date)) {
      throw new Error('date모양으로 넣어줘야해 ');
    }
    return a.expirationDate.getTime() - b.expirationDate.getTime();
  }) //data 대신 우선 더미인 Products 
  
  return (
    <Table>
      <TableCaption>유통기한 조회</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>재고명</TableHead>
          <TableHead>유통기한 </TableHead>
          <TableHead>수량</TableHead>
          <TableHead className="text-right">페기</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableCell>
        {sortedProducts.map((product) => (
          <TableRow key={product.productID}>
            <TableCell>{product.productName}</TableCell> 
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{product.expirationDate.toDateString()}</TableCell>
            <ButtonComponent className="text-right"/>
          </TableRow>
        ))}
        </TableCell>
    </TableBody>
    </Table>
  );
};