import React from "react";
import AdminNav from "src/components/nav/admin/adminNav";
import { ExpirationDataTable } from "src/components/table/expiration/ExpirationDataTable";
import Logo from "src/components/logo/logo";
import TitleComponent from "src/components/title/titleComponent";
import Modal from "src/components/modal/Modal";
/**
 * @jojayeon 24.08.05
 * @returns 유통관리 페이지
 */

const AdminstockDate: React.FC = () => {
  return (
    <>
      <div className="grid w-screen gap-4 p-3 overflow-hidden grid-cols-custom-20-80">
        <div className="ml-5">
          <AdminNav />
        </div>
        <div className="flex flex-col gap-8 mr-5">
          <div className="flex items-center justify-start w-50 h-auto p-3 border border-black border-solid">
            <Logo width={100} height={100} alt="Custom Logo" className="pr-5" />
            <TitleComponent titletext="유통기한 관리" />
          </div>
          <ExpirationDataTable />
        </div>
      </div>
    </>
  );
};

export default AdminstockDate;
