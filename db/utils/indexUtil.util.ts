import mongoose from "mongoose";

export default class {
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
  public async dropIndex(modelName: string, indexName: string): Promise<void> {
    const model = mongoose.model(modelName);
    try {
      await model.collection.dropIndex(indexName);
      console.log(`Index ${indexName} dropped for ${modelName}`);
    } catch (error) {
      console.error(`Error dropping index ${indexName} for ${modelName}:`, error);
    }
  };
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