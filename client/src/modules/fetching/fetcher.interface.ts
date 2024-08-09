import { Options as KyOptions } from "ky";

export type TRequestData = {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | TRequestData
    | TRequestData[];
};

export type CustomKyOptions = KyOptions & {
  roleID?: number;
};
