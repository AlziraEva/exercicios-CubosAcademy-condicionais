const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

const rendimentoMinimo = 2855970
// isenta ( doença ou aposentada)
if (aposentada) {
    console.log("Isenta")
} else if (portadoraDeDoenca) {
    console.log("Isenta")
} else if (totalDeRendimentos <= rendimentoMinimo) {
    console.log(" VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
    console.log("PEGA LEÃO")
}