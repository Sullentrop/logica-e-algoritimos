const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita o número ao usuário no terminal
readline.question('Digite um número inteiro positivo: ', (entrada) => {
    
    // Converte a entrada de texto para número inteiro
    let numero = parseInt(entrada);
    
    // Inicializa as variáveis da soma e do contador
    let soma = 0;
    let contador = 1;

    // Valida se o usuário digitou um número válido e maior que zero
    if (!isNaN(numero) && numero > 0) {
        
        // Estrutura de repetição WHILE (condição no início)
        while (contador <= numero) {
            soma = soma + contador;
            contador++; // Incrementa o contador de 1 em 1
        }
        
        // Exibe o resultado final no terminal
        console.log(`A soma de 1 até ${numero} é: ${soma}`);
        
    } else {
        console.log("Por favor, digite um número inteiro válido e maior que zero.");
    }

    // Fecha a interface de leitura para encerrar o programa
    readline.close();
});