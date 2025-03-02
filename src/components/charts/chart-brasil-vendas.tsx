import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import BrasilSVG from '../../assets/brasil-vendas.svg';
import { TooltipHeatMapBrasil } from './legenda-graficos';

export function ChartBrasilVendas() {
  return (
    <Card className={'col-span-4'}>
      <CardHeader>
        <CardTitle>Vendas por Estado</CardTitle>
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
        <div className="grid w-full justify-center text-foreground md:grid-cols-1 [&>div]:relative [&>div]:flex [&>div]:h-[137px] [&>div]:items-center mx-auto [&>div]:justify-center [&>div]:p-4">
          <div>
            <TooltipHeatMapBrasil
              label="Legenda - Vendas por Estado"
              payload={[
                {
                  name: 'Muito Alto',
                  value: 'Acima de 100 milhões',
                  fill: '#065f46',
                },
                {
                  name: 'Alto',
                  value: 'Entre 50 e 100 milhões',
                  fill: '#059669',
                },
                {
                  name: 'Médio',
                  value: 'Entre 10 e 50 milhões',
                  fill: '#34d399',
                },
                {
                  name: 'Baixo',
                  value: 'Abaixo de 10 milhões',
                  fill: '#a7f3d0',
                },
                { name: 'Sem Resultados', value: 'N/A', fill: '#999999' },
              ]}
              className="w-[75%]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
