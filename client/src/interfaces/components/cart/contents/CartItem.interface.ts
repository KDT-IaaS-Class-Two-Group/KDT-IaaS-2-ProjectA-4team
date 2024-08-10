export default interface CartItemComponentProps {
  menu: string;
  unitPrice: number;
  onPriceChange: (price: number) => void;
  removedItem: (data: string) => void;
}
