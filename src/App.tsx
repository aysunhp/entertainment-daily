import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/user/home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
