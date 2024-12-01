// src/App.js
import Contador from './components/Contador';
import Seccion from './components/Seccion';

function App() {
  return (
    <div className="App min-h-screen bg-gray-200 flex flex-col items-center p-4">
      <Seccion
        titulo="Bienvenido a la aplicación del Contador"
        descripcion="Esta aplicación te permite incrementar y restablecer un contador."
      />
      <Contador />
    </div>
  );
}

export default App;
