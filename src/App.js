import "./App.css";
import SaleItem from "./components/SaleItem";
function App() {
  return (
    <div className="App">
      <SaleItem name="Doe, Jane" initialAge="45" hairColor="Black" />
      <SaleItem name="Smith, John" initialAge="88" hairColor="Brown" />
      <SaleItem name="Fillmore, Millard" initialAge="50" hairColor="Brown" />
      <SaleItem name="Smith, Maria" initialAge="62" hairColor="Brown" />
    </div>
  );
}

export default App;
