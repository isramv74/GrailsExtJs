Ext.require([
    'Ext.form.Panel',
    'Ext.layout.container.Anchor'
]);

Ext.onReady(function() {
    var formPanel =Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        title: 'Form Panel',
        bodyStyle: 'padding:5px 5px 0',
        width: 600,
        //url: 'save-form.php',
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        defaults: {
            border: false,
            xtype: 'panel',
            flex: 1,
            layout: 'anchor'
        },

        layout: 'hbox',
        items: [{
            items: [{ 
                xtype:'textfield',
                fieldLabel: 'First Name',
                anchor: '-5',
                name: 'name'
            }, {
                xtype:'textfield',
                fieldLabel: 'Company',
                anchor: '-5',
                name: 'company'
            }]
        }, {
            items: [{
                xtype:'textfield',
                fieldLabel: 'Last Name',
                anchor: '100%',
                name: 'last'
            },{
                xtype:'textfield',
                fieldLabel: 'Email',
                anchor: '100%',
                name: 'email',
                vtype:'email'
            }]
        }],
        buttons: ['->', {
            text: 'Save'
        }, {
            text: 'Cancel'
        }],
        dockedItems: [{
            xtype: 'pagingtoolbar',
            //store: store,   // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        }]
    });

    // load form data
    formPanel.getForm().load({
        method: 'GET',
        url: '/GrailsExtJs/user/getUser',
        failure: function() {
            Ext.Msg.alert('Error', 'Unable to load form data');
        },
        waitTitle: 'Loading...'
    });
});

