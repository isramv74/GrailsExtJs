Ext.define('FormXml.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'hbox',
    
    requires: [
        'FormXml.view.user.UserForm'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'userform',
                    reader: Ext.create('Ext.data.JsonReader',{
                        model:'FormXml.model.User',
                        record: 'data', 
                        successProperty: '@success'
                    }),

                    errorReader: Ext.create('Ext.data.reader.Xml', {
                        model: 'FormXml.model.FieldError',
                        record : 'field',
                        successProperty: '@success'
                    })

                }
            ]
        });
                
        me.callParent(arguments);
    }
});
