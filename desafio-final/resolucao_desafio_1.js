const prompt = require('prompt-sync')();

//Vetores para salvamento de dados
let nomes = [];
let idades = [];

//Loop para salvar os dados
for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome: ");
    let idade = parseInt(prompt("Digite a idade: "));

    nomes.push(nome);
    idades.push(idade);
}

//Criando a variavel da resposta fora do Loop
let resposta = "";

//Loop para validar a resposta do usuario
while (true) {
    resposta = prompt("Deseja visualizart os dados? (sim/não) ").toLowerCase().trim();

    if (resposta === "sim" || resposta === "não" || resposta === "nao") {
        break;
    } else {
        console.log("Resposta inválida! Tente novamente!");
    }
}

//Verificando se o usuario quer ver os dados ou fechar
if (resposta === "sim") {

    //Loop para mostrar as 3 pessoas salvas
    for (let i = 0; i < 3; i++) {
        let classificacao = "";

        //Condicional para ver a categoria da idade
        if (idades[i] < 18) {
            classificacao = "Menor de idade";
        }else if (idades[i] >= 18 && idades[i] <= 59) {
            classificacao = "Maior de idade";
        }else {
            classificacao = "Idoso(a)";
    }

    //Exemplo utilizado pelo professor
    console.log("---Pessoa " + (i + 1) + "---");
    console.log("Nome:          " + nomes[i]);
    console.log("Idade:         " + idades[i] + " anos");
    console.log("Classificação: " + classificacao);
    console.log("");
}
} else {
    console.log("Programa finalizado com sucesso!");
}