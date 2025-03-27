(function (DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.9p

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app () {
    return {
      init: function init () {
      console.log ('app init');
      this.companyInfo();
      this.initEvents();
    },

    initEvents: function initEvents () {
      var $formRegister = new DOM('[data-js="form-register"]');
      $formRegister.on('submit', this.handleSubmit(this));
    },

    handleSubmit: function handleSubmit (event) {
      event.preventDefault();
      console.log ('submit');
      var $tablecar = new DOM ('[data-js="table-car"]').get()[0];
      $tablecar.appendChild(app.createNewcar());
    },


 createNewcar: function createNewcar () {
    var $fragment = document.createDocumentFragment();
    var $tr = document.createElement ('tr');
    var $tdImage = document.createElement ('td');
    var $tdBrand = document.createElement ('td');
    var $tdYear = document.createElement ('td');
    var $tdSign = document.createElement ('td');
    var $tdColor = document.createElement ('td');

    $tdImage.textContent = new DOM ('[data-js="image"]').get()[0].value;
    $tdBrand.textContent = new DOM ('[data-js="brand-model"]').get()[0].value;
    $tdYear.textContent = new DOM ('[data-js="year"]').get()[0].value;
    $tdSign.textContent = new DOM ('[data-js="sign"]').get()[0].value;
    $tdColor.textContent = new DOM ('[data-js="color"]').get()[0].value;

    $tr.appendChild($tdImage);
    $tr.appendChild($tdBrand);
    $tr.appendChild($tdYear);
    $tr.appendChild($tdSign);
    $tr.appendChild($tdColor);

      $fragment.appendChild($tr);
        return $fragment;
    },

    companyInfo: function companyInfo () {
      var ajax = new XMLHttpRequest ();
      ajax.open('GET', 'company.json', true);
      ajax.send();
      ajax.addEventListener ('readystatechange', this.getCompanyInfo, false);
    },

    getCompanyInfo: function getCompanyInfo() {
    if (!app().isReady.call (this))
      return;

    var data = JSON.parse (this.responseText);
    var $companyName = new DOM ('[data-js="company-name"]');
    var $companyPhone = new DOM ('[data-js="company-phone"]');
    $companyName.textContent = data.name;
    $companyPhone.textContent = data.phone;
   
    },


   isReady: function isReady () {
    return this.readyState === 4 && this.status === 200;
   }

 };

}

  app().init();

})(window.DOM);
