import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop()
  productCategory: string;

  @Prop()
  productName: string;

  @Prop()
  unitPrice: number;

  @Prop()
  quantity: number;

  @Prop()
  restockDate?: Date;

  @Prop()
  expirationDate: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
