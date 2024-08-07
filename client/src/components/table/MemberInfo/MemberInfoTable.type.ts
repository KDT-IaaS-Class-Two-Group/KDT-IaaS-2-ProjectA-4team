// ! member 인터페이스 중복됨 모듈화 필요
interface MemberData {
  id: string;
  member: string;
  email: string;
  role: string;
}

type TMemberInfoTable = {
  caption?: string;
  head: Array<string>;
  data: Array<MemberData>;
};

export default TMemberInfoTable;
