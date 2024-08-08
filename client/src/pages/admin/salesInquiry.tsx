import React from "react";
import AdminNav from "src/components/nav/admin/adminNav";
import SalesInquiryTable from "src/components/table/Sales/SalesInquiryTable";
import SearchForm from "src/components/SearchForm";
import TitleComponent from "src/components/titleComponent";

const SalesInquiry: React.FC = () => {
  return (
    <>
      <div className="grid w-screen gap-4 p-3 overflow-hidden grid-cols-custom-20-80">
        <div className="ml-5">
          <AdminNav />
        </div>
        <div className="flex flex-col gap-8 mr-5">
          <div className="flex items-center justify-end w-auto h-16 p-3 border border-black border-solid">
            <TitleComponent titletext="매출 조회" />
          </div>
          {/* 각 페이지에 맞는 테이블 배치 */}
          <SalesInquiryTable />
        </div>
      </div>
    </>
  );
};

export default SalesInquiry;
