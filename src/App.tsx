import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Home from "./paginas/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/home' element={<Login />} /> */}
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
