// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 

//    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// console.log com mensagem de bem vindo

console.log("Bem vindo ao jogo de Blackjack!")
    // agora vou perguntar se o usuário quer começar o jogo se sim, uma mensagem de bem vindo. Se não terminar o Jogo. 

let jogo = (confirm("Quer iniciar uma nova rodada?"))
if (jogo) {
    let primeiraCarta = comprarCarta();
    let segundaCarta = comprarCarta();
    let carta1Pc = comprarCarta();
    let carta2Pc = comprarCarta();

    // se o usuário ou PC tirarem a carta "A" precisa sortear novas cartas, nas duas primeiras cartas
    // includes() determina se um array contém um determinado valor 
    while (primeiraCarta.texto.includes("A") && segundaCarta.texto.includes("A") || carta1Pc.texto.includes("A") && carta2Pc.texto.includes("A")) {
        primeiraCarta = comprarCarta();
        segundaCarta = comprarCarta();
        carta1Pc = comprarCarta();
        carta2Pc = comprarCarta();
    }
    // declar variaveis com a soma dos valores das cartas.
    let resultadoUsuario = primeiraCarta.valor + segundaCarta.valor
    let resultadoPc = carta1Pc.valor + carta2Pc.valor
    let maisCartas = ""
    let novasCartasPc = ""
        // agora precisa fazer um laço que o resultado do Usuario e do PC e se for menor ou igual a 21
        //  perguntar para o usuário se ele quer comprar mais cartas. 
    while ((resultadoUsuario <= 21) && confirm(`Suas cartas são ${primeiraCarta.texto} ${segundaCarta.texto} ${maisCartas}. A carta revelada do computador é ${carta1Pc.texto}
   Deseja comprar mais uma carta?`)) {
        let novaCarta = comprarCarta();
        resultadoUsuario = novaCarta.valor + resultadoUsuario
        maisCartas = maisCartas + novaCarta.texto
    }

    // precisa fazer a mesma coisa que fiz em cima, par ao PC, mas sem o confirm, e agora o
    // resultado do PC precisa ser maior que do usuário e igual ou menor que 21. 
    while (resultadoPc < resultadoUsuario && resultadoUsuario <= 21) {
        let novaCartaPc = comprarCarta();
        resultadoPc = novaCartaPc.valor + resultadoPc
        novasCartasPc = novasCartasPc + novaCartaPc.texto
    }
    // preciso guardar a informação do vencedor em uma variavel 
    let ganhador
        // agora fazer um if else para saber se o resultadoUsuario maior que o resultado PC
        // e depois um alert para trazer a frase se o usuário ganhou ou não. 
    if ((resultadoUsuario <= 21 && resultadoUsuario > resultadoPc) || resultadoPc > 21) {
        ganhador = "O usuário ganhou!"
    } else if ((resultadoPc <= 21 && resultadoPc > resultadoUsuario) || resultadoUsuario > 21) {
        ganhador = "O Computador ganhou!"
    }
    if (ganhador) {
        alert(`Suas cartas são ${primeiraCarta.texto} ${segundaCarta.texto} ${maisCartas}. Sua pontuação é  ${resultadoUsuario}.
      As cartas do computador são ${carta1Pc.texto} ${carta2Pc.texto} ${novasCartasPc} . A pontuação do computador é ${resultadoPc}.  
      ${ganhador}`)
    } else {
        console.log(`EMPATE`)
    }


} else {
    console.log("O jogo acabou!")
}