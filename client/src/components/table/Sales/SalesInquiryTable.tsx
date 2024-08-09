import React from "react";
import salesUseTableHook from "src/hooks/sale/table/salesUseTableHook";
import DynamicTable from "../DynamicTable";
import filterData from "src/utils/filterData";
import useSearch from "src/hooks/useSearchHook";
import SearchForm from "src/components/SearchForm";
import { SaleDTO } from "../../../../../shared/DTO/sale/sale.dto";

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
