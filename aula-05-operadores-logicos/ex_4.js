//Rodar (Pacote para funcionar no terminal)
//npm install prompt-sync

//Importar para meu programa o pacote que vou usar
const prompt = require('prompt-sync')();

//Coletar dados e criar variáveis
let idade = parseInt(prompt("Qual a idade do candidato? "));
let sabeJavaScript = prompt("Sabe JavaScript? (s/n): ") === "s";
let sabePython = prompt("Sabe Python? (s/n): ") === "s";

//Lógica para decidir se o currículo será aceito ou não
if (idade >= 18 && (sabeJavaScript || sabePython)) {
    console.log("Currículo ACEITO!");
} else {
    console.log("Currículo RECUSADO!");
}