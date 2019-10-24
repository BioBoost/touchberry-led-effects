class EffectManager {
  constructor(rgbledbar) {
    this.ledbar = rgbledbar;
    this.set_effect(null);
  }

  set_effect(effect) {
    if (this.effect) {
      this.effect.stop();
    }
    this.effect = effect;
    
    if (this.effect) {
      this.effect.start();
    }
  }
}

module.exports = EffectManager;