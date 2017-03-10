function mustBePolymorphicWith(source, target){
  // if(this !== window && this != undefined) return mustBePolymorphicWith(this, source);
  const checkKey = key => { 
    const match = typeof source[key] == typeof target[key];
    if(!match) throw Error(`${key} doesnt match`);
  };
  Object.keys(target).forEach( checkKey );
  return source;
}

module.exports = mustBePolymorphicWith;