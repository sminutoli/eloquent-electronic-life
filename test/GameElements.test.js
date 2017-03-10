const expect = require('expect');

const GameElements = require('../src/GameElements');
const EmptyElement = require('../src/EmptyElement');

describe('GameElements', () => {
  describe('.register()', () => {
    it('should register a new element', function register(){
      const actual = GameElements.register(EmptyElement);
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('should throw when isnt a GameElement', function register(){
      const tryBlock = () => GameElements.register({});
      expect(tryBlock).toThrow();
    });
  })
  describe('.find()', () => {
    it('should find a element', function find(){
      GameElements.register(EmptyElement)
      const actual = GameElements.find(EmptyElement);
      const expected = EmptyElement;
      expect(actual).toBe(expected);
    });
  });
});