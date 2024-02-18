// Diretor.jsx
import React from 'react';

class Diretor {
  constructor(builder) {
    this.builder = builder;
  }

  construirCarroDeLuxo() {
    this.builder.construirModelo('Carro de Luxo');
    this.builder.construirMotor('V8');
    this.builder.construirCor('Preto');
    this.builder.adicionarAcessorio('Ar Condicionado');
    this.builder.adicionarAcessorio('Bancos de Couro');
  }

  construirCaminhaoRobusto() {
    this.builder.construirModelo('Caminhão Robusto');
    this.builder.construirMotor('Diesel');
    this.builder.construirCor('Vermelho');
    this.builder.adicionarAcessorio('Caixa de Carga Grande');
    this.builder.adicionarAcessorio('Cabine Dupla');
  }

  construirMotoEsportiva() {
    this.builder.construirModelo('Moto Esportiva');
    this.builder.construirMotor('4 Cilindros');
    this.builder.construirCor('Azul');
    this.builder.adicionarAcessorio('Escape Esportivo');
    this.builder.adicionarAcessorio('Assento Monoposto');
  }
}

export default Diretor;
