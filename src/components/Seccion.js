// src/components/Seccion.js
const Seccion = ({ titulo, descripcion }) => {
    return (
      <div className="p-4 mb-8 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    );
  };
  
  export default Seccion;
  