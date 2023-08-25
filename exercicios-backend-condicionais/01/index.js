const jogada1 = "pedra"
const jogada2 = "papel"

// papel e pedra (venceu)
// tesoura e papel (vendeu)
// pedra e tesoura(venceu)
const papel = "papel"
const tesoura = "tesoura"
const pedra = "pedra"

// jogada 1 venceu
if (jogada1 === tesoura && jogada2 === papel) {
    console.log("Jogada 1")
} else if (jogada1 === papel && jogada2 === pedra) {
    console.log("Jogada 1")
} else if (jogada1 === pedra && jogada2 === tesoura) {
    console.log("Jogada 1")
}// jogada 2 venceu
else if (jogada2 === pedra && jogada1 === tesoura) {
    console.log("Jogada 2")
} else if (jogada2 === papel && jogada1 === pedra) {
    console.log("Jogada 2")
} else if (jogada2 === pedra && jogada1 === tesoura) {
    console.log("Jogada 2")
} //empate
else {
    console.log("Empate")
}
