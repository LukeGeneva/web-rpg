import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.tilemapTiledJSON('map', '/map.json');
  this.load.image('tile', '/tile.png');
}

function create() {
  const map = this.make.tilemap({ key: 'map' });
  const tileset = map.addTilesetImage('tile', 'tile');
  const layer = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);
}
