// VeiculoBuilder.jsx
import React from 'react';

class VeiculoBuilder {
  constructor() {
    this.veiculo = {
      modelo: '',
      motor: '',
      cor: '',
      acessorios: [],
    };
  }

  construirModelo(modelo) {
    this.veiculo.modelo = modelo;
  }

  construirMotor(motor) {
    this.veiculo.motor = motor;
  }

  construirCor(cor) {
    this.veiculo.cor = cor;
  }

  adicionarAcessorio(acessorio) {
    this.veiculo.acessorios.push(acessorio);
  }

  obterVeiculo() {
    return this.veiculo;
  }
}

export default VeiculoBuilder;
