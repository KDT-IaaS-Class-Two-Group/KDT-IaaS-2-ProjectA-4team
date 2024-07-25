type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | null;

type ButtonSize = "default" | "sm" | "lg" | "icon" | null | undefined;

export interface IButton {
  to?: string;
  text: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}
