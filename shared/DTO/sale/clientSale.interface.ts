import { Types } from 'mongoose';

interface ClientProduct {
  _id: Types.ObjectId;
  productID: {
    _id: Types.ObjectId;
    productName: string;
    unitPrice: number;
  };
  quantity: number;
}

export interface ClientSaleDTO {
  _id: string;
  memberID: Types.ObjectId;
  products: ClientProduct[];
  saleDate: string;
  totalPrice: number;
}