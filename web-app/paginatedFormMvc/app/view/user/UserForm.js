console.log("Entra a pintar el formulario");
Ext.define('FormExtMVC.view.user.UserForm' ,{
    extend: 'Ext.form.Panel',
    title : 'FormularioMVC',
    alias : 'widget.UserForm',
    width: 400, height: 230,
    store: 'Users', 

    refs: [{
        ref: 'UserForm',
        selector: 'UserForm'
    }],

    fieldDefaults: {
        labelAlign: 'middle'
    },

    defaults: {
        border: false,
        layout: 'anchor'
    },

    items: [{
        xtype:'textfield',
        fieldLabel: 'id',
        anchor: '70%',
        name: 'id'
    }, {
        xtype:'textfield',
        fieldLabel: 'Name',
        anchor: '70%',
        name: 'name'
    },{
        xtype:'textfield',
        fieldLabel: 'Email',
        anchor: '70%',
        name: 'email',
        vtype:'email'
    }],


    buttons: [{
        text: 'Load',
        handler: function() {
            //Ext.Msg.alert('form',"load");
            //record = UserForm.getRecord();
            console.log("Load");
            //values = UserForm.getValues();
            //record.set(values);
            //'Users'.sync();
        }
    }, {
        text: 'Submit',
        disabled: true,
        formBind: true,
        action: 'submit'
    }],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Users',
        dock: 'bottom',
        beforePageText : 'Record',
        displayInfo: true
    }],

    renderTo: Ext.getBody() 

});

console.log ("Log view.user.UserForm");