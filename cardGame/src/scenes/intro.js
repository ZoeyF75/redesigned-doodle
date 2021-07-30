import Phaser from 'phaser';
import start from '../assets/start.png';
import { configWidth, configHeight } from '../assets/helper/gameStateVariables';

class intro extends Phaser.Scene {
  constructor(){
		super({ key: 'intro' })
  }
  
  preload() {
    this.load.image('start', start);
  }

  create() {
    this.label = this.add.text((configWidth / 2) - 135, (configHeight / 2) - 150, '', {
      fill: "#ffffff",
      fontSize: "24px",
      align: "center"
    });
    this.typewriteText('click anywhere to...');

    setTimeout(() => {
      this.add.image((configWidth / 2), (configHeight / 2), 'start');
    }, 2500)

    this.input.on("pointerdown", () => {
      this.scene.start("deal");
      this.scene.remove("intro");
    });
  }

  typewriteText(text)
  {
    const length = text.length;
    let i = 0;
    this.time.addEvent({
      callback: () => {
        this.label.text += text[i]
        ++i
      },
      repeat: length - 1,
      delay: 100
    })
  }
}

export default intro;