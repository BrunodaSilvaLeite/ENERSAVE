import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useSolarContext } from '@/context/SolarContext';

export function SectionCards() {
  const { resultado } = useSolarContext();
  console.log(resultado);
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 2xl:grid-cols-4 lg:px-6 *:data-[slot=card]:shadow-xs *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Custo total do sistema</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {resultado?.custoInstalacao?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 'R$ 0,00'}
          </CardTitle>
          <div className="absolute right-4 top-4"></div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Investimento inicial para 25 anos de economia <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Custo estimado com base na sua localidade
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Número de painéis necessários</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {resultado?.numeroPaineis || 0} painéis de {resultado?.potenciaPainelW || 0}W
          </CardTitle>
          <div className="absolute right-4 top-4"></div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Painéis de {resultado?.potenciaPainelW || 0}W de alta eficiência <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Quantidade ideal para sua demanda
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Economia mensal estimada</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {resultado?.economiaMensal?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 'R$ 0,00'}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {resultado?.economiaMensal
              ? (resultado.economiaMensal * 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              : 'R$ 0,00'} de economia por ano <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">O engajamento excede as metas</div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Tempo de retorno do investimento (Payback)</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {resultado?.paybackAnos ? `${Math.ceil(resultado.paybackAnos)} anos` : '0 anos'}
          </CardTitle>
          <div className="absolute right-4 top-4"></div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm"></CardFooter>
      </Card>
    </div>
  )
}
