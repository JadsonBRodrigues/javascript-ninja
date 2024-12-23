Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

- var myarray = [1, 'amor', 5*30, null, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

- function func1 ([arr]) {
... return arr;
... }

/*
Imprima o segundo índice do array retornado pela função criada acima.

- (func1 (myarray)[1]);
- 'amor'

*/
/*

Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function func2 (arr, index) {
    return arr[index];

}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

- var values = [5, 'amor', undefinied, function() {}, true];

- values
[ 5, 'amor', undefined, [Function (anonymous)], true ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

- func2(values, 0)
- func2(values, 1)
- func2(values, 2)
- func2(values, 3)
- func2(values, 4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book (nome) {
... var livros = {
...
... 'Vento Airoso': {
... quantidadePaginas: 50,
... autor: 'José',
... editora: 'PTM'},
...
... 'Rosa Azul': {
... quantidadePaginas: 200,
... autor: 'Joana',
... editora: 'Sucesso'},
...
... 'Joaquina II': {
... quantidadePaginas: 342,
... autor: 'Maria',
... editora: 'Carrilhos'}
... }
...
... return !nome ? livros : livros[nome];


> book ('Vento Airoso')
{ quantidadePaginas: 50, autor: 'José', editora: 'PTM' }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
 
> book ()
{
  'Vento Airoso': { quantidadePaginas: 50, autor: 'José', editora: 'PTM' },
  'Azul do Mar': { quantidadePaginas: 155, autor: 'Maria', editora: 'Sucesso' },
  'Piaçava': { quantidadePaginas: 224, autor: 'João', editora: 'Celestial' }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"

> function book (nome) {
... var livros = {
...
... 'Vento Airoso': {
... quantidadePaginas: 50,
... autor: 'José',
... editora: 'PTM'},
...
... 'Rosa Azul': {
... quantidadePaginas: 200,
... autor: 'Joana',
... editora: 'Sucesso'},
...
... 'Joaquina II': {
... quantidadePaginas: 342,
... autor: 'Maria',
... editora: 'Carrilhos',}
... }
... if (nome) {
... return livros[nome] && `O livro ${nome} tem ${livros[nome].quantidadePaginas} páginas!`
... } else {
... return livros;
... }
... }

*/
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
> function book (nome) {
... var livros = {
...
... 'Vento Airoso': {
... quantidadePaginas: 50,
... autor: 'José',
... editora: 'PTM'},
...
... 'Rosa Azul': {
... quantidadePaginas: 200,
... autor: 'Joana',
... editora: 'Sucesso'},
...
... 'Joaquina II': {
... quantidadePaginas: 342,
... autor: 'Maria',
... editora: 'Carrilhos',}
... }
... if (nome) {
... return livros[nome] && `O autor do livro ${nome} é ${livros[nome].autor}!`
... } else {
... return livros;
... }
... }


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."

> function book (nome) {
... var livros = {
...
... 'Vento Airoso': {
... quantidadePaginas: 50,
... autor: 'José',
... editora: 'PTM'},
...
... 'Rosa Azul': {
... quantidadePaginas: 200,
... autor: 'Joana',
... editora: 'Sucesso'},
...
... 'Joaquina II': {
... quantidadePaginas: 342,
... autor: 'Maria',
... editora: 'Carrilhos',}
... }
... if (nome) {
... return livros[nome] && `O livro ${nome} foi publicado pela editora ${livros[nome].editora}!`
... } else {
... return livros;
... }
... }
