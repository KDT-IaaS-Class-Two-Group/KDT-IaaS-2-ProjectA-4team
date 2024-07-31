import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import InputComponent from "../Input";
import ButtonComponent from "../CustomButton";
import { ProductDTO } from "@shared/DTO/products/product.dto";

interface OrderModalProps {
  isOpen: boolean;
  product: ProductDTO | null;
  quantity: number;
  setQuantity: (quantity: number) => void;
  onSave: () => void;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({
  product,
  quantity,
  setQuantity,
  onSave,
  onClose,
}) => {
  // 수량 상태를 관리
  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(); // 저장 함수 호출
    setQuantity(0);
  };

  const OrderModalHeader: React.FC<{ product: ProductDTO | null }> = ({
    product,
  }) => (
    <DialogHeader>
      <DialogTitle>주문하기</DialogTitle>
      <DialogDescription>
        {product ? `제품명: ${product.productName}` : "선택된 제품이 없습니다."}
      </DialogDescription>
    </DialogHeader>
  );

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-slate-100">
        <OrderModalHeader product={product} />
        <form onSubmit={handleSubmit}>
          <label>
            수량:
            <InputComponent
              value={quantity === 0 ? "" : quantity}
              type="number"
              onChange={handleOrderChange}
              min="0"
              placeholder="주문수량"
              className="mb-3"
            />
          </label>
          <ButtonComponent variant="outline" type="submit">
            주문하기
          </ButtonComponent>
          <ButtonComponent variant="default" onClick={onClose}>
            닫기
          </ButtonComponent>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
