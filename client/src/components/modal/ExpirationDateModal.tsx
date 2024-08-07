import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import ButtonComponent from '../CustomButton';
import ConfirmDeleteModalProps from 'src/interfaces/validation/ExpirationDateinterface';

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      {open && (<div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} aria-hidden="true"/>)}
      {/* 오픈되면은 작동하는 스타일  aria-hidden로 배경 무시 onClick={onClose} 배경을 누르면 닫기 실행 */}
      <DialogContent className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg z-50 w-full max-w-md h-1/5">
        <DialogTitle className="text-xl font-bold mb-4">폐기 확인</DialogTitle>
        <DialogTrigger className="mb-4">정말로 이 제품을 폐기하시겠습니까?</DialogTrigger>
        <div className="flex justify-end gap-4">
        <ButtonComponent onClick={onClose} variant="outline">취소</ButtonComponent>
        <ButtonComponent onClick={onConfirm} variant="default">확인</ButtonComponent>
        </div>
      </DialogContent>
    </Dialog>
  );
};