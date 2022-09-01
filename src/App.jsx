import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
//import Navbar from "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";

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
