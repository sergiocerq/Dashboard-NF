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
import BrasilSVG from '../../assets/brasil-vendas.svg';

export function ChartBrasilVendas() {
  return (
    <Card className={"col-span-4"}>
      <CardHeader>
        <CardTitle>
          Vendas por Estado
        </CardTitle>
        <CardDescription>
          Mapa do Brasil com as vendas por estado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 480"
          className="w-full h-full"
        >
          <image href={BrasilSVG} width="640" height="480" />
        </svg>
      </CardContent>
    </Card>
  );
}
