

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
    // ?
    console.log( 'Propriedades de "person":' );


    var person = {
        'name': 'Jadson',
        'lastname':'Rodrigues',     
        'age': 31}

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    
    console.log(Object.keys(person))

    /*
    Crie um array vazio chamado `books`.
    */
    
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    // ?
    console.log( '\nLista de livros:' );

    books.push ({name: 'A força da vida', pages: 112});
    books.push ({name: 'Azul do Mar', pages: 47});
    books.push ({name: 'A Vinha', pages: 900});
    /*

    Mostre no console todos os livros.
    */
    
    console.log(books)

    /*
    Remova o último livro, e mostre-o no console.
    */
   
    var lastBook = books.pop();

    console.log( '\nLivro que está sendo removido:', lastBook );

    /*
    Mostre no console os livros restantes.
    */

    console.log( '\nAgora sobraram somente os livros:', books );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */

    console.log( '\nLivros em formato string:',JSON.stringify(books) );

    /*
    Mostre os livros nesse formato no console:
    */
    
    var convertedBooks = JSON.stringify(books);
    console.log(convertedBooks)

    /*
    Converta os livros novamente para objeto.
    */
   
    var stringBooks = JSON.parse(convertedBooks);

    console.log( '\nAgora os livros são objetos novamente:', stringBooks );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    
    for (var i = 0; i < books.length; i++) {
        for (var prop in books[i]) {
        console.log(` ${prop}: ${books[i][prop]} `);
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    console.log( '\nMeu nome é:', myName );

    var myName = ['J','A','D','S','O','N'];

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */

    console.log( '\nMeu nome é:', myName.join( '' ) );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    
    console.log( '\nMeu nome invertido é:', myName.reverse());
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log( '\nAgora em ordem alfabética:', myName.sort () );

}) ();
