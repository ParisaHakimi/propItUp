import "./App.css";
import SaleItem from "./components/SaleItem";
function App() {
  return (
    <div className="App">
      <SaleItem name="Doe, Jane" age="45" hairColor="Black" />
      <SaleItem name="Smith, John" age="88" hairColor="Brown" />
      <SaleItem name="Fillmore, Millard" age="50" hairColor="Brown" />
      <SaleItem name="Smith, Maria" age="62" hairColor="Brown" />
    </div>
  );
}

export default App;
