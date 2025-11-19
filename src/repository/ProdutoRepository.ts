// ======================================================================
//  ProdutoRepository
//  - Implementa IProdutoRepository (CRUD COMPLETO)
//  - Usa Array como "banco de dados" provisório
//  - Contém validações e mensagens de retorno
// ======================================================================

import { Produto } from "../model/Produto";
import { IProdutoRepository } from "./IProdutoRepository";

export class ProdutoRepository implements IProdutoRepository {

    // ------------------------------------------------------------------
    // Armazena produtos cadastrados → simulando um banco de dados
    // ------------------------------------------------------------------
    private produtos: Produto[] = [];

    // ------------------------------------------------------------------
    // Cadastrar
    // ------------------------------------------------------------------
    public cadastrar(produto: Produto): void {
        this.produtos.push(produto);
        console.log("\n✔ Produto cadastrado com sucesso!\n");
    }

    // ------------------------------------------------------------------
    // Listar todos
    // ------------------------------------------------------------------
    public listar(): void {
        if (this.produtos.length === 0) {
            console.log("\nNenhum produto cadastrado.\n");
            return;
        }

        this.produtos.forEach(p => p.visualizar());
    }

    // ------------------------------------------------------------------
    // Buscar por código
    // ------------------------------------------------------------------
    public buscarPorCodigo(codigo: number): Produto | null {
        return this.produtos.find(p => p.getCodigo() === codigo) || null;
    }

    // ------------------------------------------------------------------
    // Atualizar
    // ------------------------------------------------------------------
    public atualizar(codigo: number, novoProduto: Produto): void {

        const index = this.produtos.findIndex(p => p.getCodigo() === codigo);

        if (index === -1) {
            console.log("\n❌ Produto não encontrado!\n");
            return;
        }

        this.produtos[index] = novoProduto;

        console.log("\n✔ Ficha técnica atualizada com sucesso!\n");
    }

    // ------------------------------------------------------------------
    // Deletar
    // ------------------------------------------------------------------
    public deletar(codigo: number): void {

        const index = this.produtos.findIndex(p => p.getCodigo() === codigo);

        if (index === -1) {
            console.log("\n❌ Produto não encontrado!\n");
            return;
        }

        this.produtos.splice(index, 1);

        console.log("\n✔ Produto deletado com sucesso!\n");
    }
}
