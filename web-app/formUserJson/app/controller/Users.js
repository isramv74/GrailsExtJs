Ext.define('FormXml.controller.Users', {
    extend: 'Ext.app.Controller',

    models: ['User', 'FieldError'],
    //stores: ['Users'],

    views: ['user.UserForm'],

    refs: [{
        ref: 'userForm',
        selector: 'userform'
    }],

    init: function() {

        this.control({
            'userform button[action=load]': {
                click: this.loadFormData
            },
            'userform button[action=submit]': {
                click: this.submitFormData
            },
            'viewport > panel': {
                render: this.loadFormData,
            }, 

        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    loadFormData: function() {
        this.getUserForm().getForm().load({
            url: '/GrailsExtJs/user/getUser',
            failure: function(form, action) {
                Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });  
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
