import { Home } from "./pages/Home/Home";
import {Cart} from "./pages/Cart/Cart";
import {Routes,Route} from "react-router-dom";
import './App.css';
import { Fragment } from "react";

function App() {
  return (
       <Routes>
       <Route path="/" element ={<Home/>} />
       <Route path="/Cart" element ={<Cart/>} />
       </Routes>
      

  );
}

export default App;

