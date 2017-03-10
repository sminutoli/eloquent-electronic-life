const Vector = require('./Vector');

const Directions = Object.freeze({
  __proto__: null,
  's': Vector.create(0, 1),
  'n': Vector.create(0, -1),
  'w': Vector.create(-1, 0),
  'e': Vector.create(1, 0),
  get se(){ return this.s.plus(this.e) },
  get sw(){ return this.s.plus(this.w) },
  get ne(){ return this.n.plus(this.e) },
  get nw(){ return this.n.plus(this.w) },
  keys: function keys(){
    keys.memo = keys.memo || 'n-ne-e-se-s-sw-w-nw'.split('-');
    return keys.memo;
  },
  values: function values(){
    values.getVal = values.getVal || function(key){return this[key];}
    values.memo = values.memo || this.keys().map(values.getVal, this);
    return values.memo;
  },
  random() {
    const shuffle = () => Math.random() > .5 ? -1 : 1;
    const key = this.keys().sort(shuffle)[0]
    return this[key];
  }
});

module.exports = Directions;