import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../components/data-table/data-table-header';
import { OperacaoAgrupamentoCodigoMunicipio } from '../../../data/types';

export const column_operacao_agrupamento_cod_municipio: ColumnDef<OperacaoAgrupamentoCodigoMunicipio>[] =
  [
    {
      accessorKey: 'nomeMunicipio',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nome Município" />
      ),
      cell: ({ row }) => {
        const compra = row.original as OperacaoAgrupamentoCodigoMunicipio;
        return (
          <p className={'text-zinc-700 whitespace-nowrap'}>
            {compra.nomeMunicipio}
          </p>
        );
      },
      filterFn: (row, columnId, filterValue) => {
        if (!filterValue || filterValue.length === 0) return true;
        const cellValue = row.getValue<string>(columnId);
        return filterValue.includes(cellValue);
      },
    },
    {
      accessorKey: 'ufDoMunicipio',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UF" />
      ),
      cell: ({ row }) => {
        const compra = row.original as OperacaoAgrupamentoCodigoMunicipio;
        return (
          <p className={'text-zinc-700 whitespace-nowrap'}>
            {compra.ufDoMunicipio}
          </p>
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
        <DataTableColumnHeader column={column} title="Cód. IBGE" />
      ),
      cell: ({ row }) => {
        const compra = row.original as OperacaoAgrupamentoCodigoMunicipio;
        return (
          <p className={'text-zinc-700 whitespace-nowrap'}>
            {compra.codigoIbgeMunicipioDestino}
          </p>
        );
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
        <DataTableColumnHeader column={column} title="Valor" />
      ),
      cell: ({ row }) => {
        const compra = row.original as OperacaoAgrupamentoCodigoMunicipio;
        return (
          <p className={'text-zinc-700 whitespace-nowrap font-bold'}>
            {(compra.valor / 100 || 0).toLocaleString('pt-BR', {
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
