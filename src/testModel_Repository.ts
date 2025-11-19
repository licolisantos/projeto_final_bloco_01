// ======================================================================
// TESTE ETAPA 2 — POO (Programação Orientada a Objetos)
// ======================================================================
// Aqui testamos:
// - Classe Abstrata (Produto)
// - Classe Filha (Suplemento)
// - Polimorfismo (visualizar sobrescrito)
// - Collection usada pelo CRUD
// - Implementação da interface
// ======================================================================

import { Suplemento } from "./model/Suplemento";
import { ProdutoController } from "./controller/ProdutoController";

console.log("\n===== INICIANDO TESTE DA ETAPA 2 =====");

const controller = new ProdutoController();

// Criando objetos (polimorfismo e herança)
const s1 = new Suplemento(1, "Whey Protein", 129.90, "Whey concentrado", "Proteína", "1kg");
const s2 = new Suplemento(2, "Creatina Monohidratada", 89.90, "Creatina micronizada", "Creatina", "300g");

// CADASTRAR
console.log("\n--- CADASTRANDO PRODUTOS ---");
controller.cadastrar(s1);
controller.cadastrar(s2);

// LISTAR
console.log("\n--- LISTANDO TODOS OS PRODUTOS ---");
controller.listar();

// BUSCAR
console.log("\n--- BUSCANDO PRODUTO DE CÓDIGO 2 ---");
console.log(controller.buscarPorCodigo(2));

// ATUALIZAR
console.log("\n--- ATUALIZANDO PRODUTO DE CÓDIGO 2 ---");
const s2Novo = new Suplemento(2, "Creatina Premium", 119.90, "Creatina de alta pureza", "Creatina", "300g");
controller.atualizar(2, s2Novo);

// LISTAR
console.log("\n--- LISTANDO APÓS ATUALIZAÇÃO ---");
controller.listar();

// DELETAR
console.log("\n--- DELETANDO PRODUTO DE CÓDIGO 1 ---");
controller.deletar(1);

// LISTAR
console.log("\n--- LISTANDO RESULTADO FINAL ---");
controller.listar();

console.log("\n===== FIM DO TESTE DA ETAPA 2 =====\n");
