type CalculoInput = {
    consumoKwhMes: number
    valorContaReais: number
    localidade: string
    potenciaPainelW?: number
    custoPorPainel?: number
    horasSolPorDia?: number
}

type CalculoOutput = {
    valorKwh: number
    potenciaNecessariaKwp: number
    numeroPaineis: number
    custoInstalacao: number
    geracaoMensalKwh: number
    economiaMensal: number
    paybackAnos: number
    potenciaPainelW: number
}

const horasPorEstado: Record<string, number> = {
    AC: 5.0, AL: 5.5, AP: 5.2, AM: 4.8, BA: 5.8, CE: 6.0, DF: 5.5,
    ES: 5.0, GO: 5.5, MA: 5.7, MT: 5.5, MS: 5.3, MG: 5.4, PA: 5.0,
    PB: 5.8, PR: 4.8, PE: 5.8, PI: 5.9, RJ: 5.0, RN: 6.0, RS: 4.5,
    RO: 5.2, RR: 5.1, SC: 4.7, SP: 5.0, SE: 5.6, TO: 5.6,
}

export function calcularEnergiaSolar(input: CalculoInput): CalculoOutput {
    const {
        consumoKwhMes,
        valorContaReais,
        localidade,
        potenciaPainelW = 300,
        custoPorPainel = 1900,
        horasSolPorDia,
    } = input

    const horas = horasSolPorDia ?? horasPorEstado[localidade] ?? 5.0

    const valorKwh = valorContaReais / consumoKwhMes
    const potenciaNecessariaKwp = consumoKwhMes / (horas * 30)

    const numeroPaineis = Math.ceil((potenciaNecessariaKwp * 1000) / potenciaPainelW)

    const custoInstalacao = numeroPaineis * custoPorPainel
    const geracaoMensalKwh = numeroPaineis * (potenciaPainelW / 1000) * horas * 30
    const economiaMensal = geracaoMensalKwh * valorKwh

    const paybackAnos = custoInstalacao / (economiaMensal * 12)

    return {
        valorKwh,
        potenciaNecessariaKwp,
        numeroPaineis,
        custoInstalacao,
        geracaoMensalKwh,
        economiaMensal,
        paybackAnos,
        potenciaPainelW,
    }
}
