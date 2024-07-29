import OrderModal from "src/components/modal/OrderModal";
import { OrderButton } from "./OrderButton";
import { useState } from "react";

export const OrderComponent = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenMadal = () => {
    setModalOpen(true);
  };

  const handleCloseMadal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <OrderButton onClick={handleOpenMadal}></OrderButton>
      {isModalOpen && (
        <OrderModal
          onClose={handleCloseMadal}
          // onOrderChange={}
          title="주문창"
          content="재고이름"
        ></OrderModal>
      )}
    </>
  );
};
