export default interface MenuItemsProps {
  selectCategory: string;
  onAddToCart: (title: string, price: number) => void;
}
