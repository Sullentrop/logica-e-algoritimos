const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function analisePrecos() {
    // Configura a interface de leitura do terminal
    const rl = readline.createInterface({ input, output });
    const precos = [];

    console.log("========================================");
    console.log("       ANÁLISE DE PREÇOS DE PRODUTOS    ");
    console.log("========================================\n");

    // 1. Entrada de dados: Lê os 6 preços e armazena no vetor
    for (let i = 0; i < 6; i++) {
        const entrada = await rl.question(`Digite o preço do produto ${i + 1} (R$): `);
        
        // Converte o texto para número decimal (substitui vírgula por ponto, caso o usuário digite com vírgula)
        const preco = parseFloat(entrada.replace(',', '.'));
        precos.push(preco);
    }

    // 2. Lógica para encontrar o maior e o menor
    // Inicializamos as variáveis com o primeiro elemento do vetor (índice 0)
    let maiorPreco = precos[0];
    let menorPreco = precos[0];

    // Estrutura 'para...faça' (for) para percorrer o vetor (começa do índice 1)
    for (let i = 1; i < precos.length; i++) {
        // Verifica se o preço atual é maior que o maior guardado
        if (precos[i] > maiorPreco) {
            maiorPreco = precos[i];
        }
        
        // Verifica se o preço atual é menor que o menor guardado
        if (precos[i] < menorPreco) {
            menorPreco = precos[i];
        }
    }

    // 3. Saída de dados
    console.log("\n========================================");
    console.log("               RESULTADO                ");
    console.log("========================================");
    console.log(`> Maior preço encontrado: R$ ${maiorPreco.toFixed(2)}`);
    console.log(`> Menor preço encontrado: R$ ${menorPreco.toFixed(2)}`);
    console.log("========================================");

    // Fecha a interface do terminal
    rl.close();
}

// Executa a função
analisePrecos();