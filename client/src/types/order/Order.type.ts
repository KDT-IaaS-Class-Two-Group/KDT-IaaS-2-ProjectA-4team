interface TOrder {
  _id: string;
  products: {
    productName: string;
    unitPrice: number;
    quantity: number;
  }[];
  saleDate: string;
  totalPrice: number; // 총 가격 추가
}

export default TOrder;
