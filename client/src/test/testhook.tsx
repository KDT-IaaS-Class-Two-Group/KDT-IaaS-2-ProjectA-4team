import { useState, useEffect } from "react";

export interface ProductDTO {
  _id: string; // 변경: Object에서 string으로
  productCategory: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  restockDate?: Date;
  expirationDate: Date;
}

export const TestHook = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const mockProducts: ProductDTO[] = [
    {
      _id: "11111111",
      productCategory: "패티",
      productName: "징징이",
      unitPrice: 25.0,
      quantity: 100,
      restockDate: new Date("2024-08-01"),
      expirationDate: new Date("2024-12-31"),
    },
    {
      _id: "2222222222",
      productCategory: "패티",
      productName: "퐁퐁부인",
      unitPrice: 15.5,
      quantity: 200,
      restockDate: new Date("2024-07-15"),
      expirationDate: new Date("2024-11-30"),
    },
    {
      _id: "333333333333",
      productCategory: "패티",
      productName: "진주",
      unitPrice: 45.0,
      quantity: 50,
      expirationDate: new Date("2024-10-15"),
    },
    {
      _id: "4444444444",
      productCategory: "패티",
      productName: "조개맨",
      unitPrice: 45.0,
      quantity: 50,
      expirationDate: new Date("2024-09-15"),
    },
    {
      _id: "55555555",
      productCategory: "패티",
      productName: "핑핑이",
      unitPrice: 45.0,
      quantity: 50,
      expirationDate: new Date("2024-10-15"),
    },
    {
      _id: "6666666666",
      productCategory: "패티",
      productName: "해파리",
      unitPrice: 55.0,
      quantity: 60,
      expirationDate: new Date("2024-01-12"),
    },
    {
      _id: "7777777777777",
      productCategory: "패티",
      productName: "스펀지밥",
      unitPrice: 55.0,
      quantity: 50,
      expirationDate: new Date("2024-01-15"),
    },
    {
      _id: "8888888888",
      productCategory: "패티",
      productName: "뚱이",
      unitPrice: 55.0,
      quantity: 40,
      expirationDate: new Date("2024-12-15"),
    },
    {
      _id: "9999999",
      productCategory: "패티",
      productName: "집게사장 발",
      unitPrice: 42.0,
      quantity: 54,
      expirationDate: new Date("2024-05-15"),
    },
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      // const response = await fetch('http://localhost:3001/products'); // 실제 API 호출
      // if (!response.ok) {
      //   throw new Error('네트워크 응답이 올바르지 않습니다.');
      // }
      // const result = await response.json();
      const result = mockProducts;
      setData(result);
    } catch (err) {
      setError("데이터를 가져오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (_id: string) => {
    try {
      // await fetch(`http://localhost:3001/products/${_id}`, {     // 실제 API 호출
      //   method: 'DELETE',
      // });
      // fetchData(); // 삭제 후 데이터 갱신
      setData((prevData) => prevData.filter((product) => product._id !== _id));
    } catch (err) {
      setError("데이터를 삭제하는 데 실패했습니다.");
    }
  };

  return { data, loading, error, deleteProduct };
};
