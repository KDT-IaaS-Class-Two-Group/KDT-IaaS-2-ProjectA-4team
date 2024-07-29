import { useState, useEffect } from "react";
import { productFetchTableData } from "src/model/productFetchTableData";
import { ProductDTO } from "../../../shared/DTO/products/product.dto";

export const ProductUseTableHook = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const tableData = await productFetchTableData();
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
