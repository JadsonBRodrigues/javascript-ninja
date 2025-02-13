/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/

var sum = function calculateSum (a,b) {
... return a + b;
... }

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/

> var valor0 = 3;
> var valor1 = 10;

> console.log(`A soma de ${valor0} e ${valor1} é igual a ${sum(valor0,valor1)}.`);
A soma de 3 e 10 é igual a 13.

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}.`);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName (){
... return showName.name}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var showName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
 console.log(`A função ${showName.name} retorna ${showName()}.`);
A função showName retorna showName.

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(operator) {
  return function (a, b) {
    var resultado;

    // Verifica qual operação será realizada
    switch (operator) {
      case '+':
        resultado = a + b;
        break;
      case '-':
        resultado = a - b;
        break;
      case '*':
        resultado = a * b;
        break;
      case '/':
        resultado = b !== 0 ? num1 / num2 : "Erro: divisão por zero";
        break;
      case '%':
        resultado = a % b;
        break;
      default:
        return "Operação inválida.";
    }

    return `Resultado da operação: ${a} ${operator} ${b} = ${resultado}.`;
  };
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(2,2));

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var substraction = calculator('-');
var multiplication = calculator('*');
var division = calculator ('/');
var mod = calculator ('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(substraction(5,2));
Resultado da operação: 5 - 2 = 3.

console.log(multiplication(10,5));
Resultado da operação: 10 * 5 = 50.

console.log(division(50,5));
Resultado da operação: 50 / 5 = 10.

console.log(mod(50,10));
Resultado da operação: 50 % 10 = 0.
