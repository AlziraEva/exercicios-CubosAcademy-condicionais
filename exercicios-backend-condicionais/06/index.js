const alturaEmCm = 185;



if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("LIBERO")
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("PONTEIRO")
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("OPOSTO")
} else if (alturaEmCm > 205) {
    console.log("PONTEIRO")
}
else {
    console.log("REPROVADO")
}
