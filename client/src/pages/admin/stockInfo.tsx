// * 재고 조회
import NavListBox from "src/components/admin/navListBox";
import { ProductTable } from "src/components/table/ProductTable";
import LoginInfoComponent from "src/components/LoginInfo";

const StockInfo = () => {
  return (
    <>
      <div className="grid w-screen h-screen gap-4 p-3 grid-cols-custom-30-70">
        <NavListBox />
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-start w-auto h-16 p-3 border border-black border-solid">
            <LoginInfoComponent email=""></LoginInfoComponent>
          </div>
          {/* 각 페이지에 맞는 테이블 배치 */}
          <ProductTable></ProductTable>
        </div>
      </div>
    </>
  );
};
export default StockInfo;
