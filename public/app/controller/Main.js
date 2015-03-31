Ext.define('Leds.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'main formpanel checkboxfield': {
              change: 'onLedSelect'
            }
        }
    },
    onLedSelect: function (field, value){
      console.log(field.getName());
      alert(value);
      Meteor.call("updateLeds", field.getName(),value, function(error, result) {
        if(error){
          alert(error);
        }
        else{
          console.log(result);
        }
      });
    },
    launch: function () {
      //alert(234234);
    }
});
