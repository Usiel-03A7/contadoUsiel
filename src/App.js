import logo from './logoUsiel.jpeg';
import './App.css';
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador de usiel</h1>
        <img src={logo}/>
        
        <Welcome mensake="me gusta la carne de res" name="Usiel solano silva"/>
        <p>
          En caso de robo o extrabio de code 
        </p>
        <p>
        recuerda que el codigo no es tuyo solo fue tu turno de usarlo cx          
        </p>
        <a
          className="App-link"
          href="https://github.com/Usiel-03A7"
          target="_blank"
        >
        Mira mi github
        </a>
      </header>
    </div>
  );
}

export default App;
