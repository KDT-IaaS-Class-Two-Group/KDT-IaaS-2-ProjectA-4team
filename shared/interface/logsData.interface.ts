export interface ITop10User {
  name: string[];
}
export interface IProductLog {
  productCategory: string;
  productName: string;
}

export interface IMostOrdered {
  name: string;
}

export interface IDiscardedMenu {
  name: string;
}

export interface NewMenu {
  name: string;
}

interface ILogsData {
  top10Users: ITop10User;
  averageUserTime: number | null;
  topSellingProduct: IProductLog[] | null;
  leastSellingProduct: IProductLog[] | null;
  mostOrdered: IMostOrdered | null;
  discardedMenu: IDiscardedMenu;
  newMenu: NewMenu[];
}

export default ILogsData;
