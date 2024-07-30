import React from "react";
import AdminNav from "src/components/admin/adminNav";
import SalesTable from "src/components/table/SalesInquiryTable";

const SalesInquiry: React.FC = () => {
  return (
    <div className="flex flex-row w-screen">
      <AdminNav />
      <SalesTable />
    </div>
  );
};

export default SalesInquiry;
