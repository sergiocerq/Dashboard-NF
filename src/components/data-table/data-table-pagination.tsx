import React, { useEffect } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pagination: number;
}

export function DataTablePagination<TData>({
  table,
  pagination = 50,
}: DataTablePaginationProps<TData>) {
  useEffect(() => {
    table.setPageSize(pagination);
  }, [table]);

  const getOptionsPagination = () => {
    const options = [5, 10, 20, 30, 40, 50];
    options.push(pagination);
    return options
      .sort((a, b) => a - b)
      .filter((value, index, self) => self.indexOf(value) === index);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 mt-4">
        {table.getFilteredSelectedRowModel().rows.length > 0 ? (
          <div className="flex-1 text-sm text-muted-foreground">
            {`${table.getFilteredSelectedRowModel().rows.length}/${
              table.getFilteredRowModel().rows.length
            } linhas`}
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex items-center space-x-2 lg:space-x-8">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium whitespace-nowrap">N° Linhas</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[75px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {getOptionsPagination().map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[70px] items-center justify-center text-sm font-medium whitespace-nowrap">
            {`Pág. ${
              table.getState().pagination.pageIndex + 1
            } de ${table.getPageCount()}`}
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Início</span>
              <DoubleArrowLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Próximo</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Ir para a última página</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
