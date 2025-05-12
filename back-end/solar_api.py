from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/calcular', methods=['POST'])
    # Dados de entrada esperados
def calcular():
    data = request.get_json()
    consumo = data.get("consumoKwhMes")
    conta = data.get("valorContaReais")
    estado = data.get("localidade")
    potencia = data.get("potenciaPainelW", 300)
    custo_painel = data.get("custoPorPainel", 1900)
    horas_sol = data.get("horasSolPorDia")

    #Determinar horas de sol por dia
    horas_por_estado = {
        "AC": 5.0, "AL": 5.5, "AP": 5.2, "AM": 4.8, "BA": 5.8, "CE": 6.0, "DF": 5.5,
        "ES": 5.0, "GO": 5.5, "MA": 5.7, "MT": 5.5, "MS": 5.3, "MG": 5.4, "PA": 5.0,
        "PB": 5.8, "PR": 4.8, "PE": 5.8, "PI": 5.9, "RJ": 5.0, "RN": 6.0, "RS": 4.5,
        "RO": 5.2, "RR": 5.1, "SC": 4.7, "SP": 5.0, "SE": 5.6, "TO": 5.6,
    }

    horas = horas_sol or horas_por_estado.get(estado, 5.0)

    valor_kwh = conta / consumo
    potencia_kwp = consumo / (horas * 30) # A potência total necessária em kWp (quilowatt-pico)
    num_paineis = -(-potencia_kwp * 1000 // potencia)  
    custo_total = num_paineis * custo_painel
    geracao_mensal = num_paineis * (potencia / 1000) * horas * 30
    economia_mensal = geracao_mensal * valor_kwh
    payback = custo_total / (economia_mensal * 12)
    


    return jsonify({
        "valorKwh": valor_kwh,
        "potenciaNecessariaKwp": potencia_kwp,
        "numeroPaineis": int(num_paineis),
        "custoInstalacao": custo_total,
        "geracaoMensalKwh": geracao_mensal,
        "economiaMensal": economia_mensal,
        "paybackAnos": payback,
        "potenciaPainelW": potencia
    })

if __name__ == '__main__':
    app.run(debug=True)
