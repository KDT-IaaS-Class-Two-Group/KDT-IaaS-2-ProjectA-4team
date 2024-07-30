import { useState, useEffect } from "react";
import { SaleDTO } from "../../../shared/DTO/sale/sale.dto";
import salesFetchTableData from "src/model/salesFetchTableData";

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
        setError("데이터 로드 실패");
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
