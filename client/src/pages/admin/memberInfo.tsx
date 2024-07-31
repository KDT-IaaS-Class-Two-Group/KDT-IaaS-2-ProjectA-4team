import AdminNav from "src/components/admin/adminNav";
import MemberInfoTable from "src/components/table/MemberInfoTable";

export default () => {
  return (
    <>
      <div className="flex w-svw h-svh">
        <AdminNav />
        <MemberInfoTable
          head={["회원 번호", "이름", "이메일", "관리자 권한"]}
          data={[
            {
              id: "1000",
              회원: "이종수",
              이메일: "qwewq@qwewqe123",
              role: "0",
            },
            {
              id: "2000",
              회원: "호날두",
              이메일: "qwewq@qwewqe123",
              role: "1",
            },
          ]}
        />
      </div>
    </>
  );
};
