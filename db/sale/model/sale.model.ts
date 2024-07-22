import mongoose from "mongoose";
import ISale from "../../Sale.interface";
import saleSchema from "../schema/sale.schema";

/**
 * @crystal23733 24.07.22
 * * sale model 정의
 */
const Sale = mongoose.model<ISale>('Sale', saleSchema);

export default Sale;