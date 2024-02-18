// prototype/Triangulo.jsx
import React from 'react';
import FormaPrototype from './FormaPrototype';

class Triangulo extends FormaPrototype {
  constructor(base, altura, cor) {
    super();
    this.base = base;
    this.altura = altura;
    this.cor = cor;
  }

  clone() {
    return new Triangulo(this.base, this.altura, this.cor);
  }

  exibir() {
    return (
      <div
        style={{
          width: '0',
          height: '0',
          borderLeft: `${this.base / 2}px solid transparent`,
          borderRight: `${this.base / 2}px solid transparent`,
          borderBottom: `${this.altura}px solid ${this.cor}`,
          margin: '10px',
        }}
      />
    );
  }
}

export default Triangulo;
