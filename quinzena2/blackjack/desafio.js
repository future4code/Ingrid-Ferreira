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

// precisa colocar o comprarCarta em uma array
// vou criar uma array vazia []

const cartasUsuario = []
const cartasPC = []
let pontuacaoUsuario = 0
let pontuacaoPC = 0

// agora vou perguntar se o usuário quer começar o jogo se sim, uma mensagem de bem vindo. Se não terminar o Jogo. 

if (confirm("Quer iniciar uma nova rodada?")) {
    console.log("Bem vindo ao Jogo de BlackJack")

    primeirasCartasUser()
    primeirasCartasPC()

    // se o usuário ou PC tirarem a carta "A" precisa sortear novas cartas, nas duas primeiras cartas
    // includes() determina se um array contém um determinado valor 

    while (cartasUsuario[0].texto.includes('A') && cartasUsuario[1].texto.includes('A')) {
        primeirasCartasUser()

    }

    while (cartasPC[0].texto.includes('A') && cartasPC[1].texto.includes('A')) {
        primeirasCartasPC()
    }

    let cartasJogador1 = playerCards()
    let cartasJogardo2 = pcCards()

    // join() serve para juntar elementos
    console.log(`Suas cartas são ${cartasJogador1.join(" ")}. A carta revelada do computador é ${cartasJogardo2[0]}\nDeseja comprar mais uma carta?`)
}
// perguntar para o usuário se ele quer comprar mais cartas. 
// reduce() vai trazer um unico resultado 
// Enquanto a soma não chegar a 21 comprarCarta
while (confirm("Jogador, deseja comprar uma nova carta?") && pontuacaoUsuario <= 21) {
    cartasJogador.push(comprarCarta())
    cartasJogador1 = playerCards()
    pontuacaoUsuario = cartasJogador.reduce((valorInicial, valorPropriedade) => valorInicial + valorPropriedade.valor, 0)
    if (pontuacaoUsuario >= 21) {
        break
    }
    console.log(`Suas cartas são ${cartasJogador1.join(" ")}. A carta revelada do computador é ${cartasJogardo2[0]}\nDeseja comprar mais uma carta?`)

}