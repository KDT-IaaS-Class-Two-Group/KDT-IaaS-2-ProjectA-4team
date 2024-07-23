import ICreateModel from "../interfaces/create/CreateModel.interface";
import ICreateSchema from "../interfaces/create/CreateSchema.interface";
import IInsertMany from "../interfaces/create/InsertManyData.interface";
import ISaveData from "../interfaces/create/InsertData.interface";

export default interface ICreator
  extends ICreateSchema,
    ICreateModel,
    ISaveData,
    IInsertMany {}
