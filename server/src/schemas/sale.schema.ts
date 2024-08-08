import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product, ProductSchema } from './product.schema';

export type SaleDocument = Sale & Document;

@Schema()
export class Sale {
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  memberID: Types.ObjectId;

  @Prop({ type: [ProductSchema], required: true }) // Product를 내포
  products: Product[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  saleDate: string;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
