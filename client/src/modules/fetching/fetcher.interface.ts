export type TFetcher = "get" | "post" | "put" | "delete";

export type TRequestData = {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | TRequestData
    | TRequestData[];
};
