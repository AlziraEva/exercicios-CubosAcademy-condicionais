//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 100000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 100000;

const valorDaParcela = (rendaMensalEmCentavos * 0.18) / 100
// Valor da parcela quando o estudante pode pagar
if (rendaMensalEmCentavos >= 200000) {
    if (mesesDecorridos <= 60) {
        if (totalJaPagoPeloAluno < 1800000) {
            console.log(`Valor da parcela paga pelo aluno esse mês é de R$ ${valorDaParcela}`)
        }
    }
}
// Quando o estudante não pode pagar
if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
} else if (mesesDecorridos > 60) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois os meses decorridos são maiores do que 60 .")
} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o valor total pago pelo estudante está igual ou acima de R$ 1800000. ")
}