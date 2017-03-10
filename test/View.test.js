const expect = require('expect');

const View = require('../src/View');
const Grid = require('../src/Grid');
const Vector = require('../src/Vector');
const mustBePolymorphicWith = require('../src/mustBePolymorphicWith');
const Directions = require('../src/Directions');
const EmptyElement = require('../src/EmptyElement');
const CritterElement = require('../src/CritterElement');

describe('View', () => {
  describe('.create()', () => {
    it('should create a kindof View', () => {
      const aWorld = Grid.create(10, 10);
      const aPosition = Vector.create(0, 0);
      const aView = View.create(aWorld, aPosition);
      const actual = mustBePolymorphicWith(aView, View);
      const expected = aView;
      expect(actual).toEqual(expected);
    });
    it('should throw with a no valid world', () => {
      const aWorld = {};
      const aPosition = Vector.create(0, 0);
      const tryBlock = () => mustBePolymorphicWith(View.create(aWorld, aPosition), View);
      expect(tryBlock).toThrow();
    });
    it('should throw with a no valid position', () => {
      const aWorld = Grid.create(10, 10);
      const aPosition = {};
      const tryBlock = () => mustBePolymorphicWith(View.create(aWorld, aPosition), View);
      expect(tryBlock).toThrow();
    });
  });
  describe('.look()', () => {
    beforeEach(function beforeLook(){
      const aWorld = Grid.create(10, 10);
      aWorld.set(Directions.e, 'east');
      aWorld.set(Directions.s, 'south');
      aWorld.set(Directions.se, 'southeast');
      const aPosition = Vector.create(0, 0);
      this.aView = View.create(aWorld, aPosition);
    });
    it('should return the east value', function lookEast() {
      const actual = this.aView.look(Directions.e);
      const expected = 'east';
      expect(actual).toEqual(expected);
    });
    it('should return the south value', function lookSouth() {
      const actual = this.aView.look(Directions.s);
      const expected = 'south';
      expect(actual).toEqual(expected);
    });
    it('should return the southeast value', function lookSouthEast() {
      const actual = this.aView.look(Directions.se);
      const expected = 'southeast';
      expect(actual).toEqual(expected);
    });
    it('should return the north value', function lookNorth() {
      const actual = this.aView.look(Directions.n);
      const expected = null;
      expect(actual).toBe(expected);
    });
    it('should return the west value', function lookWest() {
      const actual = this.aView.look(Directions.n);
      const expected = null;
      expect(actual).toBe(expected);
    });
  });
  describe('.find() and .findAll()', () => {
    beforeEach(function beforeFind(){
      const aWorld = Grid.create(10, 10);
      const aPosition = Vector.create(0, 0);
      aWorld.set(Directions.e, EmptyElement.create());
      aWorld.set(Directions.se, CritterElement.create());
      aWorld.set(Directions.s, EmptyElement.create());
      this.aView = View.create(aWorld, aPosition);
    });
    it('should find all EmptyElements', function lookWest() {
      const all = this.aView.findAll(EmptyElement);
      all.forEach( aDirection => {
        const actual = this.aView.look(aDirection).toString();
        const expected = EmptyElement.toString();
        expect(actual).toEqual(expected);
      });
    });
    it('should find an EmptyElement', function lookWest() {
      const aDirection = this.aView.find(EmptyElement);
      const actual = this.aView.look(aDirection).toString();
      const expected = EmptyElement.toString();
      expect(actual).toEqual(expected);
    });
  });
});