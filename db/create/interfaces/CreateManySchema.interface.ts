import { Schema, SchemaDefinition, SchemaOptions } from "mongoose";

export default interface ICreateManySchema {
  createManySchema<T extends Document>(
    definitions: SchemaDefinition<T>
  ): Schema<T>;
}
