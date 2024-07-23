import IDeleteDocument from "../../interface/DeleteDocument.interface";
import IDeleteDocumentAll from "../../interface/DeleteDocumentAll.interface";

export default interface IDeleteData
  extends IDeleteDocument,
    IDeleteDocumentAll {}
