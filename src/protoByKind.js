function getProtoByKind(obj){
  return obj[Symbol.for('Proto.kind')]
}
function setKindFor(obj, kind = obj){
  obj[Symbol.for('Proto.kind')] = kind;
}

module.exports = {
  getProtoByKind,
  setKindFor
};