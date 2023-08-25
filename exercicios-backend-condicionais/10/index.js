const caractere = "lala";

const letraAminuscula = "a"

if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o"
    || caractere === "u") {
    console.log("Vogal Minuscula")
} else if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O"
    || caractere === "U") {
    console.log("Vogal Maiuscula")
} else if (typeof caractere === "number") {
    console.log("Número")
} else {
    console.log("Consoante")
}