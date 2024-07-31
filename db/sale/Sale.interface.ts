import IMemberID from "../../shared/DTO/sale/interface/MemberID.interface";
import ISaleDate from "../../shared/DTO/sale/interface/SaleDate.interface";
import ISaleID from "../../shared/DTO/sale/interface/SaleID.interface";
import ISaleProducts from "../../shared/DTO/sale/interface/SaleProducts.interface";
import ITotalPrice from "../../shared/DTO/sale/interface/TotalPrice.interface";

/**
 * @crystal23733 24.07.22
 * * sale interface
 */
export default interface ISale extends IMemberID, ISaleDate, ISaleID, ITotalPrice{
  products : ISaleProducts;
}