import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import ButtonComponent from "../../button/customized/CustomButton";
import InputComponent from "../../input/Input";
import { Label } from "components/ui/label";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import { AddProduct_static } from "static/components/modal/addmodal/AddProductModal.static";

/**
 * @jojayeon 20.083.09
 * 추가 제품 구매하는 모달창
 */
interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  onAddProduct: (product: ProductDTO) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  open,
  onClose,
  onAddProduct,
}) => {
  const [productName, setProductName] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [unitPrice, setPrice] = useState<number | "">("");
  const [error, setError] = useState<string | null>(null);

  // 값 들어오는거 변환
  const handleproductCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => setProductCategory(e.target.value);
  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProductName(e.target.value);
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(Number(e.target.value) || "");
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(Number(e.target.value) || "");

  const handleOrder = () => {
    if (productName && quantity && unitPrice) {
      //현재날짜, 유통기한 - 한달 후
      const now = new Date();
      const restockDate = now.toISOString();

      const expirationDate = new Date(now);
      expirationDate.setMonth(expirationDate.getMonth() + 1);
      const expirationDateISO = expirationDate.toISOString();

      //데이터 들어갈 부분
      const newProduct = new ProductDTO({
        _id: "",
        productCategory: productCategory,
        productName,
        unitPrice,
        quantity,
        restockDate,
        expirationDate: expirationDateISO,
      });
      onAddProduct(newProduct);
    } else {
      setError(AddProduct_static.ALL_FIELD);
    }
  };

  //모달창
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="fixed z-50 w-full max-w-md p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg inset-1/2 h-1/3">
        <DialogTitle className="mb-4 text-xl font-bold">{AddProduct_static.PURCHASE_PRODUCT}</DialogTitle>
        <div className="grid items-center grid-cols-4 gap-4 mb-4">
          <Label htmlFor="category" className="text-right border-r-black">
            {AddProduct_static.CLASSIFICATION}
          </Label>
          <select
            aria-label="Select an option"
            id="category"
            value={productCategory}
            onChange={handleproductCategoryChange}
            className="col-span-3 border border-gray-300 rounded px-2 py-1 w-62%"
          >
            <option value="">{AddProduct_static.SELECT}</option>
            <option value={AddProduct_static.BEVERAGE}>{AddProduct_static.BEVERAGE}</option>
            <option value={AddProduct_static.SIDE}>{AddProduct_static.SIDE}</option>
            <option value={AddProduct_static.PATTY}>{AddProduct_static.PATTY}</option>
            <option value={AddProduct_static.BREAD}>{AddProduct_static.BREAD}</option>
            <option value={AddProduct_static.SAUCE}>{AddProduct_static.SAUCE}</option>
          </select>
          <Label htmlFor="productName" className="text-right border-r-black">
            {AddProduct_static.PRODUCT}
          </Label>
          <InputComponent
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            className="w-max"
            placeholder={AddProduct_static.PRODUCT_INPUT}
          />
        </div>
        <div className="grid items-center grid-cols-4 gap-4 mb-4">
          <Label htmlFor="quantity" className="text-right border-r-black">
          {AddProduct_static.QUANTITY}
          </Label>
          <InputComponent
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-max"
            placeholder={AddProduct_static.ENTER_NUMBER}
            type="number"
            min="1"
          />
        </div>
        <div className="grid items-center grid-cols-4 gap-4 mb-4">
          <Label htmlFor="unitPrice" className="text-right border-r-black">
          {AddProduct_static.PRICE}
          </Label>
          <InputComponent
            id="unitPrice"
            value={unitPrice}
            onChange={handlePriceChange}
            className="w-max"
            placeholder={AddProduct_static.ENTER_NUMBER}
            type="number"
            min="1"
          />
        </div>
        <div className="flex justify-end gap-4">
          <ButtonComponent onClick={onClose} variant="outline">
          {AddProduct_static.CANCEL}
          </ButtonComponent>
          <ButtonComponent onClick={handleOrder} variant="default">
            {AddProduct_static.ORDER}
          </ButtonComponent>
        </div>
      </DialogContent>
    </Dialog>
  );
};
