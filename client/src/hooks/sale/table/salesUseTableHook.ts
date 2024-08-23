import { useState, useEffect } from "react";
import salesFetchTableData from "src/model/sale/table/salesFetchTableData";
import { failedLoadDataMessage } from "static/hooks/sale/table/salesUseTableHook.static";
import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";

/**
 * @crystal23733
 * @date 24.07.30
 *
 * `useSalesDataHook` 훅은 판매 데이터를 로드하고 상태를 관리합니다.
 * 이 훅은 판매 데이터를 비동기로 가져오고, 로딩 상태와 에러 상태를 관리합니다.
 *
 * @returns {{
 *   data: ClientSaleDTO[];      // 로드된 판매 데이터
 *   loading: boolean;           // 데이터 로딩 상태 (true: 로딩 중, false: 로딩 완료)
 *   error: string | null;       // 에러 메시지 (데이터 로드 중 오류가 발생한 경우)
 * }}
 */
export default () => {
  const [data, setData] = useState<ClientSaleDTO[]>([]); // SaleDTO를 ClientSaleDTO로 변경
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
