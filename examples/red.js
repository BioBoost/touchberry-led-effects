const RGBLedBar = require('rgbledbar');
const i2c = require('i2c-bus');
const Color = require('color');
const Effects = require('touchberry-led-effects');

const i2c1 = i2c.open(1, (err) => {
  if (err) throw err;
  console.log("Opened i2c bus successfully");

  let ledbar = new RGBLedBar(i2c1);
  let effectsManager = new Effects.EffectManager();
  effectsManager.set_effect(new Effects.SingleColorEffect(ledbar, Color.rgb(100, 0, 0)));

  setTimeout(() => {
    effectsManager.stop();
  }, 5000);

});
