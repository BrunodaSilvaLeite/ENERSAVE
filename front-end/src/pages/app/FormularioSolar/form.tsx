import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { useSolarContext } from "@/context/SolarContext"


const estadosBrasil = [
    { sigla: "AC", nome: "Acre", horasSol: 4.5 },
    { sigla: "AL", nome: "Alagoas", horasSol: 5.0 },
    { sigla: "AP", nome: "Amapá", horasSol: 4.8 },
    { sigla: "AM", nome: "Amazonas", horasSol: 4.2 },
    { sigla: "BA", nome: "Bahia", horasSol: 5.2 },
    { sigla: "CE", nome: "Ceará", horasSol: 5.5 },
    { sigla: "DF", nome: "Distrito Federal", horasSol: 5.5 },
    { sigla: "ES", nome: "Espírito Santo", horasSol: 5.0 },
    { sigla: "GO", nome: "Goiás", horasSol: 5.5 },
    { sigla: "MA", nome: "Maranhão", horasSol: 5.0 },
    { sigla: "MT", nome: "Mato Grosso", horasSol: 5.2 },
    { sigla: "MS", nome: "Mato Grosso do Sul", horasSol: 5.3 },
    { sigla: "MG", nome: "Minas Gerais", horasSol: 5.2 },
    { sigla: "PA", nome: "Pará", horasSol: 4.7 },
    { sigla: "PB", nome: "Paraíba", horasSol: 5.4 },
    { sigla: "PR", nome: "Paraná", horasSol: 4.5 },
    { sigla: "PE", nome: "Pernambuco", horasSol: 5.3 },
    { sigla: "PI", nome: "Piauí", horasSol: 5.4 },
    { sigla: "RJ", nome: "Rio de Janeiro", horasSol: 5.0 },
    { sigla: "RN", nome: "Rio Grande do Norte", horasSol: 5.4 },
    { sigla: "RS", nome: "Rio Grande do Sul", horasSol: 4.4 },
    { sigla: "RO", nome: "Rondônia", horasSol: 4.8 },
    { sigla: "RR", nome: "Roraima", horasSol: 4.5 },
    { sigla: "SC", nome: "Santa Catarina", horasSol: 4.4 },
    { sigla: "SP", nome: "São Paulo", horasSol: 4.8 },
    { sigla: "SE", nome: "Sergipe", horasSol: 5.2 },
    { sigla: "TO", nome: "Tocantins", horasSol: 5.3 },
];


export function SolarCalculator() {
    const [consumoKwhMes, setConsumoKwhMes] = useState("")
    const [valorContaReais, setValorContaReais] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [mostrarAvancado, setMostrarAvancado] = useState(false)

    const [potenciaPainelW, setPotenciaPainelW] = useState("300")
    const [custoPorPainel, setCustoPorPainel] = useState("1300")
    const [horasSolManual, setHorasSolManual] = useState("")

    const { setCalculationData } = useSolarContext();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requestData = {
            consumoKwhMes: Number(consumoKwhMes),
            valorContaReais: Number(valorContaReais),
            localidade,
            potenciaPainelW: Number(potenciaPainelW),
            custoPorPainel: Number(custoPorPainel),
            horasSolPorDia: horasSolManual ? Number(horasSolManual) : undefined,
        };

        try {
            const response = await fetch("http://127.0.0.1:5000/calcular", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error("Erro na requisição");
            }

            const data = await response.json();
            setCalculationData(data); // Atualiza o contexto com o resultado
        } catch (error) {
            console.error("Erro ao calcular:", error);
        }
    };
    const handleEstadoChange = (estadoSelecionado: string) => {
        setLocalidade(estadoSelecionado);

        // Encontrando o estado selecionado na lista
        const estado = estadosBrasil.find((estado) => estado.sigla === estadoSelecionado);

        // Atualizando as horas de sol se o estado for encontrado
        if (estado) {
            setHorasSolManual(estado.horasSol.toString());
        }
    };


    return (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            <Card>

                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">Simulador de PayBack</h2>
                    <p className="text-sm text-gray-500">
                        Você pode alterar a potência do painel, o custo por painel e as horas de sol por dia nas opções avançadas.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Consumo mensal (kWh)</label>
                            <Input type="number" value={consumoKwhMes} onChange={(e) => setConsumoKwhMes(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Valor da conta (R$)</label>
                            <Input type="number" value={valorContaReais} onChange={(e) => setValorContaReais(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Estado</label>
                            <Select value={localidade} onValueChange={handleEstadoChange} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione o estado" />
                                </SelectTrigger>
                                <SelectContent>
                                    {estadosBrasil.map((estado) => (
                                        <SelectItem key={estado.sigla} value={estado.sigla}>
                                            {estado.nome}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm">Mostrar opções avançadas</span>
                            <Switch checked={mostrarAvancado} onCheckedChange={setMostrarAvancado} />
                        </div>

                        {mostrarAvancado && (
                            <div className="space-y-4 bg-gray-50 p-4 rounded-xl">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium">Potência do painel (W)</label>
                                    <p className="text-xs text-gray-500">Ajuste a potência dos painéis solares de acordo com suas preferências.</p>
                                    <Input
                                        type="number"
                                        value={potenciaPainelW}
                                        onChange={(e) => setPotenciaPainelW(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium">Custo por painel (R$)</label>
                                    <p className="text-xs text-gray-500">Defina o valor unitário de cada painel solar.</p>
                                    <Input
                                        type="number"
                                        value={custoPorPainel}
                                        onChange={(e) => setCustoPorPainel(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium">Horas de sol por dia (manual)</label>
                                    <p className="text-xs text-gray-500">Informe a média de horas de sol na sua localidade. Caso não saiba, o valor padrão será sugerido com base no estado selecionado.</p>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={horasSolManual}
                                        onChange={(e) => setHorasSolManual(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        <Button type="submit" className="w-full">
                            Calcular
                        </Button>


                    </form>
                </CardContent>
            </Card>

        </div>
    )
}
