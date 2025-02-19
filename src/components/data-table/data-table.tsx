import React, { useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { Input } from '../ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { DataTablePagination } from './data-table-pagination';
import { DataTableFacetedFilter } from './data-table-faceted-filter';

export interface DataTableFiltersProps<TData, TValue> {
  column: string;
  values: any[];
  disabled: boolean;
  type: string;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: string;
  options?: DataTableFiltersProps<TData, TValue>[];
  pagination?: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filter,
  options,
  pagination = 50,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div>
        <div className="flex items-center pb-4">
          {filter && (
            <Input
              placeholder={`Filtrar ${filter.replace('_', ' ')} ...`}
              value={
                (table.getColumn(filter)?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn(filter)?.setFilterValue(event.target.value)
              }
              className="max-w-[200px]"
            />
          )}

          <div className="ml-4 flex gap-4">
            {options &&
              options.map((filter: DataTableFiltersProps<TData, TValue>) => (
                <DataTableFacetedFilter
                  key={filter.column}
                  column={table.getColumn(filter.column.toLowerCase())}
                  title={
                    filter.column.charAt(0).toUpperCase() +
                    filter.column.slice(1).replace('_', ' ')
                  }
                  options={filter?.options}
                  type={filter?.type}
                  disabled={filter?.disabled}
                />
              ))}
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-20 text-center"
                  >
                    Sem resultados
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DataTablePagination table={table} pagination={pagination} />
      </div>
    </>
  );
}
