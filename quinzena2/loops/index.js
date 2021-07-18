// Exercícios de interpretação de código

// 1. Vai imprimir 10.

// 2. 
// a) Vai imprimir 19, 21, 23, 25, 27, 30
// b)

// 3. Vai imprimir 
// *
// **
// ***
// ****

// Exercícios de escrita de código

// 1.

// let numPets = Number(prompt("Quantos pets vc tem ? "))
// let arrayPets = []
// let novosPets = " "

// if (numPets === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     for (let i = 0; i < numPets; i++) {
//         novosPets = prompt("Qual o nome do pet ?")
//         arrayPets.push(novosPets)
//     }
// }

// console.log([arrayPets])

// 2.
const original = [20, 40, 11, 105, 97, 80, 73, 38, 100, 50]

//a)

// function exercicio2(arrayNum) {

//     for (let i = 0; i < arrayNum.length; i++) {
//         console.log(arrayNum[i])
//     }
// }

// exercicio2(original)

//b)
// exercicio2(original)

// function exercicio2(arrayDivisao) {
//     for (let i = 0; i < arrayDivisao.length; i++) {
//         console.log(arrayDivisao[i] / 10)
//     }
// }

// exercicio2(original)

//c) 


// function pegaPares(arrayNumeros) {
//     let soPares = []

//     for (let i = 0; i < arrayNumeros.length; i++) {
//         if (arrayNumeros[i] % 2 === 0) {
//             soPares.push(arrayNumeros[i])
//         }
//     }

//     return soPares
// }

// console.log(pegaPares(original))



//d) 

// function exercicio2(arrayNum) {

//     for (let i = 0; i < arrayNum.length; i++) {
//         console.log("O elemento do índex " + i + " é " + arrayNum[i])
//     }
// }

// exercicio2(original)


// e)

function pegaMaior(arrayNumeros) {
    let maiorNumero = 0

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > maiorNumero) {
            maiorNumero = arrayNumeros[i]
        } else {

        }
        //console.log("O maior número é " + maiorNumero + " e o menor é " + )
    }

    return maiorNumero
}

console.log(pegaMaior(original))