(function () {

'use strict';

import { expect } from 'chai';
import sum from '../src/sum.js'; // garante que o sum.js também seja ES Module

describe('#SUM', function () {
  it('Should SUM module to be a function', function () {
    expect(sum).to.be.a('function');
  });
});

})();
