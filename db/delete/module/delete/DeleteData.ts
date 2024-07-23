import mongoose from "mongoose";
import IDeleteData from "./DeleteData.interface";

/**
 * * Class : AbstractDeleteData
 * 작성자 : @moonhr / 2024-07-23
 * 편집자 : @moonhr / 2024-07-23
 * @class AbstractDeleteData
 * @description 데이터 삭제 메서드를 정의
 */
export abstract class DeleteData implements IDeleteData {
  private getCollectionModel(collectionName: string) {
    // 컬렉션 이름에 따라 모델을 반환
    const models: { [key: string]: mongoose.Model<any> } = {
      Member: mongoose.model("Member"),
      // 여기에 다른 모델들을 추가할 수 있습니다.
    };

    const model = models[collectionName];
    if (!model) {
      throw new Error(`Unknown collection: ${collectionName}`);
    }
    return model;
  }

  /**
   * @moonhr 24.07.23
   * * 컬렉션 이름으로 특정 조건을 만족하는 단일 문서를 삭제
   * @param collectionName 삭제가 진행될 컬렉션
   * @param field 삭제할 문서를 찾기 위한 조건
   * @param value 조건으로 사용할 필드의 값
   * @returns Promise<void> - 비동기 작업 수행
   * @throws 삭제할 문서가 없으면 오류를 발생
   */
  async deleteDocument(
    collectionName: string,
    field: string,
    value: string | number
  ): Promise<void> {
    const CollectionModel = this.getCollectionModel(collectionName);
    const result = await CollectionModel.deleteOne({
      [field]: value,
    });
    if (result.deletedCount === 0) {
      throw new Error(
        `${collectionName} 컬렉션에서 ${field}가(이) ${value}인 문서를 찾을 수 없습니다.`
      );
    }
  }

  /**
   * @moonhr 24.07.23
   * * 조건에 맞는 여러 문서를 삭제하는 메서드
   * @param collectionName - 문서를 삭제할 컬렉션의 이름
   * @param query - 삭제할 문서를 찾기 위한 쿼리 조건
   * @returns - Promise<void> - 비동기 작업을 수행하며, 작업이 완료될 때까지 기다립니다.
   * @throws - 삭제할 문서가 없으면 오류를 발생시킵니다.
   */
  async deleteDocuments(collectionName: string, query: object): Promise<void> {
    const CollectionModel = this.getCollectionModel(collectionName);
    const result = await CollectionModel.deleteMany(query);
    if (result.deletedCount === 0) {
      throw new Error(
        `No documents found in ${collectionName} with the given query.`
      );
    }
  }

  /**
   * @moonhr 24.07.23
   * * 컬렉션의 모든 문서를 삭제
   * @param collectionName 삭제할 컬렉션
   * @returns Promise<void> - 비동기 작업 수행
   * @throws 삭제할 문서가 없으면 오류를 발생
   */
  async deleteDocumentAll(collectionName: string): Promise<void> {
    const CollectionModel = this.getCollectionModel(collectionName);
    const result = await CollectionModel.deleteMany({});
    if (result.deletedCount === 0) {
      throw new Error(`${collectionName}을 찾을 수 없습니다.`);
    }
  }
}
