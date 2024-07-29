import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import TModal from "./Modal.type";
import InputComponent from "../Input";
import ButtonComponent from "../CustomButton";

const OrderModal: React.FC<TModal> = ({ onClose, title, content }) => {
  // 수량 상태를 관리
  const [quantity, setQuantity] = useState<number>(0);

  // 수량 입력 필드의 값이 변경될 때 호출되는 함수
  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose(); // 모달 닫기
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-slate-100">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogHeader>
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
          <ButtonComponent variant={"outline"} type="submit">
            주문하기
          </ButtonComponent>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
