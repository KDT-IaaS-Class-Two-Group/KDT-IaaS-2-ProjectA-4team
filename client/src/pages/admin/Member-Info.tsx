import AdminNav from "src/components/admin/adminNav";
import NavListBox from "src/components/admin/navListBox";
import { ProductTable } from "src/components/table/ProductTable";

export default () => {
  return (
    <>
      <AdminNav></AdminNav>
      <ProductTable></ProductTable>
    </>
  );
};
