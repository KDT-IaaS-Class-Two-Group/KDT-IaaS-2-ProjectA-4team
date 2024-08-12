import { useEffect, useState } from "react";
import AdminNav from "src/components/nav/admin/adminNav";
import MemberInfoTable from "src/components/table/member/MemberInfoTable";
import IMemberInfo from "../../interfaces/member/MemberInfo.interface";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";

/**
 * @crystal23733 24.08.12
 * @returns {JSX.Element} - 회원 조회 컴포넌트
 */
const MemberInfoPage: React.FC = () => {
  const [members, setMembers] = useState<IMemberInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const EP_API = process.env.NEXT_PUBLIC_EP_API as string;
        const EP_MEMBERS = process.env.NEXT_PUBLIC_EP_MEMBERS as string;

        const res = await fetcher(
          serverUrlGenerator(EP_API, EP_MEMBERS),
          "get",
          {
            credentials: "include",
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch members");
        }

        const data: IMemberInfo[] = await res.json();
        setMembers(data);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
