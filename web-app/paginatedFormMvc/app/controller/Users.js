Ext.define('FormExtMVC.controller.Users', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Users'],
        models: ['User'],
        views: ['user.UserForm'],
        refs: [{
            ref: 'UserForm',
            selector: 'UserForm'
        }] },
    
/*
    loadFormData: function() {

        this.getUserForm().getForm().load({

            url: '/GrailsExtJs/user/getUser',
            waitMsg: 'Loading...'
        });

        console.log("loadForm");
    },
    
    submitFormData: function() {

        this.getUserForm().getForm().submit({
            url: '/GrailsExtJs/user/save',
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
    */   
});

console.log ("Log controller.Users");