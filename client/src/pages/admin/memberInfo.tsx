// pages/memberInfo.tsx

import { GetServerSideProps } from "next";
import AdminNav from "src/components/admin/adminNav";
import MemberInfoTable from "src/components/table/MemberInfoTable";
import IMemberInfo from "../../interfaces/MemberInfo.interface";
import url3001Generator from "src/modules/generator/url3001Generator";

interface Props {
  members: IMemberInfo[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const EP_API = process.env.NEXT_PUBLIC_EP_API as string;
  const EP_MEMBERS = process.env.NEXT_PUBLIC_EP_MEMBERS as string;

  const res = await fetch(url3001Generator(EP_API, EP_MEMBERS));

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
