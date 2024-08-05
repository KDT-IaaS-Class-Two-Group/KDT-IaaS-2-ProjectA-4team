import React from "react";

import NavListBox from "src/components/admin/navListBox";
import { ExpirationDataTable } from "src/components/table/ExpirationDataTable";
import Logo from "src/components/logo";

/**
 * @jojayeon 24.08.05
 * @returns 유통관리 페이지
 */

const AdminstockDate: React.FC = () => {
  return (
    <div id="root">
      <main>
        <div className="grid w-screen h-screen gap-4 p-3 grid-cols-custom-30-70">
          <NavListBox/>
        </div>
        <div>
        <Logo 
          width={200} 
          height={200} 
          alt="Custom Logo"
          className="rounded-lg shadow-lg"
        />
        </div>
        <section>
          <div className="flex items-center justify-start w-50 h-auto p-3 border border-black border-solid">
            <ExpirationDataTable/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminstockDate;
