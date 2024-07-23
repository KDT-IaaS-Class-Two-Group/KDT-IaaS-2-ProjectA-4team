import mongoose from "mongoose";

export default class {
  /**
   * @crystal23733 24.07.23
   * @param modelName 모델이름
   * @param fieldName 
   * @param options 인덱스 내용
   * * 인덱스 생성
   */
  public async createIndex(modelName:string, fieldName:string, options?:object):Promise<void>{
    const model = mongoose.model(modelName);
    try{
      model.schema.index({[fieldName] : 1}, options);
      await model.syncIndexes();
      console.log(`${fieldName}의 인덱스를 생성하였습니다.`);
    } catch(error) {
      console.error(`${fieldName}의 인덱스를 삭제하였습니다.`);
    }
  };
  /**
   * @crystal23733 24.07.23
   * @param modelName 모델 이름
   * @param indexName 인덱스 이름
   * * 인덱스 삭제
   */
  public async dropIndex(modelName: string, indexName: string): Promise<void> {
    const model = mongoose.model(modelName);
    try {
      await model.collection.dropIndex(indexName);
      console.log(`Index ${indexName} dropped for ${modelName}`);
    } catch (error) {
      console.error(`Error dropping index ${indexName} for ${modelName}:`, error);
    }
  };
  /**
   * @crystal23733 24.07.23
   * @param modelName 모델 이름
   * * 인덱스 조회
   */
  public async listIndexes(modelName: string): Promise<void> {
    const model = mongoose.model(modelName);
    try {
      const indexes = await model.collection.indexes();
      console.log(`Indexes for ${modelName}:`, indexes);
    } catch (error) {
      console.error(`Error listing indexes for ${modelName}:`, error);
    }
  };
}