const RGBLedBar = require('rgbledbar');
const i2c = require('i2c-bus');
const Color = require('color');
const Effects = require('touchberry-led-effects');

const i2c1 = i2c.open(1, (err) => {
  if (err) throw err;
  console.log("Opened i2c bus successfully");

  let ledbar = new RGBLedBar(i2c1);

  let effectsManager = new Effects.EffectManager(ledbar);
  let red = new Effects.SingleColorEffect(ledbar, Color.rgb(100, 0, 0));

  effectsManager.set_effect(red);

  setTimeout(() => {
    effectsManager.set_effect(null);
  }, 5000);

});
