const mustBePolymorphicWith = require('./mustBePolymorphicWith');

const GameElements = (() => {
  
  const elements = {};
  
  return {
    register(obj){
      mustBePolymorphicWith(obj, {
        act: Function.prototype,
        toString: Function.prototype
      });
      elements[obj] = obj;
      return true;
    },
    find(obj){
      return elements[obj];
    }
  };
  
})();

module.exports = GameElements;