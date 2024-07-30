import AdminNav from "src/components/admin/adminNav";
import MemberInfoTable from "src/components/table/MemberInfoTable";

export default () => {
  return (
    <>
      <div className="flex">
        <AdminNav></AdminNav>
        <MemberInfoTable
          buttonValue="정보 변경"
          head={["이름", "이메일", "정보"]}
          data={[
            { 회원: "이종수", 이메일: "qwewq@qwewqe123" },
            { 회원: "이종수", 이메일: "qwewq@qwewqe123" },
          ]}
        ></MemberInfoTable>
      </div>
    </>
  );
};
