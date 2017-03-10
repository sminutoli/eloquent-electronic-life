const expect = require('expect');

const GameElements = require('../src/GameElements');
const EmptyElement = require('../src/EmptyElement');
const CritterElement = require('../src/CritterElement');
const Grid = require('../src/Grid');
const Vector = require('../src/Vector');

const WorldRender = require('../src/WorldRender');

describe('WorldRender', () => {
  describe('.parseJSON()', () => {
    beforeEach(function beforeParse(){
      this.world = WorldRender.parseJSON([
      ' ', ' ', ' ', '*', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', '*', ' '
      ], 5);
    });
    it('should return the right width', function testWidth() {
      const actual = this.world.width;
      const expected = 5;
      expect(actual).toEqual(expected);
    });
    it('should return the right height', function testHeight() {
      const actual = this.world.height;
      const expected = 3;
      expect(actual).toEqual(expected);
    });
    it('should have an EmptyElement at 0,0', function test0_0() {
      const actual = this.world.get(Vector.create(0, 0));
      const expected = EmptyElement.toString();
      expect(actual).toEqual(expected);
    });
    it('should have a CritterElement at 0,3', function test3_0() {
      const actual = this.world.get(Vector.create(3, 0));
      const expected = CritterElement.toString();
      expect(actual).toEqual(expected);
    });
  });
});