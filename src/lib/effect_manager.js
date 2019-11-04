class EffectManager {
  constructor() {
    this.effects = [];
  }

  clear() {
    this.stop();
    this.effects = [];
  }

  add(effect) {
    if (effect) {
      this.effects.push(effect);
    }
  }

  start() {
    this.effects.forEach(eff => eff.start());
  }

  stop() {
    this.effects.forEach(eff => eff.stop());
  }
}

module.exports = EffectManager;