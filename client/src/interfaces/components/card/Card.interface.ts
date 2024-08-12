export default interface CardComponentProps {
  title: string;
  content: number;
  onAddToCart: (title: string, price: number) => void;
}
