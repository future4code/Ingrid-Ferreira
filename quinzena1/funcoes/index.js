// Exercícios de interpretação de código
//1.
//a.10 e 50
//b. 

//2.
//a.
//b.

// Exercícios de escrita de código

//1.
//a) 

// function exercicio1a(nome, idade, cidade, profissao) {
//     const frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou${profissao}.
//             `)
//     return frase
// }

// const resultado = exercicio1a("Ingrid", 28, "São Paulo", " Analista de Suporte")
// console.log(exercicio1a("Ingrid", 28, "São Paulo", " Analista de Suporte"))

//b) 

// function exercicio1b(nome, idade, cidade, profissao) {
//     const frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou${profissao}.
//         `)
//     return frase
// }

// const resultado = exercicio1b("Ingrid", 28, "São Paulo", " Analista de Suporte")

// console.log(exercicio1b("Ingrid", 28, "São Paulo", " Analista de Suporte"))

// 3.

//a)

// function execicio2a(num1, num2) {
//     const resultadoA = num1 + num2
//     return resultadoA
// }

// const respostaA = (execicio2a(2, 3))

// console.log(execicio2a(2, 3))

//b)

// function execicio2b(num1, num2) {
//     const resultadoB = num1 >= num2
//     return resultadoB
// }

// const respostaB = (execicio2b(8, 3))

// console.log(execicio2b(8, 3))


//c) 

// function exercicio2c(num1) {
//     const total = num1 / 2
//     const resultadoC = total % 2 == 0
//     return resultadoC
// }

// const resultadoC = (8)

// console.log(exercicio2c(8))

//d)

// const exercicio2d = (texto) => {
//     const mensagem = texto.length + "\n" + texto.toUpperCase()
//     return mensagem
// }

// console.log(exercicio2d("Ola mundo!"))


// 3.
const num1 = Number(prompt("Insira um número"))
const num2 = Number(prompt("Insira outro número"))

const soma = (num1, num2) => {
    return num1 + num2

}

console.log(soma(num1, num2))

const subtracao = (num1, num2) => {
    const subtracao = num1 - num2
    return subtracao

}

console.log(subtracao(num1, num2))

const multiplicacao = (num1, num2) => {
    const multiplicacao = num1 * num2
    return multiplicacao

}

console.log(multiplicacao(num1, num2))

const divisao = (num1, num2) => {
    const divisao = num1 / num2
    return divisao

}

console.log(divisao(num1, num2))