import React from 'react';
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
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts';

const chartData = [
  { estado: 'Rondônia', valor: 95 },
  { estado: 'Ceará', valor: 90 },
  { estado: 'Rio Grande do Sul', valor: 90 },
  { estado: 'Espírito Santo', valor: 90 },
  { estado: 'Roraima', valor: 82 },
  { estado: 'Distrito Federal', valor: 79 },
  { estado: 'Alagoas', valor: 72 },
  { estado: 'Rio de Janeiro', valor: 68 },
  { estado: 'Goiás', valor: 68 },
  { estado: 'São Paulo', valor: 65 },
  { estado: 'Bahia', valor: 38 },
];

const chartConfig = {
  valor: {
    label: 'Soma do valor da operação',
    color: 'hsl(var(--chart-2))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig;

export function ChartValorOperacao() {
  return (
    <Card className="col-span-4 row-span-1">
      <CardHeader>
        <CardTitle>Maiores Valores Operação X Estado</CardTitle>
        <CardDescription>
          Soma dos valores totais das operações por estado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="estado"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="valor" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="valor" layout="vertical" fill="#f59e0b" radius={4}>
              <LabelList
                dataKey="estado"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="valor"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value) => `${value} %`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
