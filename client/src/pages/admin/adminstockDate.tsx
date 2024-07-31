import React from "react";

import NavListBox from "src/components/admin/navListBox";
import { ExpirationDataTable } from "src/components/table/ExpirationDataTable";

const AdminstockDate: React.FC = () => {
  return (
    <div id="root">
      <main>
        <div className="grid w-screen h-screen gap-4 p-3 grid-cols-custom-30-70">
          <NavListBox/>
        </div>
        <section>
          <div id = "asdadsd" className="flex items-center justify-start w-50 h-auto p-3 border border-black border-solid">
            <ExpirationDataTable/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminstockDate;
