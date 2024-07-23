export default interface IDeleteDocumentAll {
  deleteDocumentAll(collectionName: string): Promise<void>;
}
