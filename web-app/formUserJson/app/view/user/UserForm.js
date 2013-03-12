Ext.define('FormXml.view.user.UserForm' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.userform',
    store: 'Users',

    frame: true,
    title:'Json User Form',
    bodyPadding: 5,
    waitMsgTarget: true,

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
                fieldLabel: 'id',
                name: 'id'
            },{
                fieldLabel: 'First Name',
                emptyText: 'First Name',
                name: 'name'
            },{
                fieldLabel: 'Department',
                emptyText: 'Department',
                name: 'department'
            }, {
                fieldLabel: 'Email',
                name: 'email',
                vtype:'email'
            }
        ]
    }],

    buttons: [{
        text: 'Load',
        action: 'load'
    }, {
        text: 'Submit',
        disabled: true,
        formBind: true,
        action: 'submit'
    }], 

    dockedItems: [{
        xtype: 'pagingtoolbar',
        //store: 'store', 
        dock: 'bottom',
        displayInfo: true,
        beforePageText : 'Record'
    }]
    
 });   