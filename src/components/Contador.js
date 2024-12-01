// src/components/Contador.js
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const restablecer = () => setContador(0);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64 mx-auto">
      <h2 className="text-2xl mb-4">Contador</h2>
      <p className="text-xl font-bold mb-4">{contador}</p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={incrementar}
        >
          Incrementar
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={restablecer}
        >
          Restablecer
        </button>
      </div>
    </div>
  );
};

export default Contador;
