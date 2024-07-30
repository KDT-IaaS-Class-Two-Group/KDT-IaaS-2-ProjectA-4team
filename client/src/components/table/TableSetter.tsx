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
import TTableSetter from "./TableSetter.type";

/**
 * @eonduck2 24.07.30
 * * 회원 관리 테이블
 * @param { string } caption 테이블 캡션
 * @param { string[] } head 테이블 헤더
 * @param { object[] } data 테이블 데이터
 * @param { string } buttonValue 버튼 값
 */
const TableSetter: React.FC<TTableSetter> = (props) => {
  const { caption, head, data, buttonValue } = props;

  const headers = useMemo(() => {
    return head.map((item, index) => <TableHead key={index}>{item}</TableHead>);
  }, [head]);

  const rows = useMemo(() => {
    return data.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {Object.entries(row).map((value, cellIndex) => (
          <>
            <TableCell key={cellIndex}>{value[0]}</TableCell>
            <TableCell key={cellIndex}>{value[1]}</TableCell>
          </>
        ))}
        <TableCell>
          <ButtonComponent>{buttonValue}</ButtonComponent>
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

export default TableSetter;
