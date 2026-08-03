const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function listaDeCompras() {
    // Configura a interface de leitura do terminal
    const rl = readline.createInterface({ input, output });
    const produtos = [];

    console.log("========================================");
    console.log("       CADASTRO DE PRODUTOS             ");
    console.log("========================================\n");

    // Esturtura 'para...faça' (for) para ENTRADA de dados
    for (let i = 0; i < 5; i++) {
        const item = await rl.question(`Digite o nome do produto ${i + 1}: `);
        produtos.push(item); // Armazena no vetor
    }

    console.log("\n========================================");
    console.log("         SUA LISTA DE COMPRAS           ");
    console.log("========================================");

    // Estrutura 'para...faça' (for) para SAÍDA de dados
    for (let i = 0; i < produtos.length; i++) {
        console.log(`${i + 1}. ${produtos[i]}`);
    }

    console.log("========================================");

    // Fecha a interface do terminal
    rl.close();
}

// Executa a função
listaDeCompras();