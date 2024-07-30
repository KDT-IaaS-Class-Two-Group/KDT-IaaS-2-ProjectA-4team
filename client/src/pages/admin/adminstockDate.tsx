import React from "react";

import NavListBox from "src/components/admin/navListBox";
import Logo from "src/components/logo";
import { StockTable } from "src/components/table/stockdataTable";

const AdminstockDate: React.FC = () => {
  return (
    <div id="root">
      <main>
        <div className="grid w-screen h-screen gap-4 p-3 grid-cols-custom-30-70">
          <NavListBox/>
        </div>
        <section>
          <div>
            <Logo/>
          </div>
          <div id = "asdadsd" className="flex items-center justify-start w-auto h-16 p-3 border border-black border-solid">
            <StockTable/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminstockDate;
