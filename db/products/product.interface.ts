import IExpirationDate from "../../shared/DTO/products/interface/ExpirationDate.interface";
import IProductID from "../../shared/DTO/products/interface/ProductID.interface";
import IProductName from "../../shared/DTO/products/interface/ProductName.interface";
import IQuantity from "../../shared/DTO/products/interface/Quantity.interface";
import IRestockDate from "../../shared/DTO/products/interface/RestockData.interface";
import IUnitPrice from "../../shared/DTO/products/interface/UnitPrice.interface";

/**
 * @crystal23733 24.07.22
 * * product interface
 */

export default interface IProduct extends IProductID, IProductName, IUnitPrice, IQuantity, IRestockDate, IExpirationDate{

}