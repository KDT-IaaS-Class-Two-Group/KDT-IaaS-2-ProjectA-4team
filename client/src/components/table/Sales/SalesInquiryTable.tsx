import React from "react";
import salesUseTableHook from "src/hooks/sale/table/salesUseTableHook";
import DynamicTable from "../DynamicTable";
import filterData from "src/utils/filterData";
import useSearch from "src/hooks/useSearchHook";
import SearchForm from "src/components/form/search/SearchForm";
import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";

interface AggregatedData {
  [key: string]: {
    totalQuantity: number;
    totalPrice: number;
    unitPrice: number;
  };
}

/**
 * `SalesInquiryTable`
 *
 * 이 컴포넌트는 판매 데이터를 집계하여 표 형식으로 표시합니다. 판매 데이터는 `ClientSaleDTO` 배열로 제공되며,
 * 각 제품의 총 수량, 총 가격, 단가를 집계하여 표시합니다. 사용자는 검색 기능을 통해 데이터를 필터링할 수 있습니다.
 *
 * @component
 *
 * @returns {JSX.Element} - 판매 데이터를 집계하여 필터링된 결과를 동적 테이블로 표시하는 JSX 요소를 반환합니다.
 *
 * @description
 * - **데이터 집계**: `data` 배열을 순회하며 각 제품의 총 수량과 총 가격을 집계합니다. 제품 이름을 기준으로 집계된 데이터를 구성합니다.
 * - **검색 기능**: `SearchForm`을 통해 사용자가 입력한 검색어를 기반으로 데이터를 필터링합니다.
 * - **동적 테이블 렌더링**: `DynamicTable`을 사용하여 집계된 데이터를 표 형식으로 표시합니다.
 * - **조건부 렌더링**: 데이터가 로딩 중일 경우 로딩 메시지를, 오류가 발생한 경우 오류 메시지를 표시합니다.
 *
 * @crystal23733
 * @date 24.08.02
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
  const aggregatedData = (data as ClientSaleDTO[]).reduce((acc, sale) => {
    sale.products.forEach((product) => {
      const productName = product.productID.productName;

      if (!acc[productName]) {
        acc[productName] = {
          totalQuantity: 0,
          totalPrice: 0,
          unitPrice: product.productID.unitPrice,
        };
      }

      acc[productName].totalQuantity += product.quantity;
      acc[productName].totalPrice +=
        product.productID.unitPrice * product.quantity;
    });
    return acc;
  }, {} as AggregatedData);

  const tableData = Object.keys(aggregatedData).map((productName) => ({
    productName,
    ...aggregatedData[productName],
  }));

  const filteredData = filterData(tableData, searchQuery, "productName");

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <DynamicTable data={filteredData} />
    </>
  );
};

export default SalesInquiryTable;
