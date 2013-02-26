console.log("Entra a pintar el formulario");
Ext.define('FormExtMVC.view.user.UserForm' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.UserForm',
    title : 'Formulario',
    frame: true,
    bodyStyle: 'padding:0 5px',
    width: 600,
    store: 'Users',

    fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 85,
            msgTarget: 'side'
     },

     items: [{
        xtype: 'fieldset',
        title: 'User Information',
        defaultType: 'textfield',
        defaults: {
            width: 280
        },
        items: [{
                xtype:'textfield',
                fieldLabel: 'First Name',
                anchor: '-5',
                name: 'name'
            }, {
                xtype:'textfield',
                fieldLabel: 'departament',
                anchor: '-5',
                name: 'departament'
            }]
        }, {
            items: [{
                xtype:'textfield',
                fieldLabel: 'Email',
                anchor: '100%',
                name: 'email',
                vtype:'email'
            }
        ]
    }],

    buttons: ['->', {
        text: 'Save',
        handler: function() {
            //Ext.Msg.alert('App',"Saving");
            record = formPanel.getRecord();
            values = formPanel.getValues();
            record.set(values);

            'Users'.sync();
        }
    }, {
        text: 'Cancel'
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Users',
        dock: 'bottom',
        beforePageText : 'Record',
        displayInfo: true
    }]
});

console.log ("Log view.user.UserForm");