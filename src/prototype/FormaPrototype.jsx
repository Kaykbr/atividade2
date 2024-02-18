// prototype/FormaPrototype.jsx
import React from 'react';

class FormaPrototype {
  clone() {
    throw new Error('Método clone() deve ser implementado por subclasses');
  }

  exibir() {
    throw new Error('Método exibir() deve ser implementado por subclasses');
  }
}

export default FormaPrototype;
