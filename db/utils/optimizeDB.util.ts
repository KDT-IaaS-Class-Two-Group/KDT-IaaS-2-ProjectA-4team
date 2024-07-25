import mongoose from "mongoose";

export default class {
  /**
   * @crystal23733 24.07.23
   * @param modelName 모델 이름
   * * 데이터를 동기화 하는 함수
   */
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