import React from "react";
import AdminNav from "src/components/admin/adminNav";
import SalesInquiryTable from "src/components/table/Sales/SalesInquiryTable";

const SalesInquiry: React.FC = () => {
  return (
    <div className="flex flex-row w-screen">
      <AdminNav />
      <SalesInquiryTable />
    </div>
  );
};

export default SalesInquiry;
