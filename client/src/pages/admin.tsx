import React from "react";
import AdminNav from "src/components/admin/adminNav";
import NavListBox from "src/components/admin/navListBox";

const Admin: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <AdminNav />
      <NavListBox />
    </div>
  );
};

export default Admin;
