import React, { FC } from "react";
import { UserpageHook } from "src/hooks/user/userpageHook";
import UserMenu from "src/components/menu/user/UserMenu";
import MenuItems from "src/components/menu/MenuItems";
import LoginInfoComponent from "src/components/info/login/LoginInfo";
import Cart from "src/components/cart/Cart";
import FooterLinks from "src/components/footer/footerComponent";
import ButtonComponent from "src/components/button/customized/CustomButton";
import Logo from "src/components/logo/logo";
import Modal from "src/components/modal/Modal";
import { ConfirmDeleteModal } from "src/components/modal/expiration/ExpirationDateModal";

/**
 * @yuxincxoi 24.07.25
 * * 물건을 구입할 수 있는 사용자 페이지
 * @returns { JSXElement }
 */

const UserPage: FC = () => {
  const {
    selectCategory,
    setSelectCategory,
    cartItems,
    isModalOpen,
    isPurchaseModalOpen,
    closeModal,
    closePurchaseModal,
    confirmPurchase,
    error,
    handleAddToCart,
    handleRemoveItem,
    purchase,
  } = UserpageHook();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Logo alt="logo" width={150} height={80} className="m-5" />
      <UserMenu
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <MenuItems
        selectCategory={selectCategory}
        onAddToCart={handleAddToCart}
      />
      <div className="fixed top-0 right-0 h-screen shadow-xl w-72">
        <LoginInfoComponent className="mt-6 mb-20 ml-6 w-72" />
        <Cart items={cartItems} removedItem={handleRemoveItem} />
        <ButtonComponent
          type="submit"
          className="w-60 bg-yellow-400 text-white hover:bg-white hover:text-yellow-400 hover:border-yellow-400 hover:border text-lg font-bold rounded-3xl mx-6 my-8"
          onClick={purchase}
        >
          Buy !
        </ButtonComponent>
        <FooterLinks className="mx-6 mt-20 w-72" />
      </div>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          title="장바구니에 메뉴가 이미 존재합니다 !"
          content="수량은 장바구니에서 조정할 수 있습니다."
        />
      )}
      {isPurchaseModalOpen && (
        <ConfirmDeleteModal
          open={isPurchaseModalOpen}
          onClose={closePurchaseModal}
          onConfirm={confirmPurchase}
          title="구매하시겠습니까 ?"
          content=""
        />
      )}
    </div>
  );
};

export default UserPage;
