import { useState, useEffect } from 'react';

export interface ProductDTO {
  productID: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  restockDate?: Date;
  expirationDate: Date;
}

export const TestExpirationDateHook = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const mockProducts: ProductDTO[] = [
    {
      productID: 1,
      productName: '징징이',
      unitPrice: 25.0,
      quantity: 100,
      restockDate: new Date('2024-08-01'),
      expirationDate: new Date('2024-12-31')
    },
    {
      productID: 2,
      productName: '퐁퐁부인',
      unitPrice: 15.5,
      quantity: 200,
      restockDate: new Date('2024-07-15'),
      expirationDate: new Date('2024-11-30')
    },
    {
      productID: 3,
      productName: '진주',
      unitPrice: 45.0,
      quantity: 50,
      expirationDate: new Date('2024-10-15')
    },
    {
      productID: 4,
      productName: '조개맨',
      unitPrice: 45.0,
      quantity: 50,
      expirationDate: new Date('2024-09-15')
    },
    {
      productID: 5,
      productName: '핑핑이',
      unitPrice: 45.0,
      quantity: 50,
      expirationDate: new Date('2024-10-15')
    },
    {
      productID: 6,
      productName: '해파리',
      unitPrice: 55.0,
      quantity: 60,
      expirationDate: new Date('2024-01-12')
    },
    {
      productID: 7,
      productName: '스펀지밥',
      unitPrice: 55.0,
      quantity: 50,
      expirationDate: new Date('2024-01-15')
    },
    {
      productID: 8,
      productName: '뚱이',
      unitPrice: 55.0,
      quantity: 40,
      expirationDate: new Date('2024-12-15')
    },
    {
      productID: 9,
      productName: '집게사장 발',
      unitPrice: 42.0,
      quantity: 54,
      expirationDate: new Date('2024-05-15')
    },
  ];
  
  const fetchData = async () => { // 데이터 가져온 것 훅으로 실행 시킬 코드역할과 업데이트할때 다시 실행될 코드
    setLoading(true);
    try {
      // const response = await fetch('http://localhost:3001/products'); //endpoint - products
      // if (!response.ok) {
      //   throw new Error('네트워크 응답이 올바르지 않습니다.');
      // }
      // const result = await response.json();
      const result = mockProducts;
      setData(result); // 가져온 데이터 
    } catch (err) {
      setError('데이터를 가져오는 데 실패했습니다.'); // 에러
    } finally {
      setLoading(false);//로딩 메시지 제거
    }
  };

  useEffect(() => { //마운트 될 때 사용된다. 
    fetchData();
  }, []);

  const deleteProduct = async (productID: number) => {
    try {
      // await fetch(`http://localhost:3001/products/${productID}`, {     //엔드 포인트 products/${productID}` - 받는 부분은 어떻게 설정하지 변경해야하나?
      //   method: 'DELETE'                                               // 이거 때문에 문제가 없는 것 처럼 이야기 하는데 맞는지 모르겠음
      // });
      // fetchData(); // 삭제 후 데이터 갱신 훅 
      setData(prevData => prevData.filter(product => product.productID !== productID));//현재와 다른 데이터를 가져왔을 때 업데이트 역할 
    } catch (err) {
      setError('데이터를 삭제하는 데 실패했습니다.');
    }
  };

  return { data, loading, error, deleteProduct };
};

