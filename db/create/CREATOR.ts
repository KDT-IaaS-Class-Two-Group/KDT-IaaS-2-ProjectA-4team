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

  public abstract insertManyData(
    modelName: string,
    datas: object[],
    options?: InsertManyOptions
  ): Promise<void>;
}

class implementedCreator extends AbstractedCreator {
  constructor(uri: string) {
    super();
    mongoose
      .connect(uri)
      .then(() => console.log("Mongo DB 서버 연결 성공"))
      .catch((err: Error) => console.error("Mongo DB 서버 연결 실패", err));
  }

  public createSchema(field: string, constraints: object): Schema {
    return new Schema({
      [field]: constraints,
    });
  }

  public createManySchema<T>(
    definitions: SchemaDefinition<T>
  ): Schema<T & Document> {
    return new Schema<T & Document>(definitions);
  }

  public createModel<T extends Document>(
    model: string,
    schema: Schema
  ): Model<T> {
    return mongoose.model<T>(model, schema);
  }

  public async insertData<T extends Document>(
    model: Model<T>,
    data: object
  ): Promise<void> {
    // const model = mongoose.model(modelName);
    const doc = new model(data);
    try {
      await doc.save();
      console.log("Document inserted successfully");
    } catch (err) {
      console.error("Error inserting document:", err);
    }
  }

  public async insertManyData(
    modelName: string,
    datas: object[],
    options?: InsertManyOptions
  ): Promise<void> {
    const model = mongoose.model(modelName);
    try {
      await model.insertMany(datas, options || {});
      console.log("Documents inserted successfully");
    } catch (err) {
      console.error("Error inserting documents:", err);
    }
  }
}

export default class Creator extends implementedCreator {
  constructor(uri: string) {
    super(uri);
  }
}
