//Rodar (Pacote para funcionar no terminal)
//npm install prompt-sync

//Importar para meu programa o pacote que vou usar
const prompt = require('prompt-sync')();

//Coletar dados e criar variáveis
let salario = parseFloat (prompt("Qual é o seu salário? R$ "))
let temFiador = prompt("Você possui fiador? (s/n): ") === "s"
let nomeSujo = prompt("Seu nome está sujo no serasa? (s/n): ") === "s"

//Lógica para decidir se pode pegar empréstimo ou não
if(!nomeSujo && (salario >2000 || temFiador)) {
    console.log("Empréstimo Aprovado!!")
} else {
    console.log("Empréstimo Negado!!")
}
