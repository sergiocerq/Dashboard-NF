import React, { useEffect, useState } from 'react';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from 'recharts';

const chartData = [
  // {
  //   estado: 'BA',
  //   vendas: 1694314419504,
  //   receitaLiquida: 1055998184549,
  //   receitaTotal: 638316234955,
  // },
  {
    estado: 'AC',
    vendas: 53692638,
    receitaLiquida: 48471010,
    receitaTotal: 5221628,
  },
  {
    estado: 'MA',
    vendas: 6708946523,
    receitaLiquida: 5777678590,
    receitaTotal: 931267933,
  },
  {
    estado: 'AL',
    vendas: 25945720322,
    receitaLiquida: -53335154198,
    receitaTotal: 79280874520,
  },
  {
    estado: 'AM',
    vendas: 2908812793,
    receitaLiquida: -50031365152,
    receitaTotal: 52940177945,
  },
  {
    estado: 'SP',
    vendas: 142963942118,
    receitaLiquida: -130373165389,
    receitaTotal: 273337107507,
  },
  {
    estado: 'AP',
    vendas: 531605775,
    receitaLiquida: -721209975,
    receitaTotal: 1252815750,
  },
  {
    estado: 'RS',
    vendas: 11193478400,
    receitaLiquida: -87696822287,
    receitaTotal: 98890300687,
  },
  {
    estado: 'CE',
    vendas: 10717301736,
    receitaLiquida: -86542857713,
    receitaTotal: 97260159449,
  },
  {
    estado: 'PI',
    vendas: 7623609750,
    receitaLiquida: 0,
    receitaTotal: 0,
  },
  {
    estado: 'MG',
    vendas: 74170265409,
    receitaLiquida: 29566845326,
    receitaTotal: 44603420083,
  },
  {
    estado: 'DF',
    vendas: 2805852083,
    receitaLiquida: -11038642765,
    receitaTotal: 13844494848,
  },
  {
    estado: 'TO',
    vendas: 1568617694,
    receitaLiquida: -1146423395,
    receitaTotal: 2715041089,
  },
  {
    estado: 'ES',
    vendas: 8935925382,
    receitaLiquida: -75369071033,
    receitaTotal: 84304996415,
  },
  {
    estado: 'SE',
    vendas: 17813713152,
    receitaLiquida: 0,
    receitaTotal: 0,
  },
  {
    estado: 'MS',
    vendas: 2920718504,
    receitaLiquida: -1368459580,
    receitaTotal: 4289178084,
  },
  {
    estado: 'GO',
    vendas: 26053833090,
    receitaLiquida: -44377332396,
    receitaTotal: 70431165486,
  },
  {
    estado: 'PR',
    vendas: 27595945176,
    receitaLiquida: 7342840245,
    receitaTotal: 20253104931,
  },
  {
    estado: 'MT',
    vendas: 5391096383,
    receitaLiquida: -4293456671,
    receitaTotal: 9684553054,
  },
  {
    estado: 'PA',
    vendas: 5356610186,
    receitaLiquida: -6662699325,
    receitaTotal: 12019309511,
  },
  {
    estado: 'PB',
    vendas: 4608455226,
    receitaLiquida: -5576143566,
    receitaTotal: 10184598792,
  },
  {
    estado: 'PE',
    vendas: 75190090447,
    receitaLiquida: 32003159409,
    receitaTotal: 43186931038,
  },
  {
    estado: 'RN',
    vendas: 8505629145,
    receitaLiquida: -6887801319,
    receitaTotal: 15393430464,
  },
  {
    estado: 'RO',
    vendas: 515721834,
    receitaLiquida: -11178670184,
    receitaTotal: 11694392018,
  },
  {
    estado: 'SC',
    vendas: 11106985486,
    receitaLiquida: 1065935523,
    receitaTotal: 10041049963,
  },
  {
    estado: 'RR',
    vendas: 88471931,
    receitaLiquida: -357603532,
    receitaTotal: 446075463,
  },
];

const chartConfig = {
  views: {
    label: 'Valor',
  },
  vendas: {
    label: 'Vendas',
  },
  receitaLiquida: {
    label: 'Compras',
  },
  receitaTotal: {
    label: 'Receita Total',
  },
  mobile: {
    label: 'Mobile',
  },
} satisfies ChartConfig;

export function ChartReceitaPorEstado() {
  const [activeChart, setActiveChart] =
    useState<keyof typeof chartConfig>('receitaTotal');
  const [sortedData, setSortedData] = useState(chartData);

  const total = React.useMemo(
    () => ({
      vendas: chartData.reduce((acc, curr) => acc + curr.vendas, 0),
      receitaLiquida: chartData.reduce(
        (acc, curr) => acc + curr.receitaLiquida,
        0,
      ),
      receitaTotal: chartData.reduce((acc, curr) => acc + curr.receitaTotal, 0),
    }),
    [],
  );

  useEffect(() => {
    const dataWithColor = chartData.map((item) => ({
      ...item,
      color: getBarColor(item[activeChart] || 0),
    }));

    switch (activeChart) {
      case 'vendas':
        setSortedData(dataWithColor.sort((a, b) => b.vendas - a.vendas));
        break;
      case 'receitaLiquida':
        setSortedData(
          dataWithColor.sort((a, b) => b.receitaLiquida - a.receitaLiquida),
        );
        break;
      case 'receitaTotal':
        setSortedData(
          dataWithColor.sort((a, b) => b.receitaTotal - a.receitaTotal),
        );
        break;
      default:
        setSortedData(dataWithColor);
    }
  }, [activeChart]);

  const getBarColor = (value: number) => (value < 0 ? '#ef4444' : '#10b981');

  return (
    <Card className={'col-span-8'}>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Receita, Compras e Vendas</CardTitle>
          <CardDescription>
            Exibição das receitas, exceto o estado da Bahia
          </CardDescription>
        </div>
        <div className="flex">
          {['receitaTotal', 'vendas', 'receitaLiquida'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-forfeground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl whitespace-nowrap">
                  {(
                    total[key as keyof typeof total] / 1000000000000
                  ).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 1,
                    minimumFractionDigits: 1,
                  })}{' '}
                  Trilhões
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={sortedData}
            margin={{
              left: 8,
              right: 8,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="estado"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                return value;
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent className="w-[220px]" nameKey="views" />
              }
            />
            <Bar dataKey={activeChart} radius={5} fill="#333">
              {sortedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry[activeChart])}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
