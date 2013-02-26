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
    cancelEditUser: function(button) {
        var win    = button.up('window');
        win.close();
    }
});

console.log ("Log controller.Users");