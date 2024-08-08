import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import TModal from "../../types/modal/Modal.type";

/**
 * @eonduck2 24.07.24
 * * 타이틀과 내용을 전달받아 띄우는 모달창
 * @param { function } onClose 상태 변화를 감지하고 모달창을 제거하는 이벤트
 * @param { string } title 모달창의 제목
 * @param { string } content 모달창의 내용
 * @returns { JSXElement }
 */
const Modal: React.FC<TModal> = ({ onClose, title, content }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
