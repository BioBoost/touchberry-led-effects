const RGBLedBar = require('rgbledbar');

class Effect {
  constructor(rgbledbar) {
    this.rgbledbar = rgbledbar;
  }

  start() {}
  stop() {}

  ledbar() {
    return this.rgbledbar;
  }
}

module.exports = Effect;