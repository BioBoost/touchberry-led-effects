const Effect = require('./effect')
const RGBLedBar = require('rgbledbar');

class SingleColorEffect extends Effect {
  constructor(rgbledbar, color) {
    super(rgbledbar);
    this.color = color;
  }

  start() {
    for (let i = 0; i < RGBLedBar.NUMBER_OF_RGB_LEDS; i++) {
      this.ledbar().set_led(i, this.color);
    }
  }

  stop() {
    this.ledbar().all_off();
  }
}

module.exports = SingleColorEffect;
