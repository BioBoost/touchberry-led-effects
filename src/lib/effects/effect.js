class Effect {

  constructor(ledbar) {
    this.rgbledbar = ledbar;
  }

  start() {}
  stop() {}

  ledbar() {
    return this.rgbledbar;
  }
}

module.exports = Effect;