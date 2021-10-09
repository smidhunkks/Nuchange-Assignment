import "./App.css";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const itemlist = [
    {
      name: "Potato",

      id: 1,

      price: 30,

      available: 1,

      vendor: "Himachal Pvt Ltd",

      category: "Vegtables",
    },

    {
      name: "Banana",

      id: 2,

      price: 50,

      available: 1,

      category: "Fruits",

      vendor: "Organic farms",
    },

    {
      name: "Drumsticks",

      id: 3,

      price: 20,

      available: 0,

      category: "Vegetables",

      vendor: "Mallikarjuna farms",
    },

    {
      name: "Orange",

      id: 4,

      price: 25,

      available: 1,

      vendor: "Nagpur farms",

      category: "Fruits",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="item-list-wrap">
        <div className="item-list">
          
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
