const Vector = {
  x: 0,
  y: 0,
  plus(anotherVector){
    return this.create(this.x + anotherVector.x, this.y + anotherVector.y);
  },
  equals(anotherVector){
    return this.x  == anotherVector.x && this.y == anotherVector.y;
  },
  create(x, y){
    return {
      __proto__: Vector,
      x,
      y
    };
  }
};
Object.seal(Vector);

module.exports = Vector;