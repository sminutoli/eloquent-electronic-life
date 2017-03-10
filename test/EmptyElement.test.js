const expect = require('expect');

const EmptyElement = require('../src/EmptyElement');

describe('EmptyElement', () => {
  describe('.create()', () => {
    beforeEach(function setup(){
      this.anEmptyElement = EmptyElement.create();
    });
    it('should create a client object', function create(){
      const actual = EmptyElement.isPrototypeOf(this.anEmptyElement);
      const expected = true;
      expect(actual).toBe(expected);
    });
  });
  describe('.toString()', () => {
    it('should be a space string', function create(){
      const actual = EmptyElement.toString();
      const expected = ' ';
      expect(actual).toBe(expected);
    });
  });
  describe('.act()', () => {
    it('should throw when not a valid view is provided', function create(){
      const aView = {}
      const tryBlock = () => EmptyElement.act(aView);
      expect(tryBlock).toThrow();
    });
    it('should return a nothing action', function create(){
      const aView = {
        look: expect.createSpy(),
        find: expect.createSpy(),
        findAll: expect.createSpy()
      }
      const actual = EmptyElement.act(aView).type;
      const expected = 'nothing';
      expect(actual).toBe(expected);
    });
  });
});