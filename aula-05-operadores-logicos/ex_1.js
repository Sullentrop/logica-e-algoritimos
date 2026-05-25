//Rodar (Pacote para funcionar no terminal)
//npm install prompt-sync

//Importar para meu programa o pacote que vou usar
const prompt = require('prompt-sync')();

//Coletar dados e criar variáveis
let nota = parseFloat(prompt("Qual a nota do aluno? "));
let frequencia = parseFloat(prompt("Qual a frequência do aluno (%)? "));

//Lógica para decidir se o aluno será aprovado ou não
if (nota >= 7.0 && frequencia >= 75) {
    console.log("Aluno APROVADO!")
} else 
    console.log("Aluno REPROVADO!!");
