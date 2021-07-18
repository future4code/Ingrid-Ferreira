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

    console.log("Meu nome é " + name + ", tenho " + idade + " anos, e o meu email é " + email + ".")
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
    const string1 = prompt("Escolha uma cor")
    const string2 = prompt("Escolha outra cor")

    console.log(string1.length === string2.length)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
    // escreva seu código aqui

    const string1 = prompt("Digite um texto")
    const string2 = prompt("Digite seu segundo texto")

    const iguais = string1.toLowerCase() === string2.toLowerCase()

    console.log(iguais)
}

// Exercício 10
function checaRenovacaoRG() {
    // escreva seu código aqui

    const anoAtual = Number(prompt("Que ano estamos?"))
    const anoNasc = Number(prompt("Qual o ano do seu nascimento?"))
    const anoRg = Number(prompt("Ano que seu RG foi emitido?"))

    const idade = anoAtual - anoNasc
    const emissao = anoAtual - anoRg

    console.log((idade <= 20 && emissao >= 5) || (idade > 20 && idade <= 50 && emissao >= 10) || (idade > 50 && emissao >= 15))


}

// Exercício 11
function checaAnoBissexto() {
    // escreva seu código aqui

    const ano = Number(prompt("Digite um ano"));
    console.log((ano % 400 === 0) || (ano % 4 === 0) && (ano % 100 != 0))

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
    // escreva seu código aqui

    const idade = prompt("É maior de 18 anos? :")
    const escolaridade = prompt("Você possui ensino médio? :")
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? :")
        //const sim = true

    console.log(idade == "sim" && escolaridade == "sim" && disponibilidade == "sim")

}