import { useEffect, useState } from "react";
import AdminNav from "src/components/nav/admin/adminNav";
import MemberInfoTable from "src/components/table/member/MemberInfoTable";
import IMemberInfo from "../../interfaces/member/MemberInfo.interface";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import TitleComponent from "src/components/title/titleComponent";
import { failedLoadDataMessage } from "static/hooks/sale/table/salesUseTableHook.static";
import { memberInfoHeadDatas } from "static/pages/admin/memberInfo.static";

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

        const data: IMemberInfo[] = await res.json();
        setMembers(data);
      } catch (err) {
<<<<<<< HEAD
        setError(failedLoadDataMessage);
=======
        setError("Failed to load data");
<<<<<<< HEAD
>>>>>>> b3247e7 (:fire:memberInfo.tsx console삭제)
=======
>>>>>>> a4c6369 (:fire:memberInfo.tsx console삭제)
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
    <div className="grid w-screen gap-2 p-3 overflow-hidden grid-cols-custom-30-70">
      <div>
        <AdminNav />
      </div>
      <div className="flex flex-col gap-4 mr-5">
        <div className="items-center w-auto h-10 py-3">
          <TitleComponent className="font-jamsil" titletext="회원 조회" />
        </div>
        <MemberInfoTable head={memberInfoHeadDatas} data={formattedData} />
      </div>
    </div>
  );
};

export default MemberInfoPage;
