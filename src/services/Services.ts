import axios from "axios";

export const api = axios.create({
    baseURL: "https://thegreenmarket.onrender.com"
})

export const login = async(url: string, dados: object, setDado: Function) =>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const cadastrarUsuario = async(url: string, dados: object, setDado: Function) =>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}