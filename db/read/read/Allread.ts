/** @jojayeon 20.08.02
 * * 전체 조회
 */
import mongoose from "mongoose";
import productSchema from "../../products/schema/product.schema";
import IProduct from "../../products/product.interface";

const ProductModel = mongoose.model<IProduct>("Product", productSchema);

const allread = async (): Promise<IProduct[]> => {
  try {
    const products = await ProductModel.find({}).exec();
    return products;
  } catch (err) {
    console.error("제품 데이터를 조회하는 동안 오류:", err);
    throw err;
  }
};

export default allread;
