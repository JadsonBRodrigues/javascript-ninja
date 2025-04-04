  
  
  (function (DOM) {
    'use strict';

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
  deve ser limpo, e somente os números devem ser enviados para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
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

    var $formCep = new DOM ('[data-js="form-cep"]');
    var $inputCEP = new DOM ('[data-js="input-cep"]');
    var $status = new DOM ('[data-js="status"]');
    var $logradouro = new DOM ('[data-js="logradouro"]');
    var $bairro = new DOM ('[data-js="bairro"]');
    var $estado = new DOM ('[data-js="estado"]');
    var $cidade = new DOM ('[data-js="cidade"]');
    var $cep = new DOM ('[data-js="código-postal"]');
    var ajax  = new XMLHttpRequest ();
    $formCep.on ('submit', handleSubmitFormCep);
    

    function handleSubmitFormCep (event) {
        event.preventDefault();
        console.log ($inputCEP.get()[0].value);
        var url = getURL ();
        ajax.open ('GET', url);
        ajax.send ();
        getMessage ('loading');
        ajax.addEventListener ('readystatechange', handleReadyStateChange);
    }

    function getURL () {
        return 'https://viacep.com.br/ws/{cep}/json/'.replace(
            '{cep}',
            clearCEP ()
            );
    }

    function clearCEP () {
      return $inputCEP.get()[0].value.replace (/\D/g, '');
    }

    function handleReadyStateChange () {
        if ( isRequestok () ) {
            fillCEPfiels()
        getMessage ('ok');
        }
      }

    function isRequestok () {
        return ajax.readyState === 4 && ajax.status === 200
    }

    function fillCEPfiels () {
        var data = parseData ();
        if (!data)
            getMessage ('error');
        console.log ('DATA', data);
        if (data.erro)
          return console.log ('CEP inválido', data);
        $logradouro.get()[0].textContent = data.logradouro;
        $bairro.get()[0].textContent = data.bairro;
        $estado.get()[0].textContent = data.uf;
        $cidade.get()[0].textContent = data.localidade;
        $cep.get()[0].textContent = data.cep;
    }

    function parseData () {
        var result;
        try {
            result = JSON.parse(ajax.responseText);
        }
        catch (e) {
            result = null;
        }
        return result;
    }

    function getMessage (type) {
      var cep = clearCEP();
      var messages = {
        loading: 'Buscando informações para o CEP [CEP]...'.replace('[CEP]', cep),
        ok: 'Endereço referente ao CEP [CEP]:'.replace('[CEP]', cep),
        error: 'Não encontramos o endereço para o CEP [CEP].'.replace('[CEP]', cep)
      };
    $status.get()[0].textContent = messages[type];
    }



}) (window.DOM);