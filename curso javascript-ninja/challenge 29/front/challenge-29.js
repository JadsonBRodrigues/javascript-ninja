(function($) {
  'use strict';

  function app () {
    return {
      init: function init () {
        console.log ('app init');
        this.companyInfo();
        this.initEvents();
        this.getCars(); // ✅ carrega os carros ao iniciar
      },

      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit.bind(this));
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
        
        var car = {
          image: $('[data-js="image"]').get().value,
          brandModel: $('[data-js="brand-model"]').get().value,
          year: $('[data-js="year"]').get().value,
          plate: $('[data-js="sign"]').get().value,
          color: $('[data-js="color"]').get().value
        };

        this.saveCar(car); // ✅ envia o carro para o servidor via POST
      },

      saveCar: function saveCar(car) {
        var ajax = new XMLHttpRequest();
        ajax.open('POST', 'http://localhost:3000/car', true);
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send(JSON.stringify(car));

        ajax.addEventListener('readystatechange', function() {
          if (this.readyState === 4 && this.status === 200) {
            console.log('Carro cadastrado!', this.responseText);
            app().addCarToTable(car); // ✅ adiciona na tabela depois do POST
          }
        });
      },

      getCars: function getCars() { // primeiro enviamos os dados com o POST, depois pegamos p listar com o GET
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'http://localhost:3000/car', true);
        ajax.send();

        ajax.addEventListener('readystatechange', function() {
          if (this.readyState === 4 && this.status === 200) {
            var cars = JSON.parse(this.responseText);
            cars.forEach(function(car) {
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
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if (!app().isReady.call(this))
          return;

        var data = JSON.parse(this.responseText);
        var $companyName = $('[data-js="company-name"]').get();
        var $companyPhone = $('[data-js="company-phone"]').get();
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      },

    };
  };

  app().init();

})(window.DOM);
