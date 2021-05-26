// Exemplos

// Exercício 0A
function soma() {
    // escreva seu código aqui
    const num1 = prompt('Digite o primeiro número')
    const num2 = prompt('Digite o segundo número')

    console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
    // escreva seu código aqui
    const mensagem = prompt('Digite sua mensagem')

    console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
    // escreva seu código aqui
    const altura = prompt("Digite a altura")
    const largura = prompt("Digite a largura")

    console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
    // escreva seu código aqui
    const anoAtual = prompt("Digite o Ano Atual")
    const anoNascimento = prompt("Digite o Ano que você nasceu")

    console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
    // escreva seu código aqui
    const peso = prompt(Number("Seu peso"))
    const altura = prompt(Number("Digite sua altura"))

    console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
    // escreva seu código aqui
    const name = prompt("Digite seu nome")
    const idade = prompt(Number("Digite sua idade"))
    const email = prompt("Digite seu e-mail")

    console.log("Meu nome é" + name + ",tenho" + idade + "anos, e o meu e-mail é" + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
    // escreva seu código aqui
    let cor1 = prompt("Qual sua cor favorita?")
    let cor2 = prompt("Qual sua segunda cor favorita?")
    let cor3 = prompt("Qual a terceira cor?")

    console.log([cor1, cor2, cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
    // escreva seu código aqui
    let text = prompt("Mensagem")

    console.log(text.toUpperCase());

}

// Exercício 7
function calculaIngressosEspetaculo() {
    // escreva seu código aqui
    const custoTotal = prompt("Valor do Espetaculo")
    const ingresso = prompt("Valor do ingresso")

    console.log(custoTotal / ingresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
    // escreva seu código aqui
    let stringUm = prompt("Digite um texto")
    let stringDois = prompt("Digite seu segundo texto")

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
    // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
    // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
    // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
    // escreva seu código aqui
}