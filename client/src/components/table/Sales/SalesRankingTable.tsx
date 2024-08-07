import React from "react";
import salesUseTableHook from "src/hooks/salesUseTableHook";
import DynamicTable from "../DynamicTable";

/**
 * @crystal23733 24.07.29
 * @returns 매출순위 컴포넌트
 */
const SalesRankingTable: React.FC = () => {
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

  // DynamicTable에 전달할 데이터의 형태를 정의
  const tableData = sortedData.map((item) => ({
    productName: item.productName,
    totalQuantity: item.totalQuantity,
    totalPrice: item.totalPrice
  }));

  return (
    <div className="flex flex-col w-full h-full">
      <DynamicTable data={tableData} />
    </div>
  );
};

export default SalesRankingTable;