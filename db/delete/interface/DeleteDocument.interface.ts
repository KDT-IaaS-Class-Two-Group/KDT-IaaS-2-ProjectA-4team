export default interface IDeleteDocument {
  deleteDocument(
    collectionName: string,
    field: string,
    value: string | number
  ): Promise<void>;
}
