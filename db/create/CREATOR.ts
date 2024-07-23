import mongoose, {
  InsertManyOptions,
  Model,
  Schema,
  SchemaDefinition,
  SchemaOptions,
} from "mongoose";
import ICreator from "./Creator.interface";

abstract class AbstractedCreator implements ICreator {
  public abstract createSchema(field: string, constraints: object): object;

  public abstract createManySchema<T extends Document>(
    definitions: SchemaDefinition<T>
  ): Schema<T>;

  public abstract createModel(model: string, Schema: object): object;

  public abstract insertData<T extends Document>(
    model: Model<T>,
    data: object
  ): Promise<void>;

  public abstract insertManyData<T extends Document>(
    model: Model<T>,
    datas: object[],
    options?: InsertManyOptions
  ): Promise<void>;
}

class implementedCreator extends AbstractedCreator {
  /**
   * @eonduck2 24.07.23
   * * 생성자 함수를 통해서 특정 DB 포트와 연결
   * @param { string } uri 연결시킬 MongoDB 포트
   */
  constructor(uri: string) {
    super();
    mongoose
      .connect(uri)
      .then(() => console.log("Mongo DB 서버 연결 성공"))
      .catch((err: Error) => console.error("Mongo DB 서버 연결 실패", err));
  }

  /**
   * @eonduck2 24.07.23
   * * 단일 필드 스키마 생성
   * @param { string } field 필드(컬럼) 이름
   * @param { object } constraints 필드의 제약 조건들
   * @returns { Schema }
   */
  public createSchema(field: string, constraints: object): Schema {
    return new Schema({
      [field]: constraints,
    });
  }

  /**
   * @eonduck2 24.07.23
   * * 다중 필드 스키마 생성
   * @param { object } definitions 객체 형태로 정의된 필드와 제약 사항
   * @returns { Schema }
   */
  public createManySchema<T>(
    definitions: SchemaDefinition<T>
  ): Schema<T & Document> {
    return new Schema<T & Document>(definitions);
  }

  /**
   * @eonduck2 24.07.23
   * * 모델 생성
   * @param { Model } model 스키마가 주입될 모델
   * @param { Schema } schema 모델에 주입시킬 스키마
   * @returns { Model }
   */
  public createModel<T extends Document>(
    model: string,
    schema: Schema
  ): Model<T> {
    return mongoose.model<T>(model, schema);
  }

  /**
   * @eonduck2 24.07.23
   * * 특정 데이터(단일) 삽입
   * @param { Model } model 데이터 삽입 대상이 될 모델
   * @param { object } data 저장할 데이터
   * @returns { Promise<void> }
   */
  public async insertData<T extends Document>(
    model: Model<T>,
    data: object
  ): Promise<void> {
    const doc = new model(data);
    try {
      await doc.save();
      console.log("데이터 저장 성공");
    } catch (err) {
      throw new Error(`데이터 저장 실패: ${err}`);
    }
  }

  /**
   * @eonduck2 24.07.23
   * * 특정 데이터(다중) 삽입
   * @param { Model } model 데이터 삽입 대상이 될 모델
   * @param { object[] } datas 저장할 데이터
   * @returns { Promise<void> }
   */
  public async insertManyData<T extends Document>(
    model: Model<T>,
    datas: object[],
    options?: InsertManyOptions
  ): Promise<void> {
    try {
      await model.insertMany(datas, options || {});
      console.log("다중 데이터 저장 성공");
    } catch (err) {
      throw new Error(`다중 데이터 저장 실패: ${err}`);
    }
  }
}

export default class Creator extends implementedCreator {
  constructor(uri: string) {
    super(uri);
  }
}
