Ext.define('FormXml.controller.Users', {
    extend: 'Ext.app.Controller',

    models: ['User', 'FieldError'],
    stores: ['Users'],
    views: ['user.UserForm'],

    refs: [{ref: 'ref1', selector: 'userform'},
            {ref: 'viewport', selector: 'viewport'}
        ],

    init: function() {

        this.control({
            'userform button[action=load]': {
                click: this.loadFormData
            },
            'userform button[action=submit]': {
                click: this.submitFormData
            },
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'userform pagingtoolbar': {
                change: this.loadFormData
            } 
        });
    },

    onPanelRendered: function() {
        console.log('Selector');
    },

    loadFormData: function() {
        this.getRef1().getForm().loadRecord(this.getUsersStore().data.first());
        this.getRef1().getForm().loadRecord(this.getUsersStore().data.first());
    },
    
    submitFormData: function() {

        this.getUserForm().getForm().submit({
            url: 'data/xml-form-errors.xml',
            submitEmptyText: false,
            waitMsg: 'Saving Data...',

            success: function(form, action) {
               Ext.Msg.alert('Success', action.result.msg);
            },
            failure: function(form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.msg : 'No response');
            }
        });
    }   
});
