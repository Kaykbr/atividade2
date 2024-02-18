// prototype/Circulo.jsx
import React from 'react';
import FormaPrototype from './FormaPrototype';

class Circulo extends FormaPrototype {
  constructor(raio, cor) {
    super();
    this.raio = raio;
    this.cor = cor;
  }

  clone() {
    return new Circulo(this.raio, this.cor);
  }

  exibir() {
    return (
      <div
        style={{
          width: `${this.raio * 2}px`,
          height: `${this.raio * 2}px`,
          borderRadius: '50%',
          backgroundColor: this.cor,
          margin: '10px',
        }}
      />
    );
  }
}

export default Circulo;
