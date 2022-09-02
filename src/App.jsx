import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import CareerGrid from "./components/Home/CareerGrid/CareerGrid";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Home/CareerGrid/Cart/Cart";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </> 
  );
}

export default App;
