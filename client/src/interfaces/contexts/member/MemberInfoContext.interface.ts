export default interface MemberInfoTableContextType {
  caption: string;
  head: string[];
  data: Array<{ [key: string]: string }>;
  buttonValue: string;
  setCaption: (caption: string) => void;
  setHead: (head: string[]) => void;
  setData: (data: Array<{ [key: string]: string }>) => void;
  setButtonValue: (buttonValue: string) => void;
}
