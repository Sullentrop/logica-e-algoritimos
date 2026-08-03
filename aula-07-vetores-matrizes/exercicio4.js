const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function placarCampeonato() {
    // Configura a interface de leitura do terminal
    const rl = readline.createInterface({ input, output });
    const gols = [];

    // Inicialização dos contadores
    let maisDeTres = 0;
    let tresOuMenos = 0;

    console.log("========================================");
    console.log("         PLACAR DO CAMPEONATO           ");
    console.log("========================================\n");

    // 1. Entrada de dados: Lê os gols dos 5 times
    for (let i = 0; i < 5; i++) {
        const entrada = await rl.question(`Digite os gols marcados pelo time ${i + 1}: `);
        gols.push(parseInt(entrada)); // Converte para inteiro e armazena no vetor
    }

    // 2. Processamento: Percorre o vetor e faz a contagem
    for (let i = 0; i < gols.length; i++) {
        // Estrutura condicional se...senão
        if (gols[i] > 3) {
            maisDeTres++; // Incrementa se for maior que 3 pontos
        } else {
            tresOuMenos++; // Incrementa se for 3 ou menos pontos
        }
    }

    // 3. Saída de dados conforme o exemplo esperado
    console.log("\n========================================");
    console.log("               RESULTADO                ");
    console.log("========================================");
    console.log(`Times com mais de 3 gols: ${maisDeTres}`);
    console.log(`Times com 3 gols ou menos: ${tresOuMenos}`);
    console.log("========================================");

    // Fecha a interface do terminal
    rl.close();
}

// Executa a função
placarCampeonato();