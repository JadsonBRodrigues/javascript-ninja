/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = 'Campeonato Paraibano'

console.log(championship)
Campeonato Paraibano


/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
 var teams = ['Treze', 'Serra Branca', 'Botafogo', 'Sousa', 'CSP'];
 
 console.log(teams)


/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/


function showTeamPosition(position) {
  // Ajustar a posição para o índice do array
  var index = position - 1;

  // Verificar se a posição está entre os 5 primeiros times
  if (index >= 0 && index < 5) {
    return `O time que está em ${position}º lugar é o ${teams[index]}.`;
  } else {
    return "Não temos a informação do time que está nessa posição.";
  }
}


/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition (1)
'O time que está em 1º lugar é o Treze.'

showTeamPosition (2)
'O time que está em 2º lugar é o Serra Branca.'

 showTeamPosition (3)
'O time que está em 3º lugar é o Botafogo-PB.'

showTeamPosition (4)
'O time que está em 4º lugar é o Sousa.'

 showTeamPosition (6)
'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var number = 20; // Início da contagem

while (number <= 30) { // Condição para executar o loop
  console.log(number); // Mostra o número atual no console
  number++; // Incrementa o número em 1 a cada interação
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
    
*/
function convertToHex (cor) {
... var colours = {
... 'Red':  {hexadecimal: '#FF0000'},
... 'Blue': {hexadecimal: '#0000FF'},
... 'Yellow': {hexadecimal: '#FFFF00'},
... 'Green': {hexadecimal: '#00FF00'},
... 'Pink': {hexadecimal: '#FFC0CB'},
... }
... switch (cor) {
... case 'Red':
... return `O hexadecimal para a cor ${cor} é ${colours[cor].hexadecimal}.`;
... break;
... case 'Blue':
... return `O hexadecimal para a cor ${cor} é ${colours[cor].hexadecimal}.`;
... break;
... case 'Yellow':
... return `O hexadecimal para a cor ${cor} é ${colours[cor].hexadecimal}.`;
... break;
... case 'Green':
... return `O hexadecimal para a cor ${cor} é ${colours[cor].hexadecimal}.`;
... break;
... case 'Pink':
... return `O hexadecimal para a cor ${cor} é ${colours[cor].hexadecimal}.`;
... break;
... default:
... return `Não temos o equivalente hexadecimal para ${cor}.`;
... }
... }

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex ('Red')
convertToHex ('Blue')
convertToHex ('Yellow')
convertToHex ('White')
convertToHex ('Grey')
convertToHex ('Green')
convertToHex ('Pink')
convertToHex ('Black')

