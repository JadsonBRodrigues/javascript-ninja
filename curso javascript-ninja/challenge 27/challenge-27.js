/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elemento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

(function (win, doc) {
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



}) (window, document);