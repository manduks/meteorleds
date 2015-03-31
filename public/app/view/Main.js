Ext.define('Leds.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
      'Ext.TitleBar',
      'Ext.form.Panel',
      'Ext.form.FieldSet'
    ],
    config: {
      layout:'fit',
        items: [{
              docked: 'top',
              xtype: 'titlebar',
              title: 'Leds example'
          },{
                xtype:'formpanel',
                items:[{
                  xtype:'fieldset',
                  items:[{
                    xtype:'checkboxfield',
                    name:'blue',
                    label:'Blue'
                  },{
                    xtype:'checkboxfield',
                    name:'Green',
                    label:'Green'
                  }]
                }]
            }
        ]
    }
});
