import React from "react";
import salesUseTableHook from "src/hooks/salesUseTableHook";
import DynamicTable from "../DynamicTable";

/**
 * @crystal23733 24.07.29
 * @returns 매출조회 컴포넌트
 */
const SalesInquiryTable: React.FC = () => {
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

  // 집계된 데이터로 변환
  const transformedData = Object.entries(aggregatedData).map(([productName, { totalQuantity, totalPrice }]) => ({
    productName,
    totalQuantity,
    totalPrice
  }));

  return (
    <DynamicTable
      data={transformedData}
    />
  );
};

export default SalesInquiryTable;