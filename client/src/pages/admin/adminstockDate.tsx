import React from "react";

import NavListBox from "src/components/admin/navListBox";
import { ExpirationDataTable } from "src/components/table/ExpirationDataTable";


//사이드 바랑 메인 테이블 부분만 존재
//로그 빠져있음

const AdminstockDate: React.FC = () => {
  return (
    <div id="root">
      <main>
        <div className="grid w-screen h-screen gap-4 p-3 grid-cols-custom-30-70">
          <NavListBox/>
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
