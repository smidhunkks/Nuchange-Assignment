import "./App.css";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="item-list">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>
      
      
    </div>
  );
}

export default App;
