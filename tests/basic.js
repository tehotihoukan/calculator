"use strict";
const assert = require('chai').assert;
const calc = require('../calc');

describe("40 + 2 equals 42", () => {
  let a = 40;
  let b = 2;
  it("should return 42", () => {
    assert.equal(calc.add(a, b) , 42)
  });
});


describe("geek value equals 42", () => {
  let geek = 42;
  it("should return 42", () => {
    assert.equal(geek, 42)
  });
});
