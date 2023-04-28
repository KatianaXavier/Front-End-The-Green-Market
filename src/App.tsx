import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Home from "./paginas/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import Sobre from "./paginas/sobre/Sobre";
import { CadastroUsuario } from "./paginas/cadastroUsuario/CadastroUsuario";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ListaCategoria } from "./components/categorias/listaCategoria/ListaCategoria";
import { CadastroCategoria } from "./components/categorias/cadastroCategoria/cadastroCategoria";
import { ListaProdutos } from "./components/produtos/ListaProdutos";
import { CadastroProduto } from "./components/produtos/CadastroProduto";
import { DeleteCategoria } from "./components/categorias/deleteCategoria/DeleteCategoria";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/criarCategoria" element={<CadastroCategoria />} />
            <Route path="/editarCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeleteCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/criarProduto" element={<CadastroProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
