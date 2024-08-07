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
import TMemberInfoTable from "./MemberInfoTable.type";
import { CheckCircle } from "lucide-react";
import url3001Generator from "src/modules/generator/url3001Generator";

interface Member {
  id: string;
  member: string;
  email: string;
  role: string;
}

const MemberInfoTable: React.FC<TMemberInfoTable> = (props) => {
  const { caption, head, data } = props;

  // 상태로 데이터 관리
  const [members, setMembers] = useState<Member[]>(data as Member[]);

  const handleRoleToggle = async (id: string, currentRole: number) => {
    const newRole = currentRole === 0 ? 1 : 0;

    try {
      const EP_API = process.env.NEXT_PUBLIC_EP_API as string;
      const EP_members = process.env.NEXT_PUBLIC_EP_MEMBERS as string;
      const url = url3001Generator(EP_API, EP_members, id);
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roleID: newRole }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      // 서버에서 업데이트된 데이터를 가져와서 상태를 업데이트
      setMembers(
        members.map((member) =>
          member.id === id ? { ...member, role: newRole.toString() } : member,
        ),
      );

      console.log("Role updated successfully");
    } catch (error) {
      console.error("Error updating role:", error);
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
