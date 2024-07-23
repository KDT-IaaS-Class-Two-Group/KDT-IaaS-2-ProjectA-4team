import mongoose from "mongoose";

export default class {
  /**
   * @crystal23733 24.07.23
   * @param modelName 모델 이름
   * @param fieldName 필드 이름
   * @param value 찾을 값
   * @returns boolean
   * * 값 중복 확인
   */
  public async isFieldUnique(modelName : string, fieldName : string, value: string):Promise<boolean>{
    const model = mongoose.model(modelName);
    const exists = await model.exists({[fieldName] : value});
    return !exists;
  }
}