import React, { useEffect, useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@../../components/ui/table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@../../components/ui/button";

interface DynamicTableProps<T extends object> {
  data: T[];
  // columns: ColumnDef<T, any>[];
  fetchMoreData: () => void;
  renderActions?: (row: T) => React.ReactNode;
  hasMoreData: boolean;
}

/**
 * @moonhr 24.08.06
 * * 동적으로 생성된 테이블 컴포넌트
 * @param {DynamicTableProps<T>} param0 - 테이블 컴포넌트에 필요한 데이터 및 설정
 * @returns {React.ReactElement} - 동적으로 생성된 테이블 요소
 */
const DynamicTable = <T extends object>({
  data,
  // columns,
  fetchMoreData,
  hasMoreData,
  renderActions,
}: DynamicTableProps<T>) => {
  const columns = useMemo(() => {
    if (data.length === 0) return [];

    const keys = Object.keys(data[0]) as (keyof T)[];
    const columnDefs: ColumnDef<T>[] = keys.map((key) => ({
      accessorKey: key as string,
      header: String(key),
      cell: (info) => info.getValue(),
    }));

    if (renderActions) {
      columnDefs.push({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => renderActions(row.original),
      });
    }

    return columnDefs;
  }, [data, renderActions]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
                    className="px-4 py-2 border-b border-gray-200"
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
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {hasMoreData && (
          <div className="py-4 text-center">
            <Button variant="outline" size="sm" onClick={fetchMoreData}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default DynamicTable;
