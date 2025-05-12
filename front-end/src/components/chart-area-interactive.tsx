'use client'

import * as React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useSolarContext } from '@/context/SolarContext'

// Gerar os dados baseados no resultado
function gerarChartData(resultado: { economiaMensal: number, custoInstalacao: number }) {
  // Garantir valores de fallback caso o resultado seja undefined ou nulo
  const economiaMensal = resultado?.economiaMensal ?? 0;  // Fallback para 0 se não houver valor
  const custoInstalacao = resultado?.custoInstalacao ?? 0;  // Fallback para 0 se não houver valor

  const data = []
  let totalEconomizado = 0
  let dataAtual = new Date()

  // Se os valores forem 0, já retorna um dado inicial
  if (economiaMensal === 0 || custoInstalacao === 0) {
    return [{ date: "", payback: 0, custo: custoInstalacao }];
  }

  // Preenche o gráfico enquanto a economia não atingir o custo de instalação
  while (totalEconomizado < custoInstalacao) {
    totalEconomizado += economiaMensal;

    data.push({
      date: dataAtual.toISOString().split('T')[0], // Formato YYYY-MM-DD
      payback: totalEconomizado > custoInstalacao ? custoInstalacao : totalEconomizado,
      custo: custoInstalacao,
    });

    // Avança para o próximo mês
    dataAtual.setMonth(dataAtual.getMonth() + 1);
  }

  return data;
}

const chartConfig = {
  payback: {
    label: 'Economia',
    color: 'hsl(var(--chart-1))',
  },
  custo: {
    label: 'Custo de Instalação',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function ChartLineInteractive() {
  const { resultado } = useSolarContext();

  // Gera os dados para o gráfico, com valores padrão de 0 caso o resultado seja vazio
  const chartData = gerarChartData(resultado || { economiaMensal: 0, custoInstalacao: 0 });

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Payback</CardTitle>
        <CardDescription>Visualização do tempo de retorno do investimento</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                const month = String(date.getMonth() + 1).padStart(2, '0')
                const year = date.getFullYear()
                return `${month}/${year}`
              }}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    const date = new Date(value)
                    const month = String(date.getMonth() + 1).padStart(2, '0')
                    const year = date.getFullYear()
                    return `${month}/${year}`
                  }}
                  indicator="dot"
                />
              }
            />
            <Line
              type="monotone"
              dataKey="payback"
              stroke="var(--color-payback)"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="custo"
              stroke="var(--color-custo)"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
