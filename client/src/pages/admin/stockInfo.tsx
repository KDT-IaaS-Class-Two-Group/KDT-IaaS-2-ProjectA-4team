// * 재고 조회
import ProductTable from "src/components/table/Product/ProductTable";
import AdminNav from "src/components/admin/nav/adminNav";
import TitleComponent from "src/components/titleComponent";

const StockInfo = () => {
  return (
    <>
      <div className="grid w-screen gap-4 p-3 overflow-hidden grid-cols-custom-20-80">
        <div className="ml-5">
          <AdminNav />
        </div>
        <div className="flex flex-col gap-8 mr-5">
          <div className="flex items-center justify-end w-auto h-16 p-3 border border-black border-solid">
            <TitleComponent titletext="재고조회" />
          </div>
          {/* 각 페이지에 맞는 테이블 배치 */}
          <ProductTable></ProductTable>
        </div>
      </div>
    </>
  );
};
export default StockInfo;
