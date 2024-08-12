export default interface CartProps {
  items: { menu: string; unitPrice: number }[];
  removedItem: (data: string) => void;
}
