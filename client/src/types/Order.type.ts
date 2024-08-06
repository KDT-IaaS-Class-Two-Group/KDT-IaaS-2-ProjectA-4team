interface TOrder {
  saleID: string;
  products: {
    productName: string;
    unitPrice: number;
  };
  saleData: string;
}

export default TOrder;
