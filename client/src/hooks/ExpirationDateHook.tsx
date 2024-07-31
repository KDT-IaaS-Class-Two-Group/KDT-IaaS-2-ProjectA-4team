import { useState, useEffect } from 'react';
import { ProductDTO } from "../../../shared/DTO/products/product.dto";

export const ExpirationDateHook = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/products');
      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다.');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError('데이터를 가져오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (productID: string) => {
    try {
      await fetch(`http://localhost:3001/products/${productID}`, {
        method: 'DELETE'
      });
      fetchData(); // 삭제 후 데이터 갱신
    } catch (err) {
      setError('데이터를 삭제하는 데 실패했습니다.');
    }
  };

  return { data, loading, error, deleteProduct };
};
