import { useState, useEffect } from "react";
import { ProductDTO } from "../../../shared/DTO/products/product.dto";

/**
 * @jojayeon 24.08.05
 * @returns {{
*  data : ProductDTO[] 제품정보 , 
*  loading : boolean 로딩 ,
*  error : string | null 에러 ,
*  deleteProduct: (id: string) => void 제품 정보 삭제
* }}
*/

export const ExpirationDateHook = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

const fetchData = async () => { 
  setLoading(true);
  try {
    const response = await fetch('http://localhost:3001/productsDate'); 
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

const deleteProduct = async (_id: string) => {
  try {
    await fetch(`http://localhost:3001/productsDate/${_id}`, {
      method: 'DELETE'                                               
    });
    fetchData();
  } catch (err) {
    setError('데이터를 삭제하는 데 실패했습니다.');
  }
};

  return { data, loading, error, deleteProduct };
};
