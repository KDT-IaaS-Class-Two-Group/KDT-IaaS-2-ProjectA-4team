import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SaleDocument = Sale & Document;

@Schema()
export class ProductSale {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  productID: Types.ObjectId;

  @Prop({ required: true })
  quantity: number;
}

export const ProductSaleSchema = SchemaFactory.createForClass(ProductSale);

@Schema()
export class Sale {
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  memberID: Types.ObjectId;

  @Prop({ type: [ProductSaleSchema], required: true })
  products: ProductSale[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  saleDate: string;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
