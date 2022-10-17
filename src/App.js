import "./App.css";
import PersonCard from "./components/PersonCard";
import SaleItem from "./components/SaleItem";
function App() {
  return (
    <div className="App">
      {/* <SaleItem name="Doe, Jane" initialAge="45" hairColor="Black" />
      <SaleItem name="Smith, John" initialAge="88" hairColor="Brown" />
      <SaleItem name="Fillmore, Millard" initialAge="50" hairColor="Brown" />
      <SaleItem name="Smith, Maria" initialAge="62" hairColor="Brown" /> */}
      <PersonCard name="Smith, Maria" initialAge="62" hairColor="Brown"/>
      <PersonCard name="Fillmore, Millard" initialAge="50" hairColor="Brown"/>
      <PersonCard name="Doe, Jane" initialAge="45" hairColor="Black"/>
    </div>
  );
}

export default App;
