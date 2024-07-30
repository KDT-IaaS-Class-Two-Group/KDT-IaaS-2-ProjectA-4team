import AdminNav from "src/components/admin/adminNav";
import TableSetter from "src/components/table/TableSetter";

export default () => {
  return (
    <>
      <AdminNav></AdminNav>
      <TableSetter
        buttonValue="테스트벨류"
        head={["ㅎㅇ"]}
        data={[{ 회원: "이종수" }]}
      ></TableSetter>
    </>
  );
};
