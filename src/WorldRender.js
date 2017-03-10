const Grid = require('./Grid');

const WorldRender = {
  parseJSON(dataset, width){
    let world = Grid.create(width, dataset.length / width);
    dataset.forEach(world.setValueAtIndex, world);
    return world;
  }
}

module.exports = WorldRender;