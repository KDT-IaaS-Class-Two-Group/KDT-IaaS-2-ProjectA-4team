import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@../../components/ui/table";
import TMemberInfoTable from "../../../types/member/MemberInfoTable.type";
import { CheckCircle } from "lucide-react";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import Member from "src/interfaces/components/table/member/MemberInfoTable.interface";

/**
 * @eonduck2 24.08.02
 * * `MemberInfoTable` 컴포넌트는 회원 정보를 표 형식으로 표시하고, 각 회원의 역할을 토글할 수 있는 기능을 제공합니다.
 *
 * @component
 *
 * @param {TMemberInfoTable} props - 컴포넌트에 전달되는 속성입니다.
 * @param {string} props.caption - 테이블의 캡션입니다.
 * @param {string[]} props.head - 테이블의 헤더 항목들입니다.
 * @param {Member[]} props.data - 테이블에 표시할 회원 데이터입니다.
 *
 * @returns {JSX.Element} - 회원 정보와 역할 토글 기능을 포함하는 테이블을 반환합니다.
 */

const MemberInfoTable: React.FC<TMemberInfoTable> = (props) => {
  const { caption, head, data } = props;

  const [members, setMembers] = useState<Member[]>(data as Member[]);

  const handleRoleToggle = async (id: string, currentRole: number) => {
    const newRole = currentRole === 0 ? 1 : 0;

    try {
      const EP_API = process.env.NEXT_PUBLIC_EP_API as string;
      const EP_MEMBERS = process.env.NEXT_PUBLIC_EP_MEMBERS as string;

      await fetcher(serverUrlGenerator(EP_API, EP_MEMBERS, id), "put", {
        roleID: newRole,
      });

      setMembers(
        members.map((member) =>
          member.id === id ? { ...member, role: newRole.toString() } : member,
        ),
      );
    } catch (error) {
      throw error;
    }
  };

  const headers = useMemo(() => {
    return head.map((item, key) => (
      <TableHead className="font-bold text-base bg-gray-100" key={key}>
        {item}
      </TableHead>
    ));
  }, [head]);

  const rows = useMemo(() => {
    return members.map((row, rowKey) => (
      <TableRow key={rowKey}>
        {Object.entries(row).map(([key, value], cellKey) => {
          if (key === "role") {
            return null;
          }
          return <TableCell key={cellKey}>{value}</TableCell>;
        })}
        <TableCell className="w-32 flex justify-center">
          <CheckCircle
            className={`${row.role === "1" ? "text-green-400" : "text-gray-400"} cursor-pointer`}
            onClick={() => handleRoleToggle(row.id, Number(row.role))}
          />
        </TableCell>
      </TableRow>
    ));
  }, [members]);

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
