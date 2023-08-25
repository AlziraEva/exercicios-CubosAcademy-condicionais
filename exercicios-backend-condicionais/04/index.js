const ladoA = 6
const ladoB = 6

if (ladoA === 0 && ladoB === 0) {
    console.log("Bucha de Branco")
} else if (ladoA && ladoB === 1) {
    console.log("Bucha Ás")
} else if (ladoA && ladoB === 2) {
    console.log("Bucha Duque")
} else if (ladoA && ladoB === 3) {
    console.log("Bucha Terno")
} else if (ladoA && ladoB === 4) {
    console.log("Bucha Quadra")
}
else if (ladoA && ladoB === 5) {
    console.log("Bucha Quina")
} else {
    console.log("Bucha Sena")
}