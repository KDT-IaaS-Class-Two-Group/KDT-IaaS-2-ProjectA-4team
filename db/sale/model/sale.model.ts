import mongoose from "mongoose";
import saleSchema from "../schema/sale.schema";
import ISale from "../Sale.interface";

/**
 * @crystal23733 24.07.22
 * * sale model 정의
 */
const Sale = mongoose.model<ISale>('Sale', saleSchema);

export default Sale;