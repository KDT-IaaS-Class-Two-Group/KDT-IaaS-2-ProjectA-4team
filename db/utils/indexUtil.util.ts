import mongoose from "mongoose";

export default class {
  public createIndex(modelName:string, fieldName:string, options?:object):void{
    const model = mongoose.model(modelName);
    model.schema.index({[fieldName] : 1}, options);
  }
}