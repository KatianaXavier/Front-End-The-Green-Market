import axios from "axios";


export const api = axios.create({
    baseURL: "https://thegreenmarket.onrender.com"
})

export const login = async(url: string, dados: object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

export const cadastrarUsuario = async(url: string, dados: object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const getAll = async (url: string, setDados: Function, headers: object) => {
    const resposta = await api.get(url,headers);
    setDados(resposta.data)
}

