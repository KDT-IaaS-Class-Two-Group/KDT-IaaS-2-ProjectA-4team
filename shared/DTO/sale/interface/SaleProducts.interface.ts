import IProductID from "../../products/interface/ProductID.interface";
import IProductName from "../../products/interface/ProductName.interface";
import IQuantity from "../../products/interface/Quantity.interface";
import IUnitPrice from "../../products/interface/UnitPrice.interface";
import ITotalPrice from "./TotalPrice.interface";

export default interface ISaleProducts extends IProductID, IProductName, IUnitPrice, IQuantity, ITotalPrice{

}