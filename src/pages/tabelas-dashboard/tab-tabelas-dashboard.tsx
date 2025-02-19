import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { DataTable } from '../../components/data-table/data-table';
import { column_operacao_cnae } from './columns/column_operacao_cnae';
import { getComprasPorCnaeDaBahia } from '../../data/mocked-data-compras-cnae';
import { getVendasPorCnaeDaBahia } from '../../data/mocked-data-vendas-cnae';
import { column_operacao_agrupamento_cod_municipio } from './columns/column_operacao_agrupamento_cod_municipio';
import { getVendasAgrupadasPorCodigoMunicipio } from '../../data/mocked-data-venda-agrupada';
import { getComprasAgrupadasPorCodigoMunicipio } from '../../data/mocked-data-compras-agrupadas';

export const TabTabelasDashboard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className={'col-span-4 xl:col-span-2'}>
        <CardHeader>
          <CardTitle>Compras por CNAE da Bahia</CardTitle>
          <CardDescription>
            Tabela de compras por CNAE do estado da Bahia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={column_operacao_cnae}
            data={getComprasPorCnaeDaBahia()}
            pagination={5}
          />
        </CardContent>
      </Card>
      <Card className={'col-span-4 xl:col-span-2'}>
        <CardHeader>
          <CardTitle>Vendas por CNAE da Bahia</CardTitle>
          <CardDescription>
            Tabela de vendas por CNAE do estado da Bahia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={column_operacao_cnae}
            data={getVendasPorCnaeDaBahia()}
            pagination={5}
          />
        </CardContent>
      </Card>
      <Card className={'col-span-4 xl:col-span-2'}>
        <CardHeader>
          <CardTitle>Compras agrupadas por Código X Município</CardTitle>
          <CardDescription>
            Tabela de compras agrupadas por Código e Município
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={column_operacao_agrupamento_cod_municipio}
            data={getComprasAgrupadasPorCodigoMunicipio()}
            pagination={5}
          />
        </CardContent>
      </Card>
      <Card className={'col-span-4 xl:col-span-2'}>
        <CardHeader>
          <CardTitle>Vendas agrupadas por Código X Município</CardTitle>
          <CardDescription>
            Tabela de vendas agrupadas por Código e Município
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={column_operacao_agrupamento_cod_municipio}
            data={getVendasAgrupadasPorCodigoMunicipio()}
            pagination={5}
          />
        </CardContent>
      </Card>
    </div>
  );
};
