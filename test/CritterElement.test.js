const expect = require('expect');

const EmptyElement = require('../src/EmptyElement');
const CritterElement = require('../src/CritterElement');
const mustBePolymorphicWith = require('../src/mustBePolymorphicWith');

describe('CritterElement', () => {
  describe('.create()', () => {
    beforeEach(function setup(){
      this.aCritter = CritterElement.create();
    });
    it('should create a client object', function create(){
      const actual = CritterElement.isPrototypeOf(this.aCritter);
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('should delegate on EmptyElement', function create(){
      const actual = EmptyElement.isPrototypeOf(this.aCritter);
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('should have a valid direction', function create(){
      const actual = mustBePolymorphicWith(this.aCritter.direction, {x: 0, y: 1});
      const expected = this.aCritter.direction;
      expect(actual).toBe(expected);
    });
  });
  describe('.toString()', () => {
    it('should be the * char', function create(){
      const actual = CritterElement.toString();
      const expected = '*';
      expect(actual).toBe(expected);
    });
  });
  describe('.act()', () => {
    beforeEach(function beforeAct(){
      this.lookResult = EmptyElement.create();
      this.findResult = {};
      this.aView = {
        look: expect.createSpy().andReturn(this.lookResult),
        find: expect.createSpy().andReturn(this.findResult),
        findAll: expect.createSpy().andReturn([this.findResult])
      }
    });
    it('should return a move action', function act(){
      const actual = CritterElement.create().act(this.aView).type;
      const expected = 'move';
      expect(actual).toBe(expected);
    });
    it('should return the actual direction when is possible', function act(){
      const aCritter = CritterElement.create();
      const actual = aCritter.act(this.aView).direction;
      const expected = aCritter.direction;
      expect(actual).toBe(expected);
    });
    it('should return the provided direction by the view', function act(){
      this.aView.look = expect.createSpy().andReturn(null);
      const actual = CritterElement.create().act(this.aView).direction;
      const expected = this.findResult;
      expect(actual).toBe(expected);
    });
  });
});