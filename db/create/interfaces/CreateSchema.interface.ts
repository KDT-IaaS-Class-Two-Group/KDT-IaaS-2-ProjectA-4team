export default interface ICreateSchema {
  createSchema(field: string, constraints: object): object;
}
