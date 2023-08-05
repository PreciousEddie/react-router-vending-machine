import VendingMachine from "./VendingMachine"
import Dasani from "./Dasani";
import Doritos from "./Doritos";
import PeanutMMs from "./PeanutMMs"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <VendingMachine /> } />
          <Route path="/dasani" element={ <Dasani /> } />
          <Route path="/doritos" element={ <Doritos /> } />
          <Route path="/peanutmms" element={ <PeanutMMs /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
