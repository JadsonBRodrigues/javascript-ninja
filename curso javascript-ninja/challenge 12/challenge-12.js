
(function () {

    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */

    var person = {

    'name': 'Jadson',
    'lastname': 'Rodrigues',
    'age': 31}

    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */

    books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

    books.push ({name: 'O Vento', Pages: 112});

    OU

    books[0] = {Name: 'O Vento', Pages: 112};
    books[1] = {Name: 'A Lua Cheia', Pages: 577};
    books[2] = {Name: 'Paguá', Pages: 32};

    /*
    Mostre no console todos os livros.
    */

    console.log(books);

    /*
    Remova o último livro, e mostre-o no console.
    */
    books.pop()
    var last = books.pop();
    console.log(last);

    /*
    Mostre no console os livros restantes.
    */
    console.log(books)

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?

    var convertBooks = JSON.stringify(books);

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(JSON.stringify(convertBooks));

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log( '\nAgora os livros são objetos novamente:',  JSON.parse(convertBooks) );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
   
   for (var i = 0; i < books.length; i++) {
    for (var prop in books [i])
        console.log (prop ${books[i][prop]})


   }
    

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */

    var myName = ['J', 'A', 'D', 'S', 'O', 'N'];

    console.log( '\nMeu nome é:', myName );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log (myName.join(''));

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    myName.reverse()
    console.log( '\nMeu nome invertido é:', myName );

    /*
    Mostre todos os itens do array acima, ordenados alfabéticamente.
    */
    console.log (myName.sort());
    console.log( '\nAgora em ordem alfabética:', myName);

}) ();


Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
?

// Agora, apresente-se ;)
?


pessoa.apresentacao = function () {
    var artigo = 'o';
    var idade = 'anos';
    var plural = 'metros';
    if (pessoa.sexo === 'Feminino') {
        artigo = 'a'};
    if (pessoa.idade === 1) {
        idade = 'ano'};
    if (pessoa.caminhouQuantosMetros === 1) {
        plural = 'metro'}

... return `Olá, eu sou ${artigo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idade}, ${pessoa.altura},
meu peso é ${pessoa.peso} kg e, só hoje, já caminhei ${pessoa.caminhouQuantosMetros} ${plural}!`}