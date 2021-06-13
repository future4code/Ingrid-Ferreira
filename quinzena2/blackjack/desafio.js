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
console.log("Bem vindo ao jogo de Blackjack!")

// agora vou perguntar se o usuário quer começar o jogo se sim, uma mensagem de bem vindo. Se não terminar o Jogo. 
let jogo = (confirm("Quer iniciar uma nova rodada?"))

if (jogo) {
    let primeiraCarta = comprarCarta()
    let segundaCarta = comprarCarta()
    let carta1Pc = comprarCarta()
    let carta2Pc = comprarCarta()

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
    let resultadorPc = carta1Pc.valor + carta2Pc.valor
    let maisCartas = ""
    let novaCartaPc = ""

    // agora precisa fazer uma condição que o resultado do Usuario e do PC seja <= a 21
    // perguntar para o usuário se ele quer comprar mais cartas. 
    while ((resultadoUsuario <= 21) && confirm(`Suas cartas são ${primeiraCarta.texto} ${segundaCarta.texto} ${maisCartas}. A carta revelada do computador é ${carta1Pc.texto}
    Deseja comprar mais uma carta?`)) {
        let maisCartas = comprarCarta();
        resultadoUsuario = maisCartas.valor + resultadoUsuario
        maisCartas = novasCartas + maisCartas.texto
    }

    while (resultadorPc < resultadoUsuario && resultadoUsuario <= 21) {
        let novaCartaPc = comprarCarta();
        somaCartaPc = novaCartaPc.valor + resultadorPc
        novaCartaPc = novaCartaPc + novaCartaPc.texto
    }