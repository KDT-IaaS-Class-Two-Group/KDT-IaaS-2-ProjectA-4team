/** @jojayeon 20.08.02
 * * 부분 조회
 * * @param menu : 필드 이름
 * * @param select : 필드 안에 검색어
 */

import mongoose from "mongoose";
import productSchema from "../../products/schema/product.schema";
import IProduct from "../../products/product.interface";

const ProductModel = mongoose.model<IProduct>("Product", productSchema);

const oneread = async (menu:string , selectname:string): Promise<string | undefined> => {
  try {
    const menuselect = { [menu]: selectname };
    const user = await ProductModel.findOne(menuselect).select(menu).exec();
    if (user) {
      return user[menu as keyof IProduct] as unknown as string;
    } else {
      console.log("데이터 못 찾음");
      return undefined;
    }
  } catch (err) {
    console.error(err);
    throw err; 
  }
};
export default oneread;


