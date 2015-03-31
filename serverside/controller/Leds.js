var Cylon = Meteor.npmRequire("cylon");

Meteor.methods({
  updateLeds: function (color, value){
    Cylon.robot({
      connections: {
        raspi: { adaptor: 'raspi' }
      },

      devices: {
        blueLed: { driver: 'led', pin: 11 },
        greenLed:{ driver: 'led', pin: 15 }
      },

      work: function(my) {
        my[color+'Led'][value ? 'turnOn':'turnOff']();
        return {
          color:color,
          value :value,
          value:color+'Led'+ (value ? 'turnOn':'turnOff')
        };
      }
    }).start();
  }
});
