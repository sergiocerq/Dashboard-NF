import React from 'react';
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Pie,
  PieChart,
  Sector,
  XAxis,
  YAxis,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

const desktopData = [
  { month: 'Atacadista de Bebidas', desktop: 260, fill: ' #e0f2fe' },
  { month: 'Varejista de Mercadorias gerais', desktop: 200, fill: '#7dd3fc' },
  { month: 'Varejista de Automoveis', desktop: 125, fill: '#0ea5e9' },
  {
    month: 'Atacadista de Derivados do Petróleo',
    desktop: 120,
    fill: '#0369a1',
  },
  { month: 'Atacadista de Alimentícios', desktop: 117, fill: '#0c4a6e' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  desktop: {
    label: 'Desktop',
  },
  mobile: {
    label: 'Mobile',
  },
  'Atacadista de Bebidas': {
    label: 'Atacadista de Bebidas',
    fill: '#e0f2fe',
  },
  'Varejista de Mercadorias gerais': {
    label: 'Varejista de Mercadorias gerais',
    fill: '#7dd3fc',
  },
  'Varejista de Automoveis': {
    label: 'Varejista de Automoveis',
    fill: '#0ea5e9',
  },
  'Atacadista de Derivados do Petróleo': {
    label: 'Atacadista de Derivados do Petróleo',
    fill: '#0369a1',
  },
  'Atacadista de Alimentícios': {
    label: 'Atacadista de Alimentícios',
    fill: '#0c4a6e',
  },
} satisfies ChartConfig;
export function ChartlProdutosMaisComprados() {
  const id = 'pie-interactive';
  const [activeMonth, setActiveMonth] = React.useState(desktopData[0].month);
  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth],
  );
  const months = React.useMemo(() => desktopData.map((item) => item.month), []);

  return (
    <Card className="col-span-4">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Produtos Mais Comprados</CardTitle>
          <CardDescription>Dados referentes à Janeiro de 2019</CardDescription>
        </div>
        <Select value={activeMonth} onValueChange={setActiveMonth}>
          <SelectTrigger
            className="ml-auto h-7 max-w-[280px] rounded-lg pl-2.5"
            aria-label="Selecione um valor"
          >
            <SelectValue placeholder="Selecione um produto" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];
              if (!config) {
                return null;
              }
              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: config.fill,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer id={id} config={chartConfig} className="mx-auto w-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="month"
              innerRadius={85}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          R${desktopData[activeIndex].desktop.toLocaleString()}{' '}
                          M
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
