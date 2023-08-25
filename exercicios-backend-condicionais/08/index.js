const idade = 50;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = true;

// acesso negado
if (idade < 12 || idade > 65) {
    console.log("Acesso negado")
} else if (possuiPatologia) {
    console.log("Acesso negado")
} else if (altura < 150) {
    console.log("Acesso negado")
} else if (idade < 18 || ehEstudante) {
    console.log("10 reais")
} else {
    console.log(" 20 reais")
}