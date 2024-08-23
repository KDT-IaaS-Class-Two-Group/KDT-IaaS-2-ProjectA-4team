import React from "react";
import AdminNav from "src/components/nav/admin/adminNav";
import { ExpirationDataTable } from "src/components/table/expiration/ExpirationDataTable";
import TitleComponent from "src/components/title/titleComponent";
import { PAGE_TITLE } from "static/pages/admin/stockDate.syatic";
/**
 * @jojayeon 24.08.05
 * @returns {React.ReactElement} AdminstockDate 유통관리 페이지 
 * @description 
 * * AdminNav : 사이드바
 * * TitleComponent : 타이틀 컴포넌트 
 * * ExpirationDataTable : 제품들의 동적 테이블
 */

const AdminstockDate: React.FC = () => {
  return (
    <>
      <div className="grid w-screen gap-2 p-3 overflow-hidden grid-cols-custom-30-70">
        <div>
          <AdminNav />
        </div>
        <div className="flex flex-col gap-4 mr-5">
          <div className="items-centerw-auto h-10 py-3">
            <TitleComponent className="font-jamsil" titletext={PAGE_TITLE}/>
          </div>
          <ExpirationDataTable />
        </div>
      </div>
    </>
  );
};

export default AdminstockDate;
