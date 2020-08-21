const input = require("readline-sync");

const nota1 = input.question ("Digite a Nota 1  ")

const nota2 = input.question ("Digite a Nota 2  ")

const nota3 = input.question ("Digite a Nota 3  ")

const nota4 = input.question ("Digite a Nota 4  ")

const nota5 = input.question ("Digite a Nota 5  ")

const total = parseFloat (nota1) + parseFloat (nota2) + parseFloat (nota3) + parseFloat (nota4) + parseFloat (nota5)

const media = total / 5

console.log (`Sua média é: ${media}  `)

if (media >= 7) {
    console.log ("Parabéns, você foi Aprovado!")
} else if (media >=5 && media <7){
    console.log ("Você ésta em Recuperação! Você ainda tem uma chance, não desperdice. ")
} else {
    console.log ("Você está Reprovado! Ano que vem Estude mais.")
}