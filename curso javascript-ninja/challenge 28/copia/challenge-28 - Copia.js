  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente com os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha os campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
    

(function (DOM) {
    'use strict';

    function DOM (element) {
      this.element = document.querySelectorAll(element);
    }

    DOM.prototype.on = function on (event, callback) {
      Array.prototype.forEach.call(this.element, function (element) {
        element.addEventListener(event, callback, false);
      });
      };

    DOM.prototype.off = function off (event, callback) {
      Array.prototype.forEach.call(this.element, function (element) {
        element.removeEventListener(event, callback, false);
      });
      };

    DOM.prototype.get = function get () {
      return this.element;
    };


    DOM.prototype.forEach = function forEach () {
        return Array.prototype.forEach.apply (this.element, arguments);
    };

    var $a = new DOM ('[data-js="link"]');
    console.log($a);
    $a.forEach (function (item) {
      console.log (item.firstChild.nodeValue);
    });

    DOM.prototype.map = function map () {
      return Array.prototype.map.apply (this.element, arguments);
    };

    var $a = new DOM ('[data-js="link"]');
    console.log($a);
    var dataJS = $a.map (function (item) {
      return item.getAttribute('data-js');
    });

    console.log (dataJS);

    DOM.prototype.filter = function filter () {
      return Array.prototype.filter.apply (this.element, arguments);
    };

    DOM.prototype.reduce = function reduce () {
      return Array.prototype.reduce.apply (this.element, arguments);
    };

    var $a = new DOM ('[data-js="link"]');
    console.log($a);
    var dataJS1 = $a.reduce (function (acc, actual) {
      return acc + ' ' + actual.getAttribute ('data-js');
    }, 0);

    console.log (dataJS1);

    DOM.prototype.reduceRight = function reduceRight () {
      return Array.prototype.reduceRight.apply (this.element, arguments);
    };

    DOM.prototype.every = function every () {
      return Array.prototype.every.apply (this.element, arguments);
    };

    DOM.prototype.some = function some () {
      return Array.prototype.some.apply (this.element, arguments);
    };


    DOM.isArray = function isArray(param) {
      return Object.prototype.toString.call(param) === '[object Array]';
    };

    console.log(DOM.isArray([1, 2, 3]));

    DOM.isObject = function isObject (param) {
      return Object.prototype.toString.call (param) === '[object Object]';
    }
    console.log (DOM.isObject ({a: 1, b: 2}));

    DOM.isFunction = function isFunction (param) {
      return Object.prototype.toString.call (param) === '[object Function]';
    }
    console.log (DOM.isFunction (function () {}));

    DOM.isNumber = function isNumber (param) {
      return Object.prototype.toString.call (param) === '[object Number]';
    }
    console.log (DOM.isNumber (10));

    DOM.isString = function isString (param) {
      return Object.prototype.toString.call (param) === '[object String]';
    }
    console.log (DOM.isString ('amor e sexo'));

    DOM.isBoolean = function isBoolean (param) {
      return Object.prototype.toString.call (param) === '[object Boolean]';
    }
    console.log (DOM.isBoolean (false));

    DOM.isNull = function isNull (param) {
      return Object.prototype.toString.call (param) === '[object Null]'
      || Object.prototype.toString.call (param) === '[object Undefined]';
    }
    console.log (DOM.isNull (undefined))

    var $inputCEP = new DOM ('[data-js="input-cep"]');
    var $formCEP = new DOM ('[data-js="form-cep"]');
    var $status = new DOM ('[data-js="status"]');
    var $cep = new DOM ('[data-js="CEP"]');
    var ajax = new XMLHttpRequest ();
    $formCEP.on ('submit', handleSubmitFormCEP);

    function handleSubmitFormCEP (event) {
    event.preventDefault ();
    ajax.open ('GET', 'https://viacep.com.br/ws/{cep}/json/'.replace (
        '{cep}', 
        clearCEP()
        ));
    ajax.send ();
    ajax.addEventListener ('readystatechange', handleReadyStateChange);
    $status.get()[0].textContent = 'Buscando informações para o CEP [CEP]...'.replace ('[CEP]', clearCEP)
    }

    var clearCEP = function clearCEP () {
        return $inputCEP.get()[0].value.replace (/\D/g, '');
    }

    function handleReadyStateChange () {
        if ( requestIsOk() ) {
            fillCepForm();
            $status.get()[0].textContent = 'Endereço referente ao CEP [CEP]'.replace ('[CEP]', clearCEP)
        };
        if (requestIsNotOk()) {
          $status.get()[0].textContent = 'Não encontramos o endereço para o CEP [CEP]'.replace ('[CEP]', clearCEP)
          clearCEPForm();
        };
    }

    function requestIsOk () {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    function requestIsNotOk () {
      return ajax.status === 400;
    }

    function fillCepForm () {
        var data = parseData ();
        var $logradouro = new DOM ('[data-js="Logradouro"]');
        var $bairro = new DOM ('[data-js="Bairro"]');
        var $estado = new DOM ('[data-js="Estado"]');
        var $cidade = new DOM ('[data-js="Cidade"]');
        $logradouro.get()[0].textContent = data.logradouro;
        $bairro.get()[0].textContent = data.bairro;
        $estado.get()[0].textContent = data.uf;
        $cidade.get()[0].textContent = data.localidade;
        $cep.get()[0].textContent = data.cep;
        }

        function clearCEPForm () {
        var data = parseData ();
        var $logradouro = new DOM ('[data-js="Logradouro"]');
        var $bairro = new DOM ('[data-js="Bairro"]');
        var $estado = new DOM ('[data-js="Estado"]');
        var $cidade = new DOM ('[data-js="Cidade"]');
        $logradouro.get()[0].textContent = ' -';
        $bairro.get()[0].textContent = ' -';
        $estado.get()[0].textContent = ' -';
        $cidade.get()[0].textContent = ' -';
        $cep.get()[0].textContent = ' -';
        }

    function parseData () {
        var result;
        try {
            result = JSON.parse (ajax.responseText);
        }
        catch (e) {
            result = null;
        }
        return result;
    }


}) (window.DOM);