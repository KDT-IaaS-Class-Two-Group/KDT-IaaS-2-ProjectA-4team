// pages/memberInfo.tsx

import { GetServerSideProps } from "next";
import AdminNav from "src/components/admin/adminNav";
import MemberInfoTable from "src/components/table/MemberInfoTable";
import IMemberInfo from "./memberInfo.interface";

interface Props {
  members: IMemberInfo[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch("http://localhost:3001/api/members");

  if (!res.ok) {
    return {
      props: {
        members: [],
      },
    };
  }

  const members: IMemberInfo[] = await res.json();

  return {
    props: {
      members,
    },
  };
};

const MemberInfoPage: React.FC<Props> = ({ members }) => {
  const formattedData = members.map((member) => ({
    id: member._id,
    member: member.name,
    email: member.email,
    role: member.roleID.toString(),
  }));

  return (
    <div className="flex w-svw h-svh">
      <AdminNav />
      <MemberInfoTable
        head={["Data ID", "이름", "이메일", "관리자 권한"]}
        data={formattedData}
      />
    </div>
  );
};

export default MemberInfoPage;
