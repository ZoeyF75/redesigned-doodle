import Phaser from 'phaser';
import deck from './assets/deck.png'; //0 - 51 frames, 52 is backside

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    } 

    preload ()
    {
        this.load.spritesheet('deck', deck, {
            frameWidth: 1053 / 13,
            frameHeight: 587 / 5
          });
    }
      
    create ()
    {  
        this.mysprite = this.add.sprite(200, 200, 'deck').setScale(0.5);
        this.anims.create( {
            key: "animation",
            frames: this.anims.generateFrameNumbers("deck"),
            frameRate: 5,
            repeat: -1
        });
        // this.mysprite.play("animation");
        this.mysprite.setFrame(51);
        
    }

    update ()
    {

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame,
    autoCenter: true
};

const game = new Phaser.Game(config);

