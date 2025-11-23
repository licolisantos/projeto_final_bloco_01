import readlineSync from "readline-sync";
import { colors } from "./src/util/Colors";

// IMPORTAR CONTROLLER E MODEL
import { ProdutoController } from "./src/controller/ProdutoController";
import { Suplemento } from "./src/model/Suplemento";

// INSTÂNCIA DO CONTROLLER
const controller = new ProdutoController();

/* ===================== MENU PRINCIPAL ===================== */
export function main(): void {

    let opcao: number;

    while (true) {

        console.clear();

        console.log(`
${colors.fg.cyan}══════════════════════════════════════════════════════════════════════════

                🧬 VIDA PLENA – SUPLEMENTOS ALIMENTARES 🧬

══════════════════════════════════════════════════════════════════════════

            1 - Cadastrar Novo Produto
            2 - Listar Produtos
            3 - Buscar Por Código
            4 - Atualizar Ficha Técnica
            5 - Deletar Produto
            0 - Encerrar

══════════════════════════════════════════════════════════════════════════
${colors.reset}
`);

        console.log(colors.fg.whitestrong, "Entre com a opção desejada:");
        opcao = readlineSync.questionInt("");

        if (opcao === 0) {
            console.log(colors.fg.cyan,
                "\nObrigado por visitar a Vida Plena! Sua saúde em primeiro lugar. 💙✨",
                colors.reset);
            sobre();
            break;
        }

        switch (opcao) {

            /* ======================== CADASTRAR ======================== */
            case 1:
                console.clear();
                console.log("=== Cadastrar Novo Produto ===");

                const codigo = readlineSync.questionInt("Código: ");
                const nome = readlineSync.question("Nome: ");
                const preco = readlineSync.questionFloat("Preço: ");
                const descricao = readlineSync.question("Descrição: ");
                const tipo = readlineSync.question("Tipo: ");
                const peso = readlineSync.question("Peso (ex: 300g, 1kg): ");

                const novoProd = new Suplemento(
                    codigo,
                    nome,
                    preco,
                    descricao,
                    tipo,
                    peso
                );

                controller.cadastrar(novoProd);
                break;

            /* ======================== LISTAR ======================== */
            case 2:
                console.clear();
                console.log("=== Lista de Produtos ===");
                controller.listar();
                break;

            /* ======================== BUSCAR ======================== */
            case 3:
                console.clear();
                console.log("=== Buscar Produto ===");

                const codigoBusca = readlineSync.questionInt("Digite o código do produto: ");
                const encontrado = controller.buscarPorCodigo(codigoBusca);

                if (encontrado)
                    encontrado.visualizar();
                else
                    console.log("\n❌ Produto não encontrado!\n");

                break;

            /* ======================== ATUALIZAR ======================== */
            case 4:
                console.clear();
                console.log("=== Atualizar Produto ===");

                const codigoAtualizar = readlineSync.questionInt("Digite o código: ");

                console.log("Informe os NOVOS dados:");
                const nomeNovo = readlineSync.question("Nome: ");
                const precoNovo = readlineSync.questionFloat("Preço: ");
                const descNova = readlineSync.question("Descrição: ");
                const tipoNovo = readlineSync.question("Tipo: ");
                const pesoNovo = readlineSync.question("Peso: ");

                const prodAtualizado = new Suplemento(
                    codigoAtualizar,
                    nomeNovo,
                    precoNovo,
                    descNova,
                    tipoNovo,
                    pesoNovo
                );

                controller.atualizar(codigoAtualizar, prodAtualizado);
                break;

            /* ======================== DELETAR ======================== */
            case 5:
                console.clear();
                console.log("=== Deletar Produto ===");

                const codigoDel = readlineSync.questionInt("Digite o código: ");
                controller.deletar(codigoDel);

                break;

            /* ======================== OPÇÃO INVÁLIDA ======================== */
            default:
                console.log(colors.fg.red,
                    "\nOpção inválida! Por favor, escolha um número entre 0 e 5.\n",
                    colors.reset);
                break;
        }

        console.log("\nPressione ENTER para continuar...");
        readlineSync.prompt();
    }
}

main();

/* ===================== SOBRE ===================== */
function sobre(): void {
    console.log(`
${colors.fg.cyan}══════════════════════════════════════════════════════════════════════════

                    Projeto Desenvolvido por:
                          🚀 Licoli Santos
                    E-mail: joaogabriellicoli@gmail.com
                    GitHub: https://github.com/licolisantos

══════════════════════════════════════════════════════════════════════════
${colors.reset}
`);
}

/* ===================== KEY PRESS ===================== */
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione ENTER para continuar...");
    readlineSync.prompt();
}
