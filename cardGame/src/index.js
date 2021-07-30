import Phaser from 'phaser';
import intro from './scenes/intro';
import deal from './scenes/deal';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    } 


}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [intro, deal],
    autoCenter: true
};

const game = new Phaser.Game(config);

