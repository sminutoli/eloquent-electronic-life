const expect = require('expect');

const objectIdentity = require('../src/objectIdentity');

describe('objectIdentity', () => {
  it('should return this', () => {
    const obj = {};
    const actual = objectIdentity.call(obj);
    const expected = obj;
    expect(actual).toBe(expected);
  });
  it('should return client object', () => {
    const obj = {
      something: objectIdentity
    };
    const actual = obj.something();
    const expected = obj;
    expect(actual).toBe(expected);
  });
});