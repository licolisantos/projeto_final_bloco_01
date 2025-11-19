// ======================================================================
//  SUPLEMENTO (CLASSE FILHA)
//  - Herda de Produto usando "extends"
//  - Implementa o método visualizar() obrigatório pela classe abstrata
//  - Aplica polimorfismo e acrescenta atributos exclusivos
// ======================================================================

import { Produto } from "./Produto";

export class Suplemento extends Produto {

    // ------------------------------------------------------------------
    // Atributos exclusivos da classe filha
    // ------------------------------------------------------------------
    private tipo: string; // Ex: Creatina, Whey, Multivitamínico
    private peso: string; // Ex: 300g, 1kg, 60 cápsulas

    // ------------------------------------------------------------------
    // Construtor da classe filha
    // - Usa super() para herdar atributos do Produto
    // - Adiciona os atributos específicos de Suplemento
    // ------------------------------------------------------------------
    constructor(
        codigo: number,
        nome: string,
        preco: number,
        descricao: string,
        tipo: string,
        peso: string
    ) {
        super(codigo, nome, preco, descricao);
        this.tipo = tipo;
        this.peso = peso;
    }

    // Métodos próprios da classe
    public getTipo(): string { return this.tipo; }
    public getPeso(): string { return this.peso; }

    // ------------------------------------------------------------------
    // POLIMORFISMO → Implementação do método abstrato visualizar()
    // ------------------------------------------------------------------
    public visualizar(): void {
        console.log(`
═══════════════════════════════════════════════
        VIDA PLENA – SUPLEMENTOS
═══════════════════════════════════════════════
Código:       ${this.codigo}
Nome:         ${this.nome}
Preço:        R$ ${this.preco.toFixed(2)}
Descrição:    ${this.descricao}
Tipo:         ${this.tipo}
Peso:         ${this.peso}
═══════════════════════════════════════════════
`);
    }

}
