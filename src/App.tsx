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
import { ListaProduto } from "./components/produtos/listaProduto/ListaProduto";
import { CadastroProduto } from "./components/produtos/cadastroProduto/CadastroProduto";
import { DeleteCategoria } from "./components/categorias/deleteCategoria/DeleteCategoria";
import { DeleteProduto } from "./components/produtos/deleteProduto/DeleteProduto";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
				<Navbar />
				<div>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/cadastro" element={<CadastroUsuario />} />
						<Route path="/sobre" element={<Sobre />} />
						<Route
							path="/categorias"
							element={<ListaCategoria />}
						/>
						<Route
							path="/criarCategoria"
							element={<CadastroCategoria />}
						/>
						<Route
							path="/editarCategoria/:id"
							element={<CadastroCategoria />}
						/>
						<Route
							path="/deletarCategoria/:id"
							element={<DeleteCategoria />}
						/>
						<Route path="/produtos" element={<ListaProduto />} />
						<Route
							path="/criarProduto"
							element={<CadastroProduto />}
						/>
						<Route
							path="/editarProduto/:id"
							element={<CadastroProduto />}
						/>
						<Route
							path="/deletarProduto/:id"
							element={<DeleteProduto />}
						/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
