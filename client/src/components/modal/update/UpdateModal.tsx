import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";
import { Label } from "components/ui/label";
import { Textarea } from "components/ui/textarea";
import ButtonComponent from "../../button/customized/CustomButton";
import ProductUpdateHook from "src/hooks/product/update/ProductUpdateHook";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import UpdateModalProps from "src/interfaces/components/modal/update/UpdateModal.interface";

/**
 * @moonhr 24.07.31
 * 제품 수정 모달창
 * @param isOpen - 모달창이 열려 있는지 여부
 * @param product - 수정할 제품의 데이터
 * @param onClose - 모달창을 닫는 함수
 * @param onSave - 제품 수정 후 호출되는 함수
 * @returns 모달창 컴포넌트
 */
const UpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  product,
  onClose,
  onSave,
}) => {
  const [newProductName, setNewProductName] = useState(product.productName);
  const [newUnitPrice, setNewUnitPrice] = useState(product.unitPrice);
  const { updateProduct, loading, error } = ProductUpdateHook();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // ProductDTO 생성
      const updatedProductDTO = new ProductDTO({
        _id: product._id,
        productCategory: product.productCategory,
        productName: newProductName,
        unitPrice: newUnitPrice,
        quantity: product.quantity,
        restockDate: product.restockDate ?? new Date(),
        expirationDate: product.expirationDate,
      });

      const updatedProduct = await updateProduct(updatedProductDTO);
      onSave(updatedProduct);
      onClose();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" bg-slate-100">
        <DialogHeader>
          <DialogTitle>수정하기</DialogTitle>
          <DialogDescription>
            제품명과, 판매가를 수정할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-80">
            <Label htmlFor="cartegory">제품명</Label>
            <Textarea
              placeholder={product.productName}
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
              name="productName"
              id="productName"
            ></Textarea>
          </div>
          <div className="w-80">
            <Label htmlFor="cartegory">판매가</Label>
            <Textarea
              placeholder={String(product.unitPrice)}
              value={newUnitPrice.toString()}
              onChange={(e) => setNewUnitPrice(Number(e.target.value))}
              name="unitPrice"
              id="unitPrice"
            ></Textarea>
          </div>
          <ButtonComponent variant="default" type="submit" className="mt-5">
            수정하기
          </ButtonComponent>
          {loading && <p>Updating...</p>}
          {error && <p>Error: {error}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;
