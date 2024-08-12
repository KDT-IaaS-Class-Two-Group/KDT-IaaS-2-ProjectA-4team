// * 재고 조회
import ProductTable from "src/components/table/Product/ProductTable";
import AdminNav from "src/components/nav/admin/adminNav";
import TitleComponent from "src/components/title/titleComponent";

const StockInfo = () => {
  return (
    <>
      <div className="grid w-screen gap-2 p-3 overflow-hidden grid-cols-custom-30-70">
        <div>
          <AdminNav />
        </div>
        <div className="flex flex-col gap-4 mr-5">
          <div className="items-center w-auto h-10 py-3">
            <TitleComponent titletext="재고 조회" />
          </div>
          {/* 각 페이지에 맞는 테이블 배치 */}
          <ProductTable></ProductTable>
        </div>
      </div>
    </>
  );
};
export default StockInfo;
