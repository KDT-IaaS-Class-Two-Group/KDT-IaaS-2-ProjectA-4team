import React from "react";
import AdminNav from "src/components/nav/admin/adminNav";
import SalesInquiryTable from "src/components/table/Sales/SalesInquiryTable";
import TitleComponent from "src/components/title/titleComponent";

/**
 * @crystal23733
 * @date 24.07.29
 *
 * `SalesInquiry` 컴포넌트는 매출 조회 페이지를 렌더링합니다.
 *
 * 이 컴포넌트는 다음을 포함합니다:
 * - `AdminNav`: 관리자를 위한 네비게이션 바.
 * - `TitleComponent`: 페이지 제목을 표시합니다.
 * - `SalesInquiryTable`: 매출 데이터를 테이블 형식으로 표시합니다.
 *
 * @component
 *
 * @returns {JSX.Element} - 매출 조회 페이지를 구성하는 JSX 요소를 반환합니다.
 */
const SalesInquiry: React.FC = () => {
  return (
    <>
      <div className="grid w-screen gap-2 p-3 overflow-hidden grid-cols-custom-30-70">
        <div>
          <AdminNav />
        </div>
        <div className="flex flex-col gap-4 mr-5">
          <div className="items-center w-auto h-10 py-3">
            <TitleComponent className="font-jamsil" titletext="매출 조회" />
          </div>
          {/* 각 페이지에 맞는 테이블 배치 */}
          <SalesInquiryTable />
        </div>
      </div>
    </>
  );
};

export default SalesInquiry;
