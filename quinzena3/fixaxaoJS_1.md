function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
ˋˋˋsalario = 2000

ˋˋˋif (qtdeCarrosVendidos !== 0){
  ˋˋˋconst precoCarro =valorTotalVendas/qtdeCarrosVendidos
  ˋˋˋconst comissao = qtdeCarrosVendidos * (100 + precoCarro * 0.05)
  ˋˋˋconst salarioComComissao = salario + comissao
ˋˋˋreturn salarioComComissao}else {return salario}


}