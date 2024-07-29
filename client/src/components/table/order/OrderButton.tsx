import ButtonComponent from "src/components/CustomButton";

interface OrderButtonProps {
  onClick: () => void;
}

export const OrderButton: React.FC<OrderButtonProps> = ({ onClick }) => {
  return (
    <ButtonComponent
      onClick={onClick}
      variant="outline"
      className="w-16 text-white text-m rounded-xl bg-rose-200"
      type="button"
    >
      주문하기
    </ButtonComponent>
  );
};
