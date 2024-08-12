import React from "react";
import AdminNav from "src/components/nav/admin/adminNav";
// import InsigthData from "src/components/insigth/insigthData";
import DatePickerWithRange from "src/components/insigth/insigthData";

const InsightPage: React.FC = () => {
  return (
    <>
      <AdminNav />
      {/* <InsigthData /> */}
      <DatePickerWithRange />
    </>
  );
};

export default InsightPage;
