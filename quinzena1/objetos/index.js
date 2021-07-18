// Exercícios de interpretação de código
//1.
//a. Matheus Nachtergaele / Virginia Cavendish
// canal:"Globo", horario: "14h"

//2.
// a) O que vai ser impresso no console?
// Vai aparecer a const cachorro, gato e tartaruga, com as alterações no
// nome de Juca, para Juba e depois Jubo. Mas as outras informações mantem, só troca o nome.
// b) Faz um spread

//3.
// a) False e Underfined
//b) O False porque ele acessou a chave backernder que é False. Não tem a chave altura, 
//por isso o underfined.

// Exercícios de escrita de código

//1. 
//

// const pessoa = {
//     nome: "Maria",
//     apelidos: ["Zeze", "MaZe", "Mariazinha"]
// }

// function nomePessoa(Mensagem) {

//     return Mensagem
// }


// const novosApelidos = {
//     ...pessoa,
//     apelidos: ["Ma", "Mama", "Boneca"]
// }

// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)
// console.log(`Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]}, ${novosApelidos.apelidos[2]}`)


//2.
//a. e b.
// const propriedades1 = {
//     nome: "Paulo",
//     idade: 25,
//     profissao: "Vendendor de Vinhos"
// }

// const propriedades2 = {
//     nome: "Gabriel",
//     idade: 24,
//     profissao: "Analista de Suporte"
// }

// console.log([propriedades1.nome, propriedades1.nome.length, propriedades1.idade, propriedades1.profissao, propriedades1.profissao.length])
// console.log([propriedades2.nome, propriedades2.nome.length, propriedades2.idade, propriedades2.profissao, propriedades2.profissao.length])


//3.

// const carrinho = [
//     Object = { nome: "Mamao", disponibilidade: true },
//     Object = { nome: "Banana", disponibilidade: true },
//     Object = { nome: "Uva", disponibilidade: false }
// ]

// function mercado() {
//     let frutas = carrinho.push({ nome: "Limao", disponibilidade: true })
//     return frutas
// }


// console.log(carrinho)
// console.log(mercado)