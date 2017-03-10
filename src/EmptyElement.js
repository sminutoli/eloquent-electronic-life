const objectIdentity = require('./objectIdentity');
const getProtoByKind = require('./protoByKind').getProtoByKind;
const setKindFor = require('./protoByKind').setKindFor;
const mustBePolymorphicWith = require('./mustBePolymorphicWith');
const View = require('./View');

const EmptyElement = {
  [Symbol.for('GameElement.char')]: ' ',
  create(){
    return {
      __proto__: getProtoByKind(this)
    }
  },
  toString(){
    return this[Symbol.for('GameElement.char')];
  },
  act(aView){
    mustBePolymorphicWith(aView, View)
    return {
      type: 'nothing'
    };
  }
};
setKindFor(EmptyElement);
Object.seal(EmptyElement);

module.exports = EmptyElement;