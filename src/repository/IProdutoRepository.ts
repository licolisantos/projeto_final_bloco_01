// ======================================================================
//  IProdutoRepository (INTERFACE)
//  - Define quais métodos QUALQUER repositório deve implementar.
//  - Obriga a existência do CRUD (Create, Read, Update, Delete)
// ======================================================================

import { Produto } from "../model/Produto";

export interface IProdutoRepository {

    // Criar
    cadastrar(produto: Produto): void;

    // Ler (listar tudo)
    listar(): void;

    // Ler (por código)
    buscarPorCodigo(codigo: number): Produto | null;

    // Atualizar
    atualizar(codigo: number, produtoAtualizado: Produto): void;

    // Deletar
    deletar(codigo: number): void;
}
