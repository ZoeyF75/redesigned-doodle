import Phaser, { Game } from 'phaser';
import background from '../assets/table.jpeg';
import redchip from '../assets/chips.png';
import greenchip from '../assets/greenchip.png';
import bluechip from '../assets/bluechip.png';
import blackchip from '../assets/blackchip.png';
import whitechip from '../assets/whitechip.png';
import fiftycents from '../assets/50cent.png';
import { configWidth, configHeight } from '../assets/helper/gameStateVariables';
import { calculateBalance } from '../assets/helper/balance';
let gameState = {

};

class bet extends Phaser.Scene {
  constructor(){
		super({ key: 'bet' })
  }

  init(data) {
    this.balance = data.balance;
  }
  
  preload() {
    this.load.image('bg', background);
    this.load.image('whitechip', whitechip);
    this.load.image('bluechip', bluechip);
    this.load.image('redchip', redchip);
    this.load.image('greenchip', greenchip);
    this.load.image('blackchip', blackchip);
    this.load.image('fiftycents', fiftycents);

  }

  create() {
    this.add.image(configWidth / 2, configHeight / 2, 'bg');

    this.add.text((configWidth / 2) - 350, (configHeight / 2) - 250, `Your balance: $${this.balance}`, {
      fill: "#ffffff",
      fontSize: "24px",
      align: "center"
    });

    this.chips = calculateBalance(this.balance);
    let x = 0;
    if (this.chips.black > 0) {
      x == 0 ? x = 60 : x += 100;
      let y = (configHeight / 2) + 150;
      for (let i = 0; i < this.chips.black; i++) {
        this.add.image(x, y, 'blackchip').setScale(0.15);
        y -= 20;
      }
    }
    if (this.chips.green > 0) {
      x == 0 ? x = 60 : x += 100;
      let y = (configHeight / 2) + 150;
      for (let i = 0; i < this.chips.green; i++) {
        this.add.image(x, y, 'greenchip').setScale(0.15);
        y -= 20;
      }
    }
    if (this.chips.red > 0) {
      x == 0 ? x = 60 : x += 100;
      let y = (configHeight / 2) + 150;
      for (let i = 0; i < this.chips.red; i++) {
        this.add.image(x, y, 'redchip').setScale(0.15);
        y -= 20;
      }
    }
    if (this.chips.blue > 0) {
      x == 0 ? x = 60 : x += 100;
      let y = (configHeight / 2) + 150;
      for (let i = 0; i < this.chips.blue; i++) {
        this.add.image(x, y, 'bluechip').setScale(0.15);
        y -= 20;
      }
    }

    let y = (configHeight / 2) + 150; //50 cents will stack on top on ones if they exsist
    if (this.chips.white > 0) {
      x == 0 ? x = 60 : x += 100;
      for (let i = 0; i < this.chips.white; i++) {
        this.add.image(x, y, 'whitechip').setScale(0.15);
        y -= 20;
      }
    }
    if (this.chips.tan > 0) {
      x == 0 ? x = 60 : x += 100;
      for (let i = 0; i < this.chips.tan; i++) {
        this.add.image(x, y, 'fiftycents').setScale(0.15);
        y -= 20;
      }
    }

    this.add.text((configWidth / 2) + 60, (configHeight / 2) - 250, 'Select chips to add to your bet', {
      fill: "#ffffff",
      fontSize: "24px",
      align: "center",
      wordWrap: { width: 300, useAdvancedWrap: true }
    });


    const wc = this.add.sprite((configWidth / 2) + 200, (configHeight / 2) - 150, 'whitechip').setScale(0.15).setInteractive();
    const bc = this.add.image((configWidth / 2) + 200, (configHeight / 2) - 75, 'bluechip').setScale(0.15).setInteractive();;
    const rc = this.add.image((configWidth / 2) + 200, (configHeight / 2) , 'redchip').setScale(0.15).setInteractive();;
    const gc = this.add.image((configWidth / 2) + 200, (configHeight / 2) + 75, 'greenchip').setScale(0.15).setInteractive();;
    const blc = this.add.image((configWidth / 2) + 200, (configHeight / 2) + 150, 'blackchip').setScale(0.15).setInteractive();;
    
    wc.alpha = 0.5;
    bc.alpha = 0.5;
    rc.alpha = 0.5;
    gc.alpha = 0.5;
    blc.alpha = 0.5;

    gameState.updateAmount = false;
    //white chip
    gameState.betAmount = 15;
    wc.on('pointerover', function (event) {
      wc.alpha = 1;
    });
    wc.on('pointerout', function (event) {
      wc.alpha = 0.5;
    });
    wc.on('pointerdown', function (pointer) {
      gameState.betAmount += 1;
      gameState.updateAmount = true;
    });

    //blue chip
    bc.on('pointerover', function (event) {
      bc.alpha = 1;
    });
    bc.on('pointerout', function (event) {
      bc.alpha = 0.5;
    });
    bc.on('pointerdown', function (pointer) {
      gameState.betAmount += 2;
    });

    //red chip
    rc.on('pointerover', function (event) {
      rc.alpha = 1;
    });
    rc.on('pointerout', function (event) {
      rc.alpha = 0.5;
    });
    rc.on('pointerdown', function (pointer) {
      gameState.betAmount += 5;
    });

    //green chip
    gc.on('pointerover', function (event) {
      gc.alpha = 1;
    });
    gc.on('pointerout', function (event) {
      gc.alpha = 0.5;
    });
    gc.on('pointerdown', function (pointer) {
      gameState.betAmount += 25;
    });

    //black chip
    blc.on('pointerover', function (event) {
      blc.alpha = 1;
    });
    rc.on('pointerout', function (event) {
      blc.alpha = 0.5;
    });
    blc.on('pointerdown', function (pointer) {
      gameState.betAmount += 100;
    });

    this.betText = this.add.text((configWidth / 2) - 20, configHeight - 50, `$${gameState.betAmount}`, {
      fill: "#ffffff",
      fontSize: "24px",
      align: "center",
    });

  }

  update() {
    if (gameState.updateAmount) {
      this.betText.destroy();
      this.betText = this.add.text((configWidth / 2) - 20, configHeight - 50, `$${gameState.betAmount}`, {
        fill: "#ffffff",
        fontSize: "24px",
        align: "center",
      });
    }
  }
   
}

export default bet;