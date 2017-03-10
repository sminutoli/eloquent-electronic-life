const EmptyElement = require('./EmptyElement');
const Directions = require('./Directions');
const setKindFor = require('./protoByKind').setKindFor;

const CritterElement = {
  __proto__: EmptyElement,
  [Symbol.for('GameElement.char')]: '*',
  act(aView){
    super.act(aView);
    let isEmptyTowardsDirection = EmptyElement.toString() == aView.look(this.direction);
    let direction = isEmptyTowardsDirection ? this.direction : aView.find(EmptyElement);
    return {
      type: 'move',
      direction
    }
  },
  create(){
    return Object.assign(
      super.create(),
      { 
        direction: Directions.random()
      }
    );
  }
}
setKindFor(CritterElement);
Object.seal(CritterElement);

module.exports = CritterElement;