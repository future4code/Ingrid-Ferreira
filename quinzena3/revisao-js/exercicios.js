// EXERCÍCIO 01
function inverteArray(array) {
    const inverterArray = array.map((valor, i) =>
        array[array.length - 1 - i]);
    return inverterArray

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i] ** 2)

        }

    }
    return numerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])

        }

    }
    return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {


    let maiorNumero = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero


}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
    // return 'Escaleno'
    // return 'Equilátero'
    // return 'Isósceles'

    if (a !== b && b !== c && c !== a) {
        return 'Escaleno'
    } else if (a == b && b == c && c == a) {
        return 'Equilátero'
    } else if (a === b && a !== c) {
        return 'Isósceles'
    }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
    // Formato do objeto a ser retornado:
    // {
    //   maiorNumero: X,
    //   maiorDivisivelPorMenor: Y,
    //   diferenca: Z
    // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {
    array.sort
}

// EXERCÍCIO 12
function filmeFavorito() {
    const dadosFilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    console.log(dadosFilme)
}

// EXERCÍCIO 13
function imprimeChamada() {
    // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}