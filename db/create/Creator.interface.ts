import ICreateModel from "./interfaces/CreateModel.interface";
import ICreateSchema from "./interfaces/CreateSchema.interface";
import IInsertMany from "./interfaces/InsertManyData.interface";
import ISaveData from "./interfaces/InsertData.interface";
import ICreateManySchema from "./interfaces/CreateManySchema.interface";

export default interface ICreator
  extends ICreateSchema,
    ICreateModel,
    ISaveData,
    IInsertMany,
    ICreateManySchema {}
