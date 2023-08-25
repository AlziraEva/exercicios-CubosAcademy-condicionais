//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 400;


const valorCadaParcela = (valorDoProduto / 100) / quantidadeDoParcelamento
const valorPacelaRestante = ((valorDoProduto / 100) - valorPago) / valorCadaParcela
const valorApagarParcela = ((valorDoProduto / 100) - valorPago) / valorPacelaRestante
console.log(`Restam ${valorPacelaRestante} parcelas de R$ ${valorApagarParcela.toFixed(2)}`)