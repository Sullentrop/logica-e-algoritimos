//Rodar (Pacote para funcionar no terminal)
//npm install prompt-sync

//Importar para meu programa o pacote que vou usar
const prompt = require('prompt-sync')();

//Coletar dados e criar variáveis
let produtoEsgotado = prompt("O produto está esgotado? (s/n): ") === "s";

//Lógica para verificar o estoque e executar a venda
if (!produtoEsgotado) {
    console.log("Produto disponível para venda.");
    console.log("--- Executando código de venda... ---");
} else {
    console.log("Por favor, reabasteça o estoque.");
}