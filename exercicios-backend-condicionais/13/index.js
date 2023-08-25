//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;



if (tipoDePagamento === "credito") {
    const credito = (valorDoProduto - (valorDoProduto * 0.05)) / 100
    console.log(`Valor a ser pago: R$ ${credito.toFixed(2)}`)
} else if (tipoDePagamento === "cheque") {
    const cheque = (valorDoProduto - (valorDoProduto * 0.03)) / 100
    console.log(`Valor a ser pago: R$ ${cheque.toFixed(2)}`)
} else if (tipoDePagamento === "Dinheiro" || tipoDePagamento === "debito") {
    const dinheiroOudebito = (valorDoProduto - (valorDoProduto * 0.10)) / 100
    console.log(`Valor a ser pago: R$ ${dinheiroOudebito.toFixed(2)}`)
}