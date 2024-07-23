import mongoose from "mongoose";

export default class {
  public async isFieldUnique(modelName : string, fieldName : string, value: string):Promise<boolean>{
    const model = mongoose.model(modelName);
    const exists = await model.exists({[fieldName] : value});
    return !exists;
  }
}