import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  productCategory: string;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  unitPrice: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  restockDate: string;

  @Prop({ required: true })
  expirationDate: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
