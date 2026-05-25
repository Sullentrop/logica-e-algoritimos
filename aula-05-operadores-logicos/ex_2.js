//Rodar (Pacote para funcionar no terminal)
//npm install prompt-sync

//Importar para meu programa o pacote que vou usar
const prompt = require('prompt-sync')();

//Coletar dados e criar variáveis
let idade = parseInt(prompt("Qual a idade do visitante? "));

//Lógica para decidir se a entrada é gratuita ou paga
if (idade < 5 || idade >= 65) {
    console.log("Entrada GRATUITA!");
} else {
    console.log("O visitante deve PAGAR ingresso!");
}