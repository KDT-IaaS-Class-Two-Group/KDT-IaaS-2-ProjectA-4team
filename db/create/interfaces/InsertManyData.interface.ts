import { Model } from "mongoose";

export default interface IInsertManyData {
  insertManyData<T extends Document>(
    model: Model<T>,
    datas: object[],
    options?: object
  ): Promise<void>;
}
