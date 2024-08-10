import React from "react";
import salesUseTableHook from "src/hooks/sale/table/salesUseTableHook";
import DynamicTable from "../DynamicTable";
import filterData from "src/utils/filterData";
import useSearch from "src/hooks/useSearchHook";
import SearchForm from "src/components/form/search/SearchForm";
import { SaleDTO } from "../../../../../shared/DTO/sale/sale.dto";

/**
 * @crystal23733 24.08.02
 * * `SalesInquiryTable` 컴포넌트는 판매 데이터를 집계하여 표 형식으로 표시합니다.
 *
 * * 이 컴포넌트는 판매 데이터의 집계를 처리하고, 검색 기능을 통해 데이터를 필터링하며, 결과를 동적 테이블로 렌더링합니다.
 *
 * @component
 *
 * @returns {JSX.Element} - 판매 데이터를 집계하여 표시하는 테이블을 반환합니다.
 */
const SalesInquiryTable: React.FC = () => {
  const { data, loading, error } = salesUseTableHook();
  const [searchQuery, handleSearch] = useSearch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // 제품별 집계 처리
  const aggregatedData = (data as SaleDTO[]).reduce(
    (acc, sale) => {
      sale.products.forEach((product) => {
        const productName = product.productName;

        if (!acc[productName]) {
          acc[productName] = {
            totalQuantity: 0,
            totalPrice: 0,
            unitPrice: product.unitPrice,
          };
        }

        acc[productName].totalQuantity += product.quantity;
        acc[productName].totalPrice += product.unitPrice * product.quantity; // 각 제품의 총액 계산
      });
      return acc;
    },
    {} as Record<
      string,
      { totalQuantity: number; totalPrice: number; unitPrice: number }
    >,
  );

  const tableData = Object.keys(aggregatedData)
    .map((productName) => ({
      productName,
      ...aggregatedData[productName],
    }))
    .filter(
      (item) => filterData([item], searchQuery, "productName").length > 0,
    );

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <DynamicTable data={tableData} />
    </>
  );
};

export default SalesInquiryTable;
