import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import ButtonComponent from "src/components/CustomButton";
import InputComponent from "src/components/Input";
import { Label } from "components/ui/label";
import { ProductDTO } from "@shared/DTO/products/product.dto"; // Import the correct path

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  onAddProduct: (product: ProductDTO) => void; // Callback prop
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  open,
  onClose,
  onAddProduct,
}) => {
  const [productName, setProductName] = useState<string>("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [unitPrice, setPrice] = useState<number | "">("");

  // Input handlers
  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value);
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value) || "");
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value) || "");

  // Handle the order button click
  const handleOrder = () => {
    if (productName && quantity && unitPrice) {
      // Create a new ProductDTO instance
      const newProduct = new ProductDTO({
        _id: "", // Empty string as a placeholder
        productName,
        quantity,
        unitPrice,
        expirationDate: new Date().toISOString(), // Current date as expiration date
        productCategory: "default", // Default value or replace as needed
        restockDate: "" // Use an empty string instead of undefined or null
      });

      onAddProduct(newProduct);
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };


  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg z-50 w-full max-w-md">
        <DialogTitle className="text-xl font-bold mb-4">제품 추가</DialogTitle>
        <div className="grid grid-cols-4 items-center gap-4 mb-4">
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
