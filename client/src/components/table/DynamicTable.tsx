import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@../../components/ui/table";

interface DynamicTableProps<T extends object> {
  data: T[];
  renderActions?: (row: T) => React.ReactNode;
}

/**
 * @moonhr 24.08.06
 * * 동적으로 생성된 테이블 컴포넌트
 * @param {DynamicTableProps<T>} param0 - 테이블 컴포넌트에 필요한 데이터 및 설정
 * @returns {React.ReactElement} - 동적으로 생성된 테이블 요소
 */
const DynamicTable = <T extends object>({
  data,
  renderActions,
}: DynamicTableProps<T>) => {
  // 데이터의 키값을 테이블의 칼럼으로 사용함.
  const columns = data.length > 0 ? (Object.keys(data[0]) as (keyof T)[]) : [];

  return (
    <>
      <div>
        <Table className="min-w-full bg-white">
          <TableHeader>
            <TableRow>
              {/* 열 헤더 렌더링 */}
              {columns.map((column) => (
                <TableHead
                  key={column as string} // key 속성의 타입 오류 방지를 위한 강제 변환
                  className="px-4 py-2 border-b border-gray-200"
                >
                  {column as string} {/* 헤더 텍스트 */}
                </TableHead>
              ))}
              {/* renderActions이 제공되면 "Actions" 열 추가 */}
              {renderActions && (
                <TableHead className="px-4 py-2 border-b border-gray-200">
                  Actions
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* 데이터의 각 항목을 행으로 렌더링 */}
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {/* 각 행의 셀을 렌더링 */}
                {columns.map((column) => (
                  <TableCell
                    key={column as string} // key 속성의 타입 오류 방지를 위한 강제 변환
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    {(row as never)[column]} {/* 해당 셀의 데이터 */}
                  </TableCell>
                ))}
                {/* renderActions이 제공되면, 각 행의 마지막 열에 액션을 렌더링 */}
                {renderActions && (
                  <TableCell className="px-4 py-2 text-center border-b border-gray-200">
                    {renderActions(row)}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default DynamicTable;