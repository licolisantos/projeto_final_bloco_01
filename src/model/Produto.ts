// ======================================================================
//  PRODUTO (CLASSE ABSTRATA)
//  - Representa a estrutura base de qualquer produto do sistema.
//  - É abstrata porque NÃO pode ser instanciada diretamente.
//  - Serve de modelo para outras classes filhas (ex: Suplemento).
// ======================================================================

export abstract class Produto {

    // ------------------------------------------------------------------
    // Atributos protegidos
    // - Podem ser acessados pelas classes filhas, mas não de fora.
    // - Faz parte do encapsulamento.
    // ------------------------------------------------------------------
    protected codigo: number;
    protected nome: string;
    protected preco: number;
    protected descricao: string;

    // ------------------------------------------------------------------
    // Construtor da classe base
    // - Toda classe filha deve chamar esse construtor via super()
    // ------------------------------------------------------------------
    constructor(
        codigo: number,
        nome: string,
        preco: number,
        descricao: string
    ) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    // ------------------------------------------------------------------
    // Getters (acesso leitura)
    // ------------------------------------------------------------------
    public getCodigo(): number { return this.codigo; }
    public getNome(): string { return this.nome; }
    public getPreco(): number { return this.preco; }
    public getDescricao(): string { return this.descricao; }

    // ------------------------------------------------------------------
    // Setters (acesso escrita / edição)
    // ------------------------------------------------------------------
    public setNome(nome: string): void { this.nome = nome; }
    public setPreco(preco: number): void { this.preco = preco; }
    public setDescricao(descricao: string): void { this.descricao = descricao; }

    // ------------------------------------------------------------------
    // Método ABSTRATO (POLIMORFISMO)
    // - Toda classe filha DEVE implementar esse método.
    // ------------------------------------------------------------------
    public abstract visualizar(): void;
}
