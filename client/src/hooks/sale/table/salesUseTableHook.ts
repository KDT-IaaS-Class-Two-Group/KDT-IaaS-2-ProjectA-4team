import { useState, useEffect } from "react";
import { SaleDTO } from "../../../../../shared/DTO/sale/sale.dto";
import salesFetchTableData from "src/model/sale/table/salesFetchTableData";
import { failedLoadDataMessage } from "static/hooks/sale/table/salesUseTableHook.static";

/**
 * @crystal23733 24.07.30
 * * 데이터, 초기 로딩값, 에러 설정 함수
 * @return data, loading, error
 */
export default () => {
  const [data, setData] = useState<SaleDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const tableData = await salesFetchTableData();
        setData(tableData);
      } catch (error) {
        setError(failedLoadDataMessage);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
