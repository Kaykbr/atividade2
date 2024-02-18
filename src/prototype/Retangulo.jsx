// prototype/Retangulo.jsx
import React from 'react';
import FormaPrototype from './FormaPrototype';

class Retangulo extends FormaPrototype {
  constructor(largura, altura, cor) {
    super();
    this.largura = largura;
    this.altura = altura;
    this.cor = cor;
  }

  clone() {
    return new Retangulo(this.largura, this.altura, this.cor);
  }

  exibir() {
    return (
      <div
        style={{
          width: `${this.largura}px`,
          height: `${this.altura}px`,
          backgroundColor: this.cor,
          margin: '10px',
        }}
      />
    );
  }
}

export default Retangulo;
