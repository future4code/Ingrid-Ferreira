// Exercícios de interpretação de código

//1. 
//a) O codigo pede pra o usuário um numero e faz uma divisão, se o resto for igual a 0
// a resposta é Passou no Teste, se o resto for diferente de 0 a resposta é Não passou
// no teste.
// b) Para numeros que o resto é igual a 0, 
//por exemplo numero pares vai ter resto zero, e ai vem a mensagem Passou no teste.  
// c) Para numeros que tem resto, por exemplo numero impares vai ter resto, e ai vem a 
// mensagem Não passou.
//2.
//a) Para verificar o que tem no estoque, e o preço dos produtos.
//b) O preço da fruta, Maçã, é, R$ 2,25, preco
//c) A mensagem que vai ser impressa é: O preço da fruta  pera  é  R$  5, vai trocar o preço
// da Pera de 5,5 para 5.
//3.
//a) a primeira linha, esta guardando o numero do usuário em uma variavel.
//b) Se o numero for 10, vai aparecer "Esse número passou no teste" / se colocar -10
// vai dar erro. 
//c) vai dar erro, porque o if é só de numero maio que 0. E não tem uma condição
// se o numero for menor que 0.

// Exercícios de escrita de código

//1.
// const idade = Number(prompt("Qual a sua idade?"))
// if (idade <= "17") {
//     console.log("Você não pode dirigir.")
// } else {
//     console.log("Você pode dirigir")
// }

//2.
// const periodo = prompt("Qual o periodo que você estuda (M - Matituno, V - Vespotino ou N - Noturno)")
// if (periodo === "M") {
//     console.log("Bom Dia!")
// } else if (periodo === "V") {
//     console.log("Boa Tarde!")
// } else {
//     console.log("Boa Noite!")
// }

//3.
// const periodo = prompt("Qual o periodo que você estuda (M - Matituno, V - Vespotino ou N - Noturno)")
// switch (periodo) {
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde")
//         break
//     case "N":
//         console.log("Boa Noite")
//         break
//     default:
//         console.log("Escolha um periodo, (M - Matituno, V - Vespotino ou N - Noturno)")
// }

//4.

// const generoFilme = prompt("Qual o genero do filme") === "Fantasia"
// const precoEntrada = Number(prompt("Qual o preço da entrada")) === 15

// function cinema(genero, preco) {
//     if (genero && preco) {
//         return "Bom Filme"
//     } else {
//         return "Escolha outro filme :("
//     }
// }

// console.log(cinema(generoFilme, precoEntrada))