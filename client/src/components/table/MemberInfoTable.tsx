import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@../../components/ui/table";
import ButtonComponent from "../CustomButton";
import { useMemo } from "react";
import TMemberInfoTable from "./MemberInfoTable.type";

/**
 * @eonduck2 24.07.30
 * * 회원 관리 테이블
 * @param { string } caption 테이블 캡션
 * @param { string[] } head 테이블 헤더
 * @param { object[] } data 테이블 데이터
 * @param { string } buttonValue 버튼 값
 */
const MemberInfoTable: React.FC<TMemberInfoTable> = (props) => {
  const { caption, head, data, buttonValue } = props;

  const headers = useMemo(() => {
    return head.map((item, key) => (
      <TableHead className="font-bold text-base" key={key}>
        {item}
      </TableHead>
    ));
  }, [head]);

  const rows = useMemo(() => {
    return data.map((row, rowkey) => (
      <TableRow key={rowkey}>
        {Object.values(row).map((value, cellKey) => (
          <>
            <TableCell key={cellKey}>{value}</TableCell>
          </>
        ))}
        <TableCell>
          <ButtonComponent className="bg-blue-100">
            {buttonValue}
          </ButtonComponent>
        </TableCell>
      </TableRow>
    ));
  }, [data, buttonValue]);

  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>{headers}</TableRow>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
};

export default MemberInfoTable;
