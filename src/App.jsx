import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterManager from "./components/router/RouterManager";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RouterManager />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
