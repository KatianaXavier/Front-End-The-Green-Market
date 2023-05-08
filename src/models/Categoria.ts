import { Produto } from "./Produto";

export interface Categoria {
  idCategoria: number;
  nomeCategoria: string;
  descricaoCategoria: string;
  produtos?: Produto[];
}