export default interface Product {
  id: string;
  productName: string;
  productCategory: string;
  unitPrice: number;
  quantity: number;
  restockDate: Date;
  expirationDate: Date;
}
