const mustBePolymorphicWith = require('./mustBePolymorphicWith');
const Grid = require('./Grid');
const Vector = require('./Vector');
const Directions = require('./Directions');

const View = {
  look(aDirection){
    mustBePolymorphicWith(aDirection, Vector);
    var nextDirection = this[Symbol.for('View.position')].plus(aDirection);
    return this[Symbol.for('View.world')].get(nextDirection) || null;
  },
  find(anElement){
    const shuffle = () => Math.random() > .5 ? -1 : 1;
    return this.findAll(anElement).sort(shuffle)[0];
  },
  findAll(anElement){
    const byElement = direction => this.look(direction) == anElement.toString();
    return Directions
              .values()
              .filter(byElement)
  },
  create(aWorld, aPosition){
    return {
      __proto__: View,
      [Symbol.for('View.world')]: mustBePolymorphicWith(aWorld, Grid),
      [Symbol.for('View.position')]: mustBePolymorphicWith(aPosition, Vector)
    }
  }
};
Object.defineProperty(View, 'create', { enumerable: false }); // TOREVIEW: fixes the mustBePolymorphic...
Object.seal(View);

module.exports = View;