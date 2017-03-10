const indexFromVector = Symbol.for('Grid.indexFromVector');
const positions = Symbol.for('Grid.positions');
const Grid = {
  width: 0,
  height: 0,
  [positions]: [],
  [indexFromVector](aVector){
    return aVector.x + (aVector.y * this.width);
  },
  get(aVector){
    if(!this.isInside(aVector)) return;
    
    let index = this[indexFromVector](aVector);
    return this[positions][index];
  },
  set(aVector, aValue){
    if(!this.isInside(aVector)) return this;
    
    let theIndex = this[indexFromVector](aVector);
    return this.setValueAtIndex(aValue, theIndex);
  },
  setValueAtIndex(aValue, anIndex){  
    if(this[positions].length > anIndex) this[positions][anIndex] = aValue;
    return this;
  },
  isInside(aVector){
    let insideX = aVector.x >= 0 && aVector.x <= this.width;
    let insideY = aVector.y >= 0 && aVector.y <= this.height;
    return insideX && insideY;
  },
  create(widthToFix, heightToFix){
    const noLessThan = n => val => val <= n ? n : val;
    const noLessThanOne = noLessThan(1);
    let width = noLessThanOne(widthToFix);
    let height = noLessThanOne(heightToFix);
    return {
      __proto__: Grid,
      [positions]: Array(width * height),
      width,
      height
    }
  }
};
Object.seal(Grid);

module.exports = Grid;