import Phaser from 'phaser';
import background from '../assets/table.jpeg';
import deck from '../assets/deck.png'; //0 - 51 frames, 52 is backside
import { createDeck } from '../assets/helper/deck';
import { configHeight, configWidth } from '../assets/helper/gameStateVariables';

class deal extends Phaser.Scene {
  constructor(){
		super({ key: 'deal' })
  }
  
  preload ()
  {
    this.load.image('bg', background);
    this.load.spritesheet('deck', deck, {
      frameWidth: 1053 / 13,
      frameHeight: 587 / 5
    });
  }

  create ()
  {  
    this.add.image(configWidth / 2, configHeight / 2, 'bg').setScale(0.4);
    this.text = this.add.text((config.width / 2) - 50, (config.height / 2) - 50, 'First Deal', { 
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
      fontSize: 24
    });

    setTimeout(() => {
      if (this.text) {
        this.text.destroy();
        }
    }, 3000);

    this.shuffledDeck = createDeck(); //returns array of shuffled deck
    this.mysprite = this.add.sprite(200, 200, 'deck').setScale(0.5);

    this.anims.create( {
      key: "animation",
      frames: this.anims.generateFrameNumbers("deck"),
      frameRate: 5,
      repeat: -1
    });
    // this.mysprite.play("animation");
    this.mysprite.setFrame(this.shuffledDeck[0]);
  }

  update ()
  {

  }
}

export default deal;