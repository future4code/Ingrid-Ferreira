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
    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2
    const booleano4 = !booleano3

    const a = booleano1 && booleano2 && !booleano4
    const b = (booleano1 && booleano2) || !booleano3
    const c = (booleano2 || booleano3) && (booleano4 || booleano1)
    const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
    const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

    const resposta = [a, b, c, d, e]

    return resposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
    let pares = []
    let contador = 0

    while (contador < n) {
        pares.push(contador * 2)
        contador++
    }
    return pares

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
    // preciso fazer uma variavel para colocar maiorNumero, maiorDivisivelporMenor
    // e diferenca
    const resultado = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: 0,
        diferenca: 0
    }

    // Preciso fazer um if else para saber qual o numero é maior
    if (num1 > num2) {
        resultado.maiorNumero = num1
        numeroEscolhidoMaior = num1
        numeroEscolhidoMenor = num2
    } else if (num1 < num2) {
        resultado.maiorNumero = num2
        numeroEscolhidoMaior = num2
        numeroEscolhidoMenor = num1
    } else {
        resultado.maiorNumero = num1

    }

    // Agora precisa usar o % para saber se o maior é divisivel por ele
    // mesmo, o resto dessa divisão tem que ser igual a 0.  
    if (numeroEscolhidoMaior % numeroEscolhidoMenor === 0) {
        resultado.maiorDivisivelPorMenor = true
    } else {
        resultado.maiorDivisivelPorMenor = false
    }

    // agora vou ter que saber a diferença entre os numeros maiores e menores
    // para isso precisa usar o operador condicional (?)
    // nessa parte precisa fazer um num1 - num2
    resultado.maiorNumero == num1 ? resultado.diferenca = num1 - num2 : resultado.diferenca = num2 - num1

    return resultado
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
    // precisa receber uma array com numeros, e depois no retorno precisa trazer uma nova
    //array com dois numeros, o maior e o menor. 
    // aqui vou precisar puxar um laço (for) que é sempre igual. 
    // depois dentro do for preciso de mais um laço para percorrer toda a array. 
    // e depois dentro do ultimo for, preciso colocar um if. 
    for (let i = 0; i < array.length; i++) {
        for (let a = 0; a < array.length; a++) {
            if (array[a] > array[a + 1]) {
                let temporario = array[a];
                array[a] = array[a + 1];
                array[a + 1] = temporario;
            }
        }
    }

    return [array[array.length - 2], array[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {
    // aqui vou usar o array.sort (dica do Professor)
    array.sort(function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })
    return array
}



// EXERCÍCIO 12
function filmeFavorito() {
    const dadosFilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    return dadosFilme


}

// EXERCÍCIO 13
function imprimeChamada() {
    // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
    const dadosFilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }

    return `Venha assistir ao filme ${dadosFilme.nome}, de ${dadosFilme.ano}, dirigido por ${dadosFilme.diretor} e estrelado por ${dadosFilme.atores[0]}, ${dadosFilme.atores[1]}, ${dadosFilme.atores[2]}, ${dadosFilme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
    retangulo = {
        largura: (lado1),
        altura: (lado2),
        perimetro: (2 * (lado1 + lado2)),
        area: (lado1 * lado2)
    }
    return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
    const dados = {
        nome: "Carlos",
        idade: 26,
        email: "carlos@labenu.com.br",
        endereco: "Rua do Futuro, 4"
    }
    const novosDados = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return novosDados

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
    const maioresDeIdade = arrayDePessoas.filter(array => {
        return array.idade > 17
    })
    return maioresDeIdade

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
    const menorDeIdade = arrayDePessoas.filter(array => {
        return array.idade < 18
    })
    return menorDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
    const multiplicaPorDois = array.map(dobro => dobro * 2)
    return multiplicaPorDois

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
    let novoArray = []
    array.map((numero) => {
        let numeroString = numero * 2
        novoArray.push(numeroString.toString())
    })
    return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
    let novoArray = []
    array.map((numero) => {
        if (numero % 2 === 0) {
            novoArray.push(`${numero} é par`)
        } else {
            novoArray.push(`${numero} é ímpar`)
        }
    })
    return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasQuePodemEntrar = pessoas.filter(p => p.altura >= 1.5 && p.idade > 14 && p.idade < 60)
    return pessoasQuePodemEntrar
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasBarradas = pessoas.filter(p => p.altura < 1.5 || p.idade < 15 || p.idade > 60)
    return pessoasBarradas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
    // precisa colocar o nome das pessoas em ordem alfabetica 
    // nos videos as pessoas usam laço for 
    //for (let i = 0; i < array.length; i++)

    // let teste = false;
    // for (let i = 0; i < consultasNome.length - 1; i++) {
    //     teste = true;


    return consultasNome.sort((a, b) => {
        if (a.nome < b.nome) return -1
        return 0
    })

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

    const arrumarData = (a, b) => {
        return new Date(a.dataDaConsulta).getTime() - new Date(b.dataDaConsulta).getTime()
    }

    // transformar em padrão americano 

    consultasData.forEach(consulta => {
        consulta.dataDaConsulta = consulta.dataDaConsulta.split('/').reverse().join('-')
    })

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
    // const contas = [
    //     { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    //     { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    //     { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    //     { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    //     { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    //     { cliente: "Soter", saldoTotal: 1200, compras: [] }
    // ]

    return contas.map(conta => {
        return {
            cliente: conta.cliente,
            saldoTotal: conta.saldoTotal - conta.compras.reduce((acumulador, atual) => acumulador += atual, 0),
            compras: conta.compras
        }
    })

}