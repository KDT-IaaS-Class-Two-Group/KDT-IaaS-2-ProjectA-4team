import React from "react";
import AdminNav from "src/components/nav/admin/adminNav";
import { ExpirationDataTable } from "src/components/table/expiration/ExpirationDataTable";
import Logo from "src/components/logo/logo";
import TitleComponent from "src/components/title/titleComponent";
/**
 * @jojayeon 24.08.05
 * @returns 유통관리 페이지
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
            <TitleComponent className="font-jamsil" titletext="유통기한 관리" />
          </div>
          <ExpirationDataTable />
        </div>
      </div>
    </>
  );
};

export default AdminstockDate;
