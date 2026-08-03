const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function cardapioRestaurante() {
    // Configura a interface de leitura do terminal
    const rl = readline.createInterface({ input, output });
    
    // Declaração dos dois vetores (paralelos)
    const nomesPratos = [];
    const precosPratos = [];

    console.log("========================================");
    console.log("        CADASTRO DO CARDÁPIO           ");
    console.log("========================================\n");

    // 1. Estrutura 'para...faça' (for) para o CADASTRO dos 4 pratos
    for (let i = 0; i < 4; i++) {
        const nome = await rl.question(`Digite o nome do ${i + 1}º pratos: `);
        const precoEntrada = await rl.question(`Digite o preço do prato ${nome} (R$): `);
        
        nomesPratos.push(nome);
        precosPratos.push(parseFloat(precoEntrada.replace(',', '.')));
        console.log("----------------------------------------");
    }

    console.log("\n--- Cardápio ---");
    // 2. Estrutura 'para...faça' (for) para a EXIBIÇÃO do cardápio
    for (let i = 0; i < 4; i++) {
        console.log(`${i + 1}. ${nomesPratos[i]} - R$ ${precosPratos[i].toFixed(2)}`);
    }
    console.log("----------------\n");

    // 3. Solicitação da escolha do usuário
    const entradaEscolha = await rl.question("Escolha um prato pelo número (1 a 4): ");
    const escolha = parseInt(entradaEscolha);

    // 4. Estrutura condicional se...senão para VALIDAÇÃO
    if (escolha >= 1 && escolha <= 4) {
        // Ajusta a escolha (1 a 4) para o índice do vetor (0 a 3)
        const indice = escolha - 1; 
        
        console.log("\n========================================");
        console.log(`Você escolheu: ${nomesPratos[indice]}`);
        console.log(`Preço: R$ ${precosPratos[indice].toFixed(2)}`);
        console.log("========================================");
    } else {
        console.log("\n[ERRO] Opção inválida! Por favor, escolha um número entre 1 e 4.");
    }

    // Fecha a interface do terminal
    rl.close();
}

// Executa a função
cardapioRestaurante();