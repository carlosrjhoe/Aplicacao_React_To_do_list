import './App.css';

function primeiroJSX(){
  return(
    <div>
      <h1>Carlos Roberto - Introdução ao react JS</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  );
}

export default App;
