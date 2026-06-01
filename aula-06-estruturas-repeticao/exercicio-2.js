//importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')()

//Título
console.log('--- Contagem Regressiva ---')
console.log("")

//Laço para gerar a contagem regressiva (decremento)
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

//Mensagem final após o término do laço
console.log("Fogo!!")