Ext.define('FormExtMVC.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['FormExjMVC.view.user.UserForm'],
    layout: 'border',
    config: {
        items: [{
            region: 'center',
            xtype: 'userForm'
        }]
    } });

console.log ("Log view.ViewPort");