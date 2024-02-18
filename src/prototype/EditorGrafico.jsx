// prototype/EditorGrafico.jsx
import React, { useState } from 'react';
import Circulo from './Circulo';
import Retangulo from './Retangulo';
import Triangulo from './Triangulo';

const EditorGrafico = () => {
  const [formas, setFormas] = useState([]);

  const clonarForma = (forma) => {
    const clone = forma.clone();
    setFormas([...formas, clone]);
  };

  return (
    <div>
      <h1>Editor Gráfico</h1>
      <div>
        <button onClick={() => clonarForma(new Circulo(30, 'blue'))}>
          Clonar Círculo
        </button>
        <button onClick={() => clonarForma(new Retangulo(40, 20, 'green'))}>
          Clonar Retângulo
        </button>
        <button onClick={() => clonarForma(new Triangulo(40, 40, 'red'))}>
          Clonar Triângulo
        </button>
      </div>
      <div style={{ display: 'flex' }}>
        {formas.map((forma, index) => (
          <div key={index}>{forma.exibir()}</div>
        ))}
      </div>
    </div>
  );
};

export default EditorGrafico;
