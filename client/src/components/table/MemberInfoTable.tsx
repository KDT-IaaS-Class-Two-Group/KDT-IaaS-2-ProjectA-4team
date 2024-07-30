import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@../../components/ui/table";
import { useMemo } from "react";
import TMemberInfoTable from "./MemberInfoTable.type";
import { CheckCircle } from "lucide-react";
import Modal from "../modal/Modal";

/**
 * @eonduck2 24.07.30
 * * 회원 관리 테이블
 * @param { string } caption 테이블 캡션
 * @param { string[] } head 테이블 헤더
 * @param { object[] } data 테이블 데이터
 */
const MemberInfoTable: React.FC<TMemberInfoTable> = (props) => {
  const { caption, head, data } = props;

  const headers = useMemo(() => {
    return head.map((item, key) => (
      <TableHead className="font-bold text-base bg-gray-100" key={key}>
        {item}
      </TableHead>
    ));
  }, [head]);

  const rows = useMemo(() => {
    return data.map((row, rowKey) => (
      <TableRow key={rowKey}>
        {Object.entries(row).map((value, cellKey) => {
          if (value[0] === "role") {
            return null;
          }
          return <TableCell key={cellKey}>{value[1]}</TableCell>;
        })}
        <TableCell className="w-32 flex justify-center">
          <CheckCircle
            className={row.role == 1 ? "text-green-400" : "text-gray-400"}
            onClick={() => (
              <Modal
                title="ㅎㅇ"
                content="ㅎㅇ"
                onClose={() => {
                  console.log(1);
                }}
              ></Modal>
            )}
          />
        </TableCell>
      </TableRow>
    ));
  }, [data]);

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
