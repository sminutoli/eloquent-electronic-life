const expect = require('expect');

const mustBePolymorphicWith = require('../src/mustBePolymorphicWith');

describe('mustBePolymorphicWith', () => {
  it('should match props and types', () => {
    const source = {
      val1: 22
    };
    const target = {
      val1: '22'
    };
    const tryBlock = () => mustBePolymorphicWith(source, target);
    expect(tryBlock).toThrow();
  });
  it('should handle a caller context', () => {
    const source = {
      val1: 22,
      mustBePolymorphicWith
    };
    const target = {
      val1: '22'
    };
    const tryBlock = () => source.mustBePolymorphicWith(target);
    expect(tryBlock).toThrow();
  });
  it('should match props and types', () => {
    const source = {
      val1: 22
    };
    const target = {
      val1(){}
    };
    const tryBlock = () => mustBePolymorphicWith(source, target);
    expect(tryBlock).toThrow();
  });
  describe('when source > target', () => {
    it('should not throw', () => {
      const source = {
        val1: 22,
        val2: 55
      };
      const target = {
        val1: 35
      };
      const tryBlock = () => mustBePolymorphicWith(source, target);
      expect(tryBlock).toNotThrow();
    });
    it('should return source', () => {
      const source = {
        val1: 22,
        val2: 55
      };
      const target = {
        val1: 35
      };
      const actual = mustBePolymorphicWith(source, target);
      const expected = source; 
      expect(actual).toBe(expected);
    });
  });
  describe('when source < target', () => {
    it('should throw missing val2', () => {
      const source = {
        val1: 22
      };
      const target = {
        val1: 35,
        val2: 55
      };
      const tryBlock = () => mustBePolymorphicWith(source, target);
      expect(tryBlock).toThrow();
    });
  });
  describe('when source delegates on target', () => {
    it('should match props and types', () => {
      const target = {
        val1: 22
      };
      const source = Object.create(target);
      const tryBlock = () => mustBePolymorphicWith(source, target);
      expect(tryBlock).toNotThrow();
    });
  });
});