import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 640,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.tilemapTiledJSON('field', '/field.json');
  this.load.image('overworld', '/overworld.png');
}

function create() {
  const map = this.make.tilemap({ key: 'field' });
  const tileset = map.addTilesetImage('overworld', 'overworld');
  const layer = map.createStaticLayer('base', tileset, 0, 0);
}
