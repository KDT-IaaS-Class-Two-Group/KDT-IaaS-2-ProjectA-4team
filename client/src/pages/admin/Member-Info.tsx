import AdminNav from "src/components/admin/adminNav";
import TableSetter from "src/components/table/TableSetter";

export default () => {
  return (
    <>
      <AdminNav></AdminNav>
      <TableSetter
        caption="dma"
        buttonValue="테스트벨류"
        head={["ㅎㅇ", "ㅂㅇ"]}
        data={[{ 밥: "먹음" }, { 빵: "먹을까" }, { gd: "음" }]}
      ></TableSetter>
    </>
  );
};
