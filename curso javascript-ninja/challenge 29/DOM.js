

(function (win, document) {

function DOM (element) {
  if (!(this instanceof DOM))
    return new DOM (element);
  console.log (this);
    this.element = document.querySelectorAll(element);
    if (this.element.length === 1)
      return this.get();
    }

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

    DOM.prototype.get = function get (index) {
      if (!index)
        return this.element[0];
      return this.element[index];
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



 	win.DOM = DOM;

  }) (window, document);