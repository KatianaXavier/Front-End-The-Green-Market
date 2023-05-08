import { Produto } from "./Produto";

export interface User {
    idUsuario: number;
    nomeUsuario: string;
    cpfUsuario: string;
    enderecoUsuario: string;
    telefoneUsuario: string;
    cepUsuario: string;
    usuario: string;
    fotoUsuario?: string | null;
    senhaUsuario: string;
    produto?: Produto[];
}
