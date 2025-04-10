/*
Crie um array com 5 items (tipos variados).
*/
var arr = [20, 'rosa', {a:1, b: 2}, 1 + 2, true];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem (item) {
... arr.push(item);
... return arr;
... }

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(['palmeira', {x: 25}, null]) );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${arr[7][1].x}.`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O primeiro array criado tem ${arr.length} itens.`)


/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array criado tem ${arr[7].length} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?

> var num = 10;

> while (num >= 10 && num <= 20) {
... num % 2 === 0 ? console.log(num) : '';
... num++;
... }
10
12
14
16
18
20

Na mesma ideia do exercício acima: mostre agora os números ímpares.
console.log( 'Números ímpares entre 10 e 20:' );
*/


 while (num >= 10 && num <20) {
... if (num++ % 2 === 0) console.log(num)}
11
13
15
17
19


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.

console.log( 'Números pares entre 100 e 120:' );
*/

for (var num = 100; num >= 100 && num <=120; num++) {
... if (num % 2 === 0) ? console.log(num) : '';
... }

/*
console.log( 'Números ímpares entre 111 e 125:' );
*/

for (var num1 = 110; num1 >=110 && num1 <=125; num1) {
...  if (num1++ % 2 === 0) console.log(num1) }