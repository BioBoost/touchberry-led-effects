class EffectManager {
  constructor() {
    this.set_effect(null);
  }

  set_effect(effect) {
    this.stop();
    this.effect = effect;
    this.start();
  }

  stop() {
    if (this.effect) {
      this.effect.stop();
    }
  }

  start() {
    if (this.effect) {
      this.effect.start();
    }
  }
}

module.exports = EffectManager;