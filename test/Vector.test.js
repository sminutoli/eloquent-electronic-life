const expect = require('expect');

const Vector = require('../src/Vector');

describe('Vector', () => {
  beforeEach(function setup(){
    this.aVector = Vector.create(10, 20);
    this.anotherVector = Vector.create(15, 30);
  });
  describe('.create()', () => {
    it('should create a client object', function test() {
      const actual = Vector.isPrototypeOf(this.aVector);
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('should have only x and y slots', function test() {
      const actual = Object.keys(this.aVector);
      const expected = ['x','y'];
      expect(actual).toEqual(expected);
    });
    it('should store the x on the client object', function test() {
      const actual = this.aVector.x;
      const expected = 10;
      expect(actual).toBe(expected);
    });
    it('should store the y on the client object', function test() {
      const actual = this.aVector.y;
      const expected = 20;
      expect(actual).toBe(expected);
    });
  });
  describe('.plus()', () => {
    it('should return a new vector', function test() {
      const result = this.aVector.plus(this.anotherVector);
      const actual = result != this.aVector && result != this.anotherVector;
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('should add the x and y', function test() {
      const actual = this.aVector.plus(this.anotherVector);
      const expected = Vector.create(25, 50);
      expect(actual).toEqual(expected);
    });
    it('should work with plain objects', function test() {
      const actual = this.aVector.plus({x: -5, y: 10});
      const expected = Vector.create(5, 30);
      expect(actual).toEqual(expected);
    });
  });
  describe('.equals()', () => {
    it('should assert equals', function test() {
      const actual = this.aVector.equals({x: 10, y: 20});
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('should assert not equals', function test() {
      const actual = this.aVector.equals({x: 10, y: 30});
      const expected = false;
      expect(actual).toBe(expected);
    });
  });
  
});