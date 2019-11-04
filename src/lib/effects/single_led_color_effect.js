const Effect = require('./effect')
const RGBLedBar = require('rgbledbar');

class SingleColorEffect extends Effect {
  constructor(ledbar, index, color) {
    super(ledbar);
    this.index = index;
    this.color = color;
  }

  start() {
    this.ledbar().set_led(this.index, this.color);
  }

  stop() {
    this.ledbar().set_led(this.index, {red: 0, green: 0, blue: 0});
    // this.ledbar().clear_led(index);      // Not available YET
  }
}

module.exports = SingleColorEffect;
