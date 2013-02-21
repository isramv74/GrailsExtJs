Ext.define('FormExtMVC.controller.Users', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Users'],
        models: ['User'],
        views: ['user.UserFrom'],
        refs: [{
            ref: 'userFrom',
            selector: 'userFrom'
        }] },
    cancelEditUser: function(button) {
        var win    = button.up('window');
        win.close();
    }
});

console.log ("Log controller.Users");