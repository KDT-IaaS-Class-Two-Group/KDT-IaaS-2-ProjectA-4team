import { useState, useEffect } from 'react';
import { testProductDTO } from 'src/pages/admin/testDTO';

// 더미 데이터
const dummyData: testProductDTO[] = [
  { productID: 1, productName: 'Product A', quantity: 10, expirationDate: '2024-12-31' },
  { productID: 2, productName: 'Product B', quantity: 5, expirationDate: '2024-07-31' },
  { productID: 3, productName: 'Product C', quantity: 8, expirationDate: '2025-01-15' },
  { productID: 4, productName: 'Product C', quantity: 10, expirationDate: '2025-02-13' },
  { productID: 5, productName: 'Product C', quantity: 123, expirationDate: '2025-03-14' },
  { productID: 6, productName: 'Product C', quantity: 45, expirationDate: '2025-04-15' },
  { productID: 7, productName: 'Product C', quantity: 76, expirationDate: '2025-01-16' },
  { productID: 8, productName: 'Product C', quantity: 87, expirationDate: '2025-01-17' },
  { productID: 9, productName: 'Product C', quantity: 111, expirationDate: '2025-01-18' },
];

export const TestHook = () => {
  const [data, setData] = useState<testProductDTO[]>(dummyData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 데이터 로딩 시뮬레이션
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 1000); // 1초 후에 데이터 로딩 완료 시뮬레이션
  }, []);

  const deleteProduct = (productID: string) => {
    setData((prevData) => prevData.filter(product => product.productID.toString() !== productID));
  };

  return { data, loading, error, deleteProduct };
};
