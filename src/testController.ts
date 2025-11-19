import { ProdutoController } from "./controller/ProdutoController";
import { Suplemento } from "./model/Suplemento";

const controller = new ProdutoController();

const creatina = new Suplemento(
    1,
    "Creatina Monohidratada",
    89.90,
    "Creatina pura micronizada",
    "Creatina",
    "300g"
);

console.log("---- CADASTRANDO ----");
controller.cadastrar(creatina);

console.log("---- LISTANDO ----");
controller.listar();

console.log("---- BUSCANDO ----");
console.log(controller.buscarPorCodigo(1));

console.log("---- ATUALIZANDO ----");
const creatinaAtualizada = new Suplemento(
    1,
    "Creatina Premium",
    119.90,
    "Alta pureza e qualidade superior",
    "Creatina",
    "300g"
);
controller.atualizar(1, creatinaAtualizada);

console.log("---- LISTANDO ----");
controller.listar();

console.log("---- DELETANDO ----");
controller.deletar(1);

console.log("---- LISTANDO ----");
controller.listar();
