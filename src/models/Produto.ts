import { Categoria } from "./Categoria";
import { User } from "./User";

export interface Produto {
  idProduto: number;
  nomeProduto: string;
  descricaoProduto: string;
  qtdProduto: number;
  precoProduto: number;
  fotoProduto?: string | null;
  categoria: Categoria | null;
  usuario?: User | null;
}
