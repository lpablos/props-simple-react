import './App.css';
import Comentario from './components/Comentario';
import Saludo from './components/Saludo'
function App() {
  return (
    <div className="container mt-5">
      <h1>Hola desde react</h1>
      < Saludo persona="Juanito Perez" edad={12} />
      <hr/>
      <h3>Cajita de comentarios</h3>
      <Comentario 
        urlImg = "https://img.itch.zone/aW1nLzMwNjU4MTcuZ2lm/347x500m/HaUHkZ.gif" 
        titulo = "Props titulo"
        contenido = "Props de contenido de prueba con props... a ver que mas e minvento"
      />
    </div>
  );
}

export default App;
