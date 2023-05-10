import { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../models/User";
import { cadastrarUsuario } from "../../services/Services";
import { toast } from "react-toastify";

export const CadastroUsuario = () => {
	const history = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const [usuario, setUsuario] = useState<User>({
		idUsuario: 0,
		nomeUsuario: "",
		cpfUsuario: "",
		enderecoUsuario: "",
		telefoneUsuario: "",
		cepUsuario: "",
		usuario: "",
		fotoUsuario: "",
		senhaUsuario: "",
	});

	const [usuarioResult, setUsuarioResult] = useState<User>({
		idUsuario: 0,
		nomeUsuario: "",
		cpfUsuario: "",
		enderecoUsuario: "",
		telefoneUsuario: "",
		cepUsuario: "",
		usuario: "",
		fotoUsuario: "",
		senhaUsuario: "",
	});

	const [confirmarSenha, setConfirmarSenha] = useState<string>("");

	function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
		setConfirmarSenha(event.target.value);
	}
	function updateModel(event: ChangeEvent<HTMLInputElement>) {
		setUsuario({
			...usuario,
			[event.target.name]: event.target.value,
		});
	}

	async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
		event.preventDefault();

		if (confirmarSenha === usuario.senhaUsuario) {
			try {
				setIsLoading(true);
				await cadastrarUsuario(
					"/usuarios/cadastrar",
					usuario,
					setUsuarioResult
				);
				setIsLoading(false);
				toast.success("Usuário cadastrado com sucesso!", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			} catch (error) {
				console.error(error);
				setIsLoading(false);

				toast.error("Por favor, verifique os campos.", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			}
		} else {
			toast.error("As senhas não coincidem.", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			setConfirmarSenha("");
			setUsuario({
				...usuario,
				senhaUsuario: "",
			});
		}
	}

	useEffect(() => {
		if (usuarioResult.idUsuario !== 0) {
			history("/login");
		}
	}, [usuarioResult]);

	const back = () => {
		history("/login");
	};

	return (
		<>
			<Grid container alignItems={"center"}>
				<Grid marginTop={10} item xs={6} className="imagemCadastro"></Grid>
				<Grid item xs={6} justifyContent="center">
					<Box display="flex" justifyContent={"center"}>
						<Grid item xs={8}>
							<form onSubmit={onSubmit}>
								<Typography
									variant="h3"
									align="center"
									gutterBottom
									marginTop={4}
								>
									Cadastrar
								</Typography>
								<TextField
									variant="outlined"
									name="nomeUsuario"
									value={usuario.nomeUsuario}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									label="Nome completo"
									margin="normal"
									required
									fullWidth
								/>
								<TextField
									variant="outlined"
									name="cpfUsuario"
									value={usuario.cpfUsuario}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									label="CPF (Válido e apenas números)"
									margin="normal"
									required
									fullWidth
								/>
								<TextField
									variant="outlined"
									name="enderecoUsuario"
									value={usuario.enderecoUsuario}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									label="Endereço completo"
									margin="normal"
									required
									fullWidth
								/>
								<TextField
									variant="outlined"
									name="telefoneUsuario"
									value={usuario.telefoneUsuario}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									label="Telefone (apenas números)"
									margin="normal"
									required
									type="tel"
									fullWidth
								/>
								<TextField
									variant="outlined"
									name="cepUsuario"
									value={usuario.cepUsuario}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									label="CEP (Válido e apenas números)"
									margin="normal"
									required
									type="text"
									fullWidth
								/>
								<TextField
									variant="outlined"
									name="usuario"
									value={usuario.usuario}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									label="E-mail"
									margin="normal"
									required
									type="email"
									fullWidth
								/>
								<TextField
									error={
										usuario.senhaUsuario.length < 8 &&
										usuario.senhaUsuario.length > 0
									}
									helperText={
										usuario.senhaUsuario.length < 8 &&
										usuario.senhaUsuario.length > 0
											? "A senha deve ter no mínimo 8 caracteres"
											: ""
									}
									type="password"
									name="senhaUsuario"
									value={usuario.senhaUsuario}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									variant="outlined"
									label="Senha"
									margin="normal"
									fullWidth
								/>
								<TextField
									error={usuario.senhaUsuario !== confirmarSenha}
									helperText={
										usuario.senhaUsuario !== confirmarSenha
											? "As senhas são diferentes"
											: ""
									}
									type="password"
									name="confirmarSenha"
									value={confirmarSenha}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										confirmarSenhaHandle(event)
									}
									variant="outlined"
									label="Confirmar Senha"
									margin="normal"
									fullWidth
								/>
								<Box
									marginY={2}
									display={"flex"}
									justifyContent={"space-around"}
									gap={4}
								>
									<Button
										className="buttonDelete"
										style={{ background: "#550C18", color: "#fff" }}
										onClick={back}
										size="large"
										variant="contained"
										color="error"
										fullWidth
									>
										Cancelar
									</Button>
									<Button
										style={{ background: "#2d5540", color: "#fff" }}
										disabled={isLoading}
										type="submit"
										size="large"
										variant="contained"
										fullWidth
									>
										{isLoading ? (
											<span className="Loader">Carregando</span>
										) : (
											"Cadastrar"
										)}
									</Button>
								</Box>
							</form>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default CadastroUsuario;
