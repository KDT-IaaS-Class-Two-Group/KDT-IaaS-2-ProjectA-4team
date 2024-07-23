import mongoose from "mongoose";

export default class {
  public async optimize(modelName:string):Promise<void> {
    const model = mongoose.model(modelName);
    try{
      await model.syncIndexes();
      console.log(`${modelName}이 최적화되었습니다.`);
    } catch(error) {
      console.error('에러메세지 : ', error);
    }
  }
}