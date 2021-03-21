import { Console } from "grommet-icons"

export const calculo_mg_m = (valor, temperatura, pressao, massa_molecular) => {
    const resultadoCalculo = (valor * (1 / (6.02 * Math.pow(10, 23))) /
        (1.66 * Math.pow(10, -18) * 0.082 * (273 + temperatura) / (pressao))) * ((massa_molecular) * (1000) * (1000))
    return ((Math.round(resultadoCalculo * 100) / 100).toFixed(2))
}

export const calculo_ppm = (valor, temperatura, pressao, massa_molecular) => {
    const resultadoCalculo = ((((valor) * (1.66 * Math.pow(10, -18)) * (0.082) * (273 + (temperatura))) /
        ((pressao) * (massa_molecular) * (1000) * (1000) * (1 / (6.02 * Math.pow(10, 23))))))

        console.log('RESULTADO: ', ((Math.round(resultadoCalculo * 100) / 100).toFixed(2)))
    return ((Math.round(resultadoCalculo * 100) / 100).toFixed(2))
}

export const mainPollutantsList = [
    {
        key: 'dioxido_de_carbono',
        label: 'dioxido de carbono',
        massa_molecular: 4
    },
    {
        key: 'monoxido_de_carbono',
        label: 'monoxido de carbono',
        massa_molecular: 2
    },
    {
        key: 'dioxido_de_enxofre',
        label: 'dioxido de enxofre',
        massa_molecular: 6
    },
    {
        key: 'acido_sufidrico',
        label: 'acido sufidrico',
        massa_molecular: 3
    },
    {
        key: 'amonia',
        label: 'amônia',
        massa_molecular: 1
    },
    {
        key: 'metano',
        label: 'metano',
        massa_molecular: 1
    },
    {
        key: 'oxido_nitrico',
        label: 'óxido nitrico',
        massa_molecular: 4
    },
    {
        key: 'peroxido_de_hidrogenio',
        label: 'peróxido de hidrogenio',
        massa_molecular: 3
    },
    {
        key: 'acido_sufurico',
        label: 'acido sufurico',
        massa_molecular: 9
    },
    {
        key: 'ozonio',
        label: 'ozonio',
        massa_molecular: 4
    },
    {
        key: 'trioxido_de_enxofre',
        label: 'trióxido de enxofre',
        massa_molecular: 8
    },
    {
        key: 'nitrato',
        label: 'nitrato',
        massa_molecular: 6
    },
    {
        key: 'tricloromonofluormetano',
        label: 'tricloromonofluormetano',
        massa_molecular: 137.37
    },
    {
        key: 'diclorofluorometano',
        label: 'diclorofluorometano',
        massa_molecular: 120.9
    }

]

export const selecionaPoluente = (key) => mainPollutantsList.filter(poluente => poluente.key === key)

export const realizaConversaoComBaseNoInputDoUsuario = (poluente, tipoDeConversao, valor, temperatura, pressao) => {
    let poluenteSelecionado = selecionaPoluente(poluente)
    console.log(poluenteSelecionado)
    if (poluenteSelecionado.length > 0) {
        poluenteSelecionado = poluenteSelecionado[0]
        console.log('RECEBEIDO: ', valor, temperatura, pressao, poluenteSelecionado.massa_molecular)
        if (tipoDeConversao === 'ppm')
            return calculo_mg_m(valor, temperatura, pressao, poluenteSelecionado.massa_molecular)
        if (tipoDeConversao === 'mg/m')
            return calculo_ppm(valor, temperatura, pressao, poluenteSelecionado.massa_molecular)
        return 'Selecione a unidade';
    }
    return 'Selecione o poluente'
}


export const measurementUnit = ['ppm', 'mg/m']

// console.log("========= CALCULO DOS POLUENTES ============")
// console.log("   CALCULO MG/M")
// console.log(realizaConversaoComBaseNoInputDoUsuario('monoxido_de_carbono', 'ppm', 4, 37, 1))
// console.log("   CALCULO PPM")
// console.log(realizaConversaoComBaseNoInputDoUsuario('monoxido_de_carbono', 'mg/m', 4, 37, 1))