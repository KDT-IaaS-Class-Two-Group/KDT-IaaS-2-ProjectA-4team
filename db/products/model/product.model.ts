import mongoose from 'mongoose';
import IProduct from '../product.interface';
import productSchema from '../schema/product.schema';

// * Member 모델 생성
const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;