import readlineSync from "readline-sync";
import { colors } from "./src/util/Colors";

// IMPORTS DA SEGUNDA ETAPA
import { ProdutoRepository } from "./src/repository/ProdutoRepository";
import { Suplemento } from "./src/model/Suplemento";

// INSTÂNCIA DO CRUD
const repositorio = new ProdutoRepository();

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
            5 - Deletar Item 
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
            case 1:
                console.log(colors.fg.cyan,
                    "\nVocê escolheu: Cadastrar Novo Produto\n", colors.reset);
                break;

            case 2:
                console.log(colors.fg.cyan,
                    "\nVocê escolheu: Listar Produtos\n", colors.reset);
                break;

            case 3:
                console.log(colors.fg.cyan,
                    "\nVocê escolheu: Buscar Produto por Código\n", colors.reset);
                break;

            case 4:
                console.log(colors.fg.cyan,
                    "\nVocê escolheu: Atualizar Ficha Técnica do Produto\n", colors.reset);
                break;

            case 5:
                console.log(colors.fg.cyan,
                    "\nVocê escolheu: Deletar Produto\n", colors.reset);
                break;

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

main();