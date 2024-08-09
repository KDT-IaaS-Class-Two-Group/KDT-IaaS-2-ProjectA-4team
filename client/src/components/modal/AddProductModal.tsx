import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import ButtonComponent from "src/components/CustomButton";
import InputComponent from "src/components/Input";
import { Label } from "components/ui/label";
import { ProductDTO } from "@shared/DTO/products/product.dto";

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

  // 값 들어오는거 변환
  const handleproductCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => setProductCategory(e.target.value);
  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value);
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value) || "");
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value) || "");


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
        productCategory,
        productName,
        unitPrice,
        quantity,
        restockDate,
        expirationDate: expirationDateISO,
      });
      onAddProduct(newProduct);
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };

  //모달창
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg z-50 w-full max-w-md h-1/3">
        <DialogTitle className="text-xl font-bold mb-4">제품 구매</DialogTitle>
        <div className="grid grid-cols-4 items-center gap-4 mb-4">
        <Label htmlFor="category" className="text-right border-r-black">
              분류
            </Label>
            <select
              aria-label="Select an option"
              id="category"
              value={productCategory}
              onChange={handleproductCategoryChange}
              className="col-span-3 border border-gray-300 rounded px-2 py-1 w-62%"
            >
              <option value="">선택하세요</option>
              <option value="음료">음료</option>
              <option value="사이드">사이드</option>
              <option value="패티">패티</option>
              <option value="빵">빵</option>
              <option value="소스">소스</option>
            </select>
          <Label htmlFor="productName" className="text-right border-r-black">제품</Label>
          <InputComponent
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            className="w-max"
            placeholder="제품을 입력"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4 mb-4">
          <Label htmlFor="quantity" className="text-right border-r-black">수량</Label>
          <InputComponent
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-max"
            placeholder="숫자만 입력"
            type="number"
            min="1"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4 mb-4">
          <Label htmlFor="unitPrice" className="text-right border-r-black">가격</Label>
          <InputComponent
            id="unitPrice"
            value={unitPrice}
            onChange={handlePriceChange}
            className="w-max"
            placeholder="숫자만 입력"
            type="number"
            min="1"
          />
        </div>
        <div className="flex justify-end gap-4">
          <ButtonComponent onClick={onClose} variant="outline">취소</ButtonComponent>
          <ButtonComponent onClick={handleOrder} variant="default">주문</ButtonComponent>
        </div>
      </DialogContent>
    </Dialog>
  );
};
