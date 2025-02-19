import React from 'react';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '../components/ui/sidebar';
import { AppSidebar } from '../components/sidebar/app-sidebar';
import { Separator } from '../components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Clock, DollarSign, FileText, Layers3 } from 'lucide-react';
import { NumberTicker } from '../components/ui/number-ticker';
import { ChartValorOperacao } from '../components/charts/chart-valor-operacao';
import { ChartlProdutosMaisComprados } from '../components/charts/chart-produtos-mais-comprados';
import { ChartReceitaPorEstado } from '../components/charts/chart-receitas-estados';
import { ChartBrasilCompras } from '../components/charts/chart-brasil-receita';
import { ChartBrasilVendas } from '../components/charts/chart-brasil-vendas';
import { TabTabelasDashboard } from './tabelas-dashboard/tab-tabelas-dashboard';

export const DashboardNf = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-20 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb className="top-0 stroke-lime-50">
                <BreadcrumbList>
                  <BreadcrumbItem className="md:block text-md md:text-lg">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="md:block" />
                  <BreadcrumbItem className="md:block text-md md:text-lg">
                    <BreadcrumbLink className="flex items-center justify-center gap-3 ">
                      Painel Inicial
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Painel Inicial
              </h2>
            </div>
            <Tabs defaultValue="geral" className="space-y-4">
              <TabsList>
                <TabsTrigger value="geral">Geral</TabsTrigger>
                <TabsTrigger value="tabelas">Tabelas</TabsTrigger>
              </TabsList>
              <TabsContent value="geral" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total de vendas líquidas
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        R$ <NumberTicker value={22.8} decimalPlaces={2} />{' '}
                        Bilhões{' '}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Valor total de vendas líquidas
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Receita Total
                      </CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        R$ <NumberTicker value={1.67} decimalPlaces={2} />{' '}
                        Bilhões
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Valor total de receita dos estados
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Vendas de Salvador
                      </CardTitle>
                      <Layers3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        R$ <NumberTicker value={228} decimalPlaces={2} />{' '}
                        Milhões
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Valor total de vendas de Salvador
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Estados com Maior Venda
                      </CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        + <NumberTicker value={2} /> estados
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Superaram os R$ 100 milhões em vendas
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                  <ChartValorOperacao />
                  <ChartlProdutosMaisComprados />
                  <ChartBrasilCompras />
                  <ChartBrasilVendas />
                  <ChartReceitaPorEstado />
                </div>
              </TabsContent>
              <TabsContent value="tabelas" className="space-y-4">
                <TabTabelasDashboard />
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
