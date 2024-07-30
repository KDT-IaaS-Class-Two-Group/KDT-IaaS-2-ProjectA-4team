import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "components/ui/table";
import React from "react";
import salesUseTableHook from "src/hooks/salesUseTableHook";

/**
 * @crystal23733 24.07.29
 * @returns 매출조회 컴포넌트
 */
const SalesTable: React.FC = () => {
  const { data, loading, error } = salesUseTableHook();

  // 데이터 로딩 중일 때
  if (loading) {
    return <div>Loading...</div>;
  }

  // 데이터 로딩 중 오류 발생 시
  if (error) {
    return <div>{error}</div>;
  }
  
  /**
   * @crystal23733 24.07.30
   * * 상품명, 매출 수량, 매출 금액 집계 함수
   */
  const aggregatedData = data.reduce(
    (acc, sale) => {
      // sale.products가 단일 객체로 가정
      const product = sale.products;

      if (!acc[product.productName]) {
        acc[product.productName] = {
          totalQuantity: 0,
          totalPrice: 0,
          unitPrice: product.unitPrice,
        };
      }

      acc[product.productName].totalQuantity += product.quantity;
      acc[product.productName].totalPrice += product.totalPrice;

      return acc;
    },
    {} as Record<
      string,
      { totalQuantity: number; totalPrice: number; unitPrice: number }
    >,
  );

  // 집계된 데이터를 배열로 변환하고 판매 수량에 따라 내림차순으로 정렬
  const sortedData = Object.keys(aggregatedData)
    .map((productName) => ({
      productName,
      ...aggregatedData[productName],
    }))
    .sort((a, b) => b.totalQuantity - a.totalQuantity);

  return (
    <div className="flex flex-col w-full h-full">
      <h1>매출 순위</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">상품명</TableHead>
            <TableHead>판매 수량</TableHead>
            <TableHead>판매 액수</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* 정렬된 데이터로 테이블의 각 행을 생성 */}
          {sortedData.map((item) => (
            <TableRow key={item.productName}>
              <TableCell className="font-medium">{item.productName}</TableCell>
              <TableCell>{item.totalQuantity}</TableCell>
              <TableCell>{item.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalesTable;