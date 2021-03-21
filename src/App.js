import React from "react"
import { Box, Grommet, Select, TextInput, Header, Clock, Button, Text } from 'grommet';
import { Calculator } from 'grommet-icons';
import { grommet } from 'grommet/themes';

import {
  mainPollutantsList,
  measurementUnit,
  realizaConversaoComBaseNoInputDoUsuario,
  selecionaPoluente
} from './services/calculo'


const App = () => {
  const [gas, setGas] = React.useState('')
  const [unit, setUnit] = React.useState('')
  const [pressure, setPressure] = React.useState()
  const [temperature, setTemperature] = React.useState()
  const [value, setValue] = React.useState()
  const [result, setResult] = React.useState()

  const pollutants = () => {
    return mainPollutantsList.map(elem => elem)
  }

  const calculator = () => {

    console.log("gas: ", gas, "unit: ", unit, "value: ", value, "temperatture: ", temperature, "pressure: ", pressure)
    setResult(realizaConversaoComBaseNoInputDoUsuario(gas,
      unit,
      parseFloat(value),
      parseFloat(temperature),
      parseFloat(pressure)))
  }

  return (
    <div className="App">
      <Grommet full theme={grommet}>
        <Header pad="medium" background="brand">
          <Clock style={{ float: "right" }} type="digital" />
        </Header>

        <Box fill align="center" justify="start" pad="large" gap="medium">
          <Select
            id="select"
            name="select"
            placeholder="Selecione o Gás"
            labelKey="label"
            valueKey={{ key: 'key', reduce: true }}
            value={gas}
            options={pollutants()}
            onChange={({ value: nextValue }) => setGas(nextValue)}
          />

          <Select
            id="select"
            name="select"
            placeholder="Selecione a unidade de medida"
            value={unit}
            options={measurementUnit}
            onChange={({ option }) => setUnit(option)}
          />
          <Box align="center" justify="start" pad="large" gap="small">

            <TextInput
              value={pressure}
              placeholder="Pressão"
              pattern="[0-9].*"
              onChange={(ev) => {
                if (ev.target.validity.valid) setPressure(ev.target.value);
              }}
            />

            <TextInput
              value={temperature}
              pattern="[0-9]*"
              placeholder="Temperatura"
              onChange={(ev) => {
                if (ev.target.validity.valid) setTemperature(ev.target.value);
              }}
            />


            <TextInput
              value={value}
              pattern="[0-9]*"
              placeholder="Valor"
              onChange={(ev) => {
                if (ev.target.validity.valid) setValue(ev.target.value);
              }}
            />
          </Box>
          <Button icon={<Calculator />} label="Calcular" onClick={() => calculator()} primary />
          <Text>  Resultado:  {result} </Text>
        </Box>
      </Grommet>
    </div>
  );
}

export default App;
