import './App.css';
import TareasLista from './componentes/TareasLista';
import logo512 from './imagenes/logo512.png';


function App() {
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img 
        src={logo512} 
        alt="" 
        className="logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
          <TareasLista />
      </div>
    </div>
  );
}

export default App;
