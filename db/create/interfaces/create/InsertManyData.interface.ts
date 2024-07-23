export default interface IInsertManyData {
  insertManyData(
    modelName: string,
    datas: object[],
    options?: object
  ): Promise<void>;
}
