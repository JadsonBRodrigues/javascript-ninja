  (function($) {
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
  aparecer no final da tabela.

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
 
  Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
  coluna na tabela, com um botão de remover.

  Ao clicar nesse botão, a linha da tabela deve ser removida.
  */

  function app () {
    return {
      init: function init () {
        console.log ('app init');
        this.companyInfo();
        this.initEvents();
        this.getCars();
      },

      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
        
        var car = {
          $image: $('[data-js="image"]').get().value,
          $brandModel: $('[data-js="brand-model"]').get().value,
          $year: $('[data-js="year"]').get().value,
          $plate: $('[data-js="sign"]').get().value,
          $color: $('[data-js="color"]').get().value
      };

      this.saveCar(car);

      }, 

      saveCar = function saveCar() {
        var ajax = new XMLHttpRequest();
        ajax.open('POST', 'http://localhost:3000/car', true);
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send(JSON.stringify(car));

        ajax.addEventListener('readystatechange', function () {
          if (this.readyState === 4 && this.status === 200) {
            console.log('Carro cadastrado!', this.responseText);
            app().addCarToTable(car);
        }
        });

      },

      getCars: function getCars() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'http://localhost:3000/car', true);
        ajax.send();

        ajax.addEventListener('readystatechange', function () {
          if (this.readyState === 4 && this.status === 200) {
            var cars = JSON.parse(this.responseText);
            cars.forEach(function (car) {
              app().addCarToTable(car);
        });
        }
      });
      },

      addCarToTable: function addCarToTable(car) {
        var $tableCar = $('[data-js="table-car"]').get();
        var $tr = document.createElement('tr');

        var $tdImage = document.createElement('td');
        var $image = document.createElement('img');
        $image.src = car.image;
        $tdImage.appendChild($image);

        var $tdBrand = document.createElement('td');
        $tdBrand.textContent = car.brandModel;

        var $tdYear = document.createElement('td');
        $tdYear.textContent = car.year;

        var $tdSign = document.createElement('td');
        $tdSign.textContent = car.plate;

        var $tdColor = document.createElement('td');
        $tdColor.textContent = car.color;

        var $tdRemove = document.createElement('td');
        var $removeButton = document.createElement('button');
        $removeButton.textContent = 'Remover';
        $removeButton.addEventListener('click', this.deleteCar);
        $tdRemove.appendChild($removeButton);

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdSign);
        $tr.appendChild($tdColor);
        $tr.appendChild($tdRemove);

        $tableCar.appendChild($tr);
      },

      deleteCar: function deleteCar(e) {
      e.target.closest('tr').remove();
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open ('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if (!app().isReady.call(this))
          return;

          var data = JSON.parse (this.responseText);
          var $companyName = $ ('[data-js="company-name"]').get();
          var $companyPhone = $ ('[data-js="company-phone"]').get();
          $companyName.textContent = data.name;
          $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200
      },

    };
  };


  app().init();


})(window.DOM);
