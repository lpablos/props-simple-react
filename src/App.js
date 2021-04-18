import './App.css';
import Saludo from './components/Saludo'
function App() {
  return (
    <div className="container mt-5">
      <h1>Hola desde react</h1>
      < Saludo persona="Juanito Perez" edad={12} />
    </div>
  );
}

export default App;
