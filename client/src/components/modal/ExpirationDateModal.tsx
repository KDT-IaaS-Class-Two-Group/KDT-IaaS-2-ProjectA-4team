import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import ButtonComponent from "../CustomButton";
import ConfirmDeleteModalProps from "src/interfaces/validation/ExpirationDateinterface";
/**
 * @jojayeon 24.08.07
 * * 유통관리 페이지 폐기버튼 모달창
 * @param {boolean} props.open - 모달이 열려 있는지의 여부
 * @param {() => void} props.onClose - 모달을 닫는 함수
 * @param {() => void} props.onConfirm - 삭제 확인을 처리하는 함수
 * @returns JSX.Element - 폐기 모달창
 */
export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <DialogContent className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg z-50 w-full max-w-md h-1/5">
        <DialogTitle className="text-xl font-bold mb-4">폐기 확인</DialogTitle>
        <DialogTrigger className="mb-4">
          정말로 이 제품을 폐기하시겠습니까?
        </DialogTrigger>
        <div className="flex justify-end gap-4">
          <ButtonComponent onClick={onClose} variant="outline">
            취소
          </ButtonComponent>
          <ButtonComponent onClick={onConfirm} variant="default">
            확인
          </ButtonComponent>
        </div>
      </DialogContent>
    </Dialog>
  );
};
