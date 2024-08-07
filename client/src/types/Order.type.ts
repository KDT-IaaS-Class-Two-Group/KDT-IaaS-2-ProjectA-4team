interface TOrder {
  saleID: string;
  products: {
    productName: string;
    unitPrice: number;
  };
  saleDate: string;
}

export default TOrder;
