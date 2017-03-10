const expect = require('expect');

const Directions = require('../src/Directions');
const Vector = require('../src/Vector');

describe('Directions', () => {
  it('should be a enum object', function test() {
    const actual = Object.getPrototypeOf(Directions);
    const expected = null;
    expect(actual).toBe(expected);
  });
  it('should be a frozen object', function test() {
    const actual = Object.isFrozen(Directions);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should have a south vector', function test() {
    const actual = Directions.s;
    const expected = Vector.create(0, 1);
    expect(actual).toEqual(expected);
  });
  it('should have a south weast vector', function test() {
    const actual = Directions.sw;
    const expected = Vector.create(-1, 1);
    expect(actual).toEqual(expected);
  });
  it('should have a weast vector', function test() {
    const actual = Directions.w;
    const expected = Vector.create(-1, 0);
    expect(actual).toEqual(expected);
  });
  it('should have a north weast vector', function test() {
    const actual = Directions.nw;
    const expected = Vector.create(-1, -1);
    expect(actual).toEqual(expected);
  });
  it('should have a north vector', function test() {
    const actual = Directions.n;
    const expected = Vector.create(0, -1);
    expect(actual).toEqual(expected);
  });
  it('should have a north east', function test() {
    const actual = Directions.ne;
    const expected = Vector.create(1, -1);
    expect(actual).toEqual(expected);
  });
  it('should have a east', function test() {
    const actual = Directions.e;
    const expected = Vector.create(1, 0);
    expect(actual).toEqual(expected);
  });
  it('should have a south east', function test() {
    const actual = Directions.se;
    const expected = Vector.create(1, 1);
    expect(actual).toEqual(expected);
  });
});