type TText = {
  text: string;
};

type TVariant = {
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
};

type TSize = {
  size: "default" | "sm" | "lg" | "icon";
};

export type TButton = TText & TVariant & TSize;
