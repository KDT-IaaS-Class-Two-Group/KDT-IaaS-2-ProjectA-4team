import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SaleDocument = Sale & Document;

@Schema()
/**
 * @typedef ProductSale
 * @description 판매된 제품에 대한 정보를 나타냅니다.
 * @property {Types.ObjectId} productID - 제품의 ObjectId를 참조합니다.
 * @property {number} quantity - 제품의 판매 수량입니다.
 */
export class ProductSale {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  productID: Types.ObjectId;

  @Prop({ required: true })
  quantity: number;
}

export const ProductSaleSchema = SchemaFactory.createForClass(ProductSale);

@Schema()
/**
 * @typedef Sale
 * @description 판매 기록에 대한 정보를 나타냅니다.
 * @property {Types.ObjectId} memberID - 판매를 수행한 회원의 ObjectId를 참조합니다.
 * @property {ProductSale[]} products - 판매된 제품들의 배열입니다.
 * @property {number} totalPrice - 총 판매 금액입니다.
 * @property {string} saleDate - 판매 날짜를 나타냅니다.
 */
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
