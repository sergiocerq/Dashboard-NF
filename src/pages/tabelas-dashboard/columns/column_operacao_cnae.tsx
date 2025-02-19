import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../components/data-table/data-table-header';
import { CompraCnae } from '../../../data/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../../components/ui/tooltip';

export const column_operacao_cnae: ColumnDef<CompraCnae>[] = [
  {
    accessorKey: 'descricao',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
    cell: ({ row }) => {
      const compra = row.original as CompraCnae;
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className={'text-zinc-700 whitespace-nowrap'}>
                {compra.descricao.substring(0, 40)}...
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className={'whitespace-nowrap'}>
                {compra.descricao}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue || filterValue.length === 0) return true;
      const cellValue = row.getValue<string>(columnId);
      return filterValue.includes(cellValue);
    },
  },
  {
    accessorKey: 'cnae',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CNAE" />
    ),
    cell: ({ row }) => {
      const compra = row.original as CompraCnae;
      return <p className={'text-zinc-700 whitespace-nowrap'}>{compra.cnae}</p>;
    },
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue || filterValue.length === 0) return true;
      const cellValue = row.getValue<string>(columnId);
      return filterValue.includes(cellValue);
    },
  },
  {
    accessorKey: 'valorTotal',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor Total" />
    ),
    cell: ({ row }) => {
      const compra = row.original as CompraCnae;
      return (
        <p className={'text-zinc-700 whitespace-nowrap font-bold'}>
          {(compra.valorTotal || 0).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue || filterValue.length === 0) return true;
      const cellValue = row.getValue<string>(columnId);
      return filterValue.includes(cellValue);
    },
  },
];
