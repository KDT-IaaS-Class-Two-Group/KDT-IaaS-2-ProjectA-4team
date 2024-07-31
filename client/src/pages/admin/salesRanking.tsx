import React from "react";
import AdminNav from "src/components/admin/adminNav";
import SalesRankingTable from "src/components/table/SalesRankingTable";

const SalesInquiry: React.FC = () => {
  return (
    <div className="flex flex-row w-screen">
      <AdminNav />
      <SalesRankingTable />
    </div>
  );
};

export default SalesInquiry;
