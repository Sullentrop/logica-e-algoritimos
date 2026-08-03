//Importação da bibliotoca para rodar
const prompt = require('prompt-sync')()

console.log('---Vetores com lopp ---')
console.log('Digite o nome de 5 filmes abaixo:')
console.log('')

//Criando o vetor para guardar os valores
const filmes = []

//estrutura de repetição para coletar o nome dos 5 filmes 
for (let i = 0; i < 5; i++) {
    filmes[i] = prompt('Digite o nome do ${i + 1}° filme: ')
}

//Exibindo o nome dos filmes coletados
console.log('_____________________________________')
console.log('')

console.log('Nome do ${i + ')