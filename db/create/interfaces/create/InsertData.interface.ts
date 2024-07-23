import { Model } from "mongoose";

export default interface IInsertData {
  insertData<T extends Document>(model: Model<T>, data: object): Promise<void>;
}
