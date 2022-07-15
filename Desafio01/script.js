let firstNumber = Number(prompt("Vamos calcular a interação entre dois números.\nDigite o primeiro"));
let secondNumber = Number(prompt("Agora digite o segundo"));

let numberSum = firstNumber + secondNumber;
let numberSub = firstNumber - secondNumber;
let numberMulti = firstNumber * secondNumber;
let numberDiv = firstNumber / secondNumber;
let numberRem = firstNumber % secondNumber;
let oddEven;
let sameNumber;

(numberSum%2) == 0 ? oddEven = "par" : oddEven = "ímpar";
firstNumber == secondNumber ? sameNumber = "são" : sameNumber = "não são";

alert (`    A soma dos números digitados é: ${numberSum};
    A subtração é: ${numberSub};
    A multiplicação é: ${numberMulti};
    A divisão é: ${numberDiv};
    E o resto da divisão é: ${numberRem};

    A soma dos números foi ${oddEven};
    E os dois números ${sameNumber} iguais;
`);
