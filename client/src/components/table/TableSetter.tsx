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

const TableSetter: React.FC<TTableSetter> = (props) => {
  const { caption, head, data, buttonValue } = props;

  const headerCells = useMemo(() => {
    return head.map((item, index) => <TableHead key={index}>{item}</TableHead>);
  }, [head]);

  const rows = useMemo(() => {
    return data.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {Object.values(row).map((value, cellIndex) => (
          <TableCell key={cellIndex}>{value}</TableCell>
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
        <TableRow>{headerCells}</TableRow>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
};

export default TableSetter;
