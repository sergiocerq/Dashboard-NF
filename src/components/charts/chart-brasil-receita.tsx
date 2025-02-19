import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import BrasilSVG from '../../assets/brasil-compras.svg';
import { TooltipHeatMapBrasil } from './legenda-graficos';

export function ChartBrasilCompras() {
  return (
    <Card className={'col-span-4'}>
      <CardHeader>
        <CardTitle>Receita por Estado</CardTitle>
        <CardDescription>
          Mapa do Brasil com as receitas por estado
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
              label="Legenda - Compras por Estado"
              payload={[
                {
                  name: 'Muito Alto',
                  value: 'Acima de 100 milhões',
                  fill: '#5b21b6',
                },
                {
                  name: 'Alto',
                  value: 'Entre 50 e 100 milhões',
                  fill: '#7c3aed',
                },
                {
                  name: 'Médio',
                  value: 'Entre 10 e 50 milhões',
                  fill: '#a78bfa',
                },
                {
                  name: 'Baixo',
                  value: 'Abaixo de 10 milhões',
                  fill: '#ddd6fe',
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
