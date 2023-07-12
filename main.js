// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let sumNumber1 = prompt("Digite um número para realizarmos uma soma:")

let sumNumber2 = prompt("Agora digite outro:")

let sum = alert(
  `A soma dos dois números inseridos é de ${
    Number(sumNumber1) + Number(sumNumber2)
  }`
)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número"

let checkType = 2

if (typeof checkType == "number") {
  alert("É um número")
} else {
  alert("Não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string"

let checkIfString = "Olá mundo!"

if (typeof checkIfString == "string") {
  alert("É uma string")
} else {
  alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano"

let checkIfBoolean = true

if (typeof checkIfBoolean == "boolean") {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let sub1 = Number(prompt("Digite um número para realizarmos uma subtração:"))
let sub2 = Number(prompt("Agora digite outro:"))

let subtract = alert(
  `A subtração dos dois números inseridos é de: ${sub1 - sub2}`
)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let multi1 = Number(
  prompt("Digite um número para realizarmos uma multiplicação:")
)
let multi2 = Number(prompt("Agora digite outro:"))

let multiplication = alert(
  `A multiplicação dos dois números inseridos é de: ${multi1 * multi2} `
)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let div1 = Number(prompt("Digite um número para realizarmos uma divisão:"))
let div2 = Number(prompt("Agora digite outro:"))

let division = alert(
  `A divisão dos dois números inseridos é de: ${div1 / div2}`
)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par"

let isEven = Number(
  prompt("Digite um número qualquer e vamos verificar se ele é par:")
)

if (isEven % 2 == 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar."

let isOdd = Number(
  prompt("Digite um número qualquer e vamos verificar se ele é ímpar:")
)

if (isOdd % 2 != 0) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}
