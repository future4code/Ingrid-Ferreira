/* Exercícios de interpretação de código 
1. aparece o numero 10 e o 5 no console.*/

/* 
2. Vai aparecer o 10 3 vezes.  */

/* 3. p por horasDia 
      t por valorDia */


/*Exercícios de escrita de código 
1.

const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
*/ //Como não usamos o (Number) na idade ele vem como string.

/*2.
let trabalhoTecnologia = prompt("Você trabalha com Tecnologia?")
let gosto = prompt("Você gosta da area?")
let houveIndicacao = prompt("Houve alguma indicação?")
console.log("Olá, você trabalha com tecnologia?", trabalhoTecnologia, "você gosta da area?",
    gosto,
    "Houve alguma indicação?", houveIndicacao) */

/*3.

let a = 10
let b = 25
let c = a
a = b
b = c


// Aqui faremos uma lógica para trocar os valores
// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10 */


/*  DESAFIO

1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y.

let primeiroNumero = Number(prompt("Escreva um número"))
let segundoNumero = Number(prompt("Escreva mais um numero"))

let primeiroResultado = primeiroNumero + segundoNumero
let segundoResultado = primeiroNumero * segundoNumero

console.log("O", primeiroNumero, "somado ao", segundoNumero, "resulta em", primeiroResultado)
console.log("O", primeiroNumero, "mutiplicado pelo", segundoNumero, "resulta em",
 segundoResultado) */

//

// const numero1 = Number(prompt("Digite o primeiro numero"))
// const numero2 = Number(prompt("Digite o segundo numero"))

// console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
// console.log("O primeiro numero é diferente do segundo?", numero1 !== numero2)
// console.log("O primeiro numero é maior que o segundo?", numero1 > numero2)
// console.log("O primeiro numero é menor que o segundo?", numero1 < numero2)

// const a = true
// const b = false
// const c = true
// const d = true
// const e = true

// console.log(a && b) // true e false == false

// console.log(a && b && c && d && e) // true e false == false

// console.log(a && c && d && e) // true e true == true

// const a = true
// const b = false
// const c = true

// console.log("a && b", a && b)
// console.log("b && c", b && c)
// console.log("a && c", a && c)
// console.log("a && b && c", a && b && c)

// const a = true
// const b = false
// const c = true

// console.log("a || b", a || b)
// console.log("b || c", b || c)
// console.log("a || c", a || c)
// console.log("a || b || c", a || b || c)

//

const nome = prompt("Qual seu nome?")
const anoNascimento = Number(prompt("Em que ano você nasceu?"))
const anoAtual = Number(prompt("Em que ano estamos?"))

//Olá, nome
//Idade:


console.log("Olá", nome)
console.log(anoAtual - anoNascimento)
console.log("Idade:", idadeAtual >= 18)