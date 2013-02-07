Ext.define('FORM.controller.Users', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Users'],
        models: ['User'],
        views: ['user.List'],
        refs: [{
            ref: 'usersList',
            selector: 'userlist'
        }] },
    cancelEditUser: function(button) {
        var win    = button.up('window');
        win.close();
    }
});


