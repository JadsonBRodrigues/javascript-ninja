(function () {
    'use strict';

    var post = new XMLHttpRequest ();
    post.open ('POST', 'http://localhost:3000/car');
    post.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
    post.send('image=https://mobilidade.estadao.com.br/wp-content/uploads/2021/11/carro-por-assinatura-o-ano-todo.jpg&brandModel=FiatUno&year=2020&string=BTS-5259&color=azul');
    
    post.onreadystatechange = function () {
        if (post.readyState === 4)
        {console.log ('Carro cadastrado!', post.responseText);
        }};

    var ajax = new XMLHttpRequest ();
    ajax.open ('GET', 'http://localhost:3000/car');
    ajax.send ();
    ajax.addEventListener ('readystatechange', function (e) {
        if (ajax.readyState === 4 && ajax.status === 200)
        {console.log (ajax.responseText)}
    }, false);

    

}) ();

