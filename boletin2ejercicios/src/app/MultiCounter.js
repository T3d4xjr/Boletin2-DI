'use client';
import { useState } from "react";


function Contador({ count, onIncrementar, onDecrementar, onReiniciar }) {
  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={onIncrementar}>Incrementar</button>
      <button onClick={onDecrementar}>Decrementar</button>
      <button onClick={onReiniciar}>Reiniciar</button>
    </div>
  );
}


export default function MultiCounter() {
  const [contadores, setContadores] = useState([]);

  function agregarContador() {
    setContadores([...contadores, 0]);
  }

  
  function handleIncrementar(indice) {
    setContadores(
      contadores.map((valor, i) => (i === indice ? valor + 1 : valor))
    );
  }

  function handleDecrementar(indice) {
    setContadores(
      contadores.map((valor, i) => (i === indice ? valor - 1 : valor))
    );
  }


  function handleReiniciar(indice) {
    setContadores(
      contadores.map((valor, i) => (i === indice ? 0 : valor))
    );
  }

  return (
    <div>
      <button onClick={agregarContador}>
        Agregar Contador
      </button>
      <div>
        {contadores.map((valor, index) => (
          <Contador
            key={index}
            count={valor}
            onIncrementar={() => handleIncrementar(index)}
            onDecrementar={() => handleDecrementar(index)}
            onReiniciar={() => handleReiniciar(index)}
          />
        ))}
      </div>
    </div>
  );
}
