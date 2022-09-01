import { useState } from "react";

import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Cart data={cart}/>
      <Cart data={cart}/>
      <Cart data={cart}/>
    </div>
  );
}

export default App;

const cart = {
  tittle: "Ingenieria en Informatica",
  image: "campus.jpeg",
  nivelAcademico: 4,
  accesoTransportePublico: 3,
  nivelProfesores: 3,
  ambiente: 4,
  demandaHoraria: 4
}
