import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import InputComponent from "../Input";
import ButtonComponent from "../CustomButton";
import { Label } from "components/ui/label";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import ProductOrderModalHook from "src/hooks/ProductOrderModalHook";
import IProduct from "../../../../db/products/product.interface";

interface OrderModalProps {
  isOpen: boolean;
  product: IProduct; // IProduct로 수정
  onClose: () => void;
  onSave: (product: ProductDTO) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  product,
  onClose,
  onSave,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { orderProductData, loading, error } = ProductOrderModalHook();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newProduct = new ProductDTO({
        _id: product._id,
        productCategory: product.productCategory,
        productName: product.productName,
        unitPrice: product.unitPrice,
        quantity: quantity,
        restockDate: new Date(), // 새로운 restockDate
        expirationDate: new Date(
          new Date().setMonth(new Date().getMonth() + 1),
        ),
      });

      const saveProduct = await orderProductData(newProduct);
      onSave(saveProduct);
      onClose();
    } catch (err) {
      console.error("주문 실패:", err);
    }
  };

  const OrderModalHeader: React.FC<{ product: IProduct | null }> = ({
    product,
  }) => (
    <DialogHeader>
      <DialogTitle>발주하기</DialogTitle>
      <DialogDescription>
        {product ? `제품명: ${product.productName}` : "선택된 제품이 없습니다."}
      </DialogDescription>
    </DialogHeader>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-100">
        <OrderModalHeader product={product} />
        <form onSubmit={handleSubmit}>
          <Label htmlFor="quantity">
            수량:
            <InputComponent
              type="number"
              value={quantity === 0 ? "" : quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              placeholder="주문수량"
              className="mb-3"
            />
          </Label>
          <div className="flex flex-row items-center justify-center gap-10">
            <ButtonComponent
              variant="outline"
              className="bg-red-200"
              type="submit"
            >
              주문하기
            </ButtonComponent>
            <ButtonComponent variant="outline" onClick={onClose}>
              닫기
            </ButtonComponent>
          </div>
          {loading && <p>주문 중...</p>}
          {error && <p>Error: {error}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;