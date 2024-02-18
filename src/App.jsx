// App.jsx
import React, { useState } from 'react';
import VeiculoBuilder from './VeiculoBuilder';
import Diretor from './Diretor';

const App = () => {
  const [veiculoInfo, setVeiculoInfo] = useState({});
  const builder = new VeiculoBuilder();
  const diretor = new Diretor(builder);

  const construirCarroDeLuxo = () => {
    diretor.construirCarroDeLuxo();
    const veiculo = builder.obterVeiculo();
    setVeiculoInfo(veiculo);
  };

  const construirCaminhaoRobusto = () => {
    diretor.construirCaminhaoRobusto();
    const veiculo = builder.obterVeiculo();
    setVeiculoInfo(veiculo);
  };

  const construirMotoEsportiva = () => {
    diretor.construirMotoEsportiva();
    const veiculo = builder.obterVeiculo();
    setVeiculoInfo(veiculo);
  };

  return (
    <div>
      <h1>Concessionária de Veículos</h1>
      <button onClick={construirCarroDeLuxo}>Construir Carro de Luxo</button>
      <button onClick={construirCaminhaoRobusto}>
        Construir Caminhão Robusto
      </button>
      <button onClick={construirMotoEsportiva}>Construir Moto Esportiva</button>
      {veiculoInfo.modelo && (
        <div>
          <h2>Veículo Construído:</h2>
          <p>{`Modelo: ${veiculoInfo.modelo}, Motor: ${veiculoInfo.motor}, Cor: ${veiculoInfo.cor}`}</p>
          <p>Acessórios: {veiculoInfo.acessorios.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default App;
