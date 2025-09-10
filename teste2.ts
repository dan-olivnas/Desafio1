import * as readlineSync from "readline-sync";
import { ArraySimples } from "./src/model/ArraySimples";

function pedirItem(): string {
  let item = readlineSync.question("Digite o proximo item da lista, ou 'SAIR' para finalizar: ");
  while (item.trim() === "") {
    console.log("Item inválido!");
    item = readlineSync.question("Digite o proximo item da lista, ou 'SAIR' para finalizar: ");
  }
  return item;
}

const listaCompras: string[] = [];

while (true) {
  const item = pedirItem();
  if (item.toLowerCase() === "sair") break;
  if (listaCompras.length >= 5) {
    console.log("Lista cheia! Máximo de 5 itens.");
    break;
  }
  listaCompras.push(item);
  console.log("Lista atual:", listaCompras);
}

// Remover duplicados usando a classe
const arraySimples = new ArraySimples(listaCompras);
const listaSemDuplicados = arraySimples.removeDuplicados();

console.log("\nLista final (com duplicados):", listaCompras);
console.log("Lista final (sem duplicados):", listaSemDuplicados);
