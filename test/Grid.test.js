const expect = require('expect');

const Grid = require('../src/Grid');
const Vector = require('../src/Vector');

describe('Grid', () => {
  beforeEach(function setup(){
    this.aGrid = Grid.create(10, 10);
  });
  describe('.create()', () => {
    it('should create a client object', function test() {
      const actual = Grid.isPrototypeOf(this.aGrid);
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('should have width and height slot', function test() {
      const actual = Object.keys(this.aGrid).sort();
      const expected = ['width','height'].sort();
      expect(actual).toEqual(expected);
    });
    it('should be 1x1 min', function test() {
      const actual = Grid.create(0, 0);
      const expected = Grid.create(1, 1);
      expect(actual).toEqual(expected);
    });
    it('should handle negative values', function test() {
      const actual = Grid.create(-20, 10);
      const expected = Grid.create(1, 10);
      expect(actual).toEqual(expected);
    });
  });
  describe('.isInside()', () => {
    it('should detect an inner position', function test() {
      const insideOfGrid = Vector.create(5, 1);
      const actual = this.aGrid.isInside(insideOfGrid);
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('should detect an out of bounds', function test() {
      const outOfGrid = Vector.create(11, 1);
      const actual = this.aGrid.isInside(outOfGrid);
      const expected = false;
      expect(actual).toBe(expected);
    });
  });
  describe('.set()', () => {
    it('should set the right slot', function test() {
      const col1row1 = Vector.create(1, 1);
      const actual = this.aGrid.set(col1row1, 'bam!').get(col1row1);
      const expected = 'bam!';
      expect(actual).toBe(expected);
    }); 
    it('should do nothing on a wrong slot', function test() {
      const col14row1 = Vector.create(14, 1);
      const actual = this.aGrid.set(col14row1, 'bam!').get(col14row1);
      const expected = undefined;
      expect(actual).toBe(expected);
    });
  });
  describe('.setValueAtIndex()', () => {
    it('should set the right slot', function test() {
      const col1row1 = Vector.create(1, 1);
      const actual = this.aGrid.setValueAtIndex('bam!', 11).get(col1row1);
      const expected = 'bam!';
      expect(actual).toBe(expected);
    });
  });
});