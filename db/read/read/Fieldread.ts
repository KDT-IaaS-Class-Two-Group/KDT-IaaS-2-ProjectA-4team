/** @jojayeon 20.08.02
 * * 필드 조회
 * * @param selectname : 필드 이름 
 */
import mongoose from "mongoose";
import productSchema from "../../products/schema/product.schema";
import IProduct from "../../products/product.interface";

const ProductModel = mongoose.model<IProduct>("Product", productSchema);

const fieldread = async (selectName: string): Promise<IProduct[]> => {
  try {
    const query = { [selectName]: { $exists: true } };
    const projection = { [selectName]: 1, _id: 0 };

    const products = await ProductModel.find(query).select(projection).exec();
    console.log("성공적으로 데이터를 조회하였습니다.");
    return products;
  } catch (err) {
    console.error("데이터 조회 중 오류가 발생했습니다:", err);
    throw err;
  }
};

export default fieldread;