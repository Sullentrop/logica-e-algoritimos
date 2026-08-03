const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function inverterVetor() {
    // Configura a interface de leitura do terminal
    const rl = readline.createInterface({ input, output });
    const numeros = [];

    console.log("========================================");
    console.log("          INVERSÃO DE VETOR             ");
    console.log("========================================\n");

    // 1. Entrada de dados: Lê os 5 números inteiros
    for (let i = 0; i < 5; i++) {
        const entrada = await rl.question(`Digite o ${i + 1}º número inteiro: `);
        numeros.push(parseInt(entrada)); // Converte para inteiro e guarda no vetor
    }

    console.log("\n========================================");
    console.log("       NÚMEROS NA ORDEM INVERSA         ");
    console.log("========================================");

    // 2. Saída de dados com DECREMENTO (para...faça invertido)
    // Como o vetor tem 5 elementos, os índices vão de 0 a 4.
    // Começamos em 4 (numeros.length - 1) e vamos descendo até 0 (i >= 0).
    for (let i = numeros.length - 1; i >= 0; i--) {
        console.log(`-> ${numeros[i]}`);
    }

    console.log("========================================");

    // Fecha a interface do terminal
    rl.close();
}

// Executa a função
inverterVetor();