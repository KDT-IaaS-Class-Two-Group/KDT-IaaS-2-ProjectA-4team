import React from "react";
import "./style.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@../../components/ui/table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "components/ui/button";

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

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
  const columns: ColumnDef<T>[] =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          accessorKey: key,
          header: ({ column }) => (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
              <ArrowUpDown className="w-4 h-4 ml-2" />
            </Button>
          ),
        }))
      : [];

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <>
      <div>
        <Table className="min-w-full bg-white">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={`px-4 py-2 border-b border-gray-200 ${header.column.id === "_id" ? "hidden" : ""}`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
                {renderActions && (
                  <TableHead className="px-4 py-2 border-b border-gray-200">
                    Actions
                  </TableHead>
                )}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {/* 데이터의 각 항목을 행으로 렌더링 */}
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {/* 각 행의 셀을 렌더링 */}
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={`px-4 py-2 border-b border-gray-200 ${cell.column.id === "_id" ? "hidden" : ""}`}
                  >
                    {typeof cell.renderValue() === "undefined"
                      ? ""
                      : (cell.renderValue() as React.ReactNode)}{" "}
                    {/* 해당 셀의 데이터 */}
                  </TableCell>
                ))}
                {/* renderActions이 제공되면, 각 행의 마지막 열에 액션을 렌더링 */}
                {renderActions && (
                  <TableCell className="px-4 py-2 text-center border-b border-gray-200">
                    {renderActions(row.original)}
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
