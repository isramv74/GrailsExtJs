Ext.define('FormExtMVC.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['FormExtMVC.view.user.UserForm'],
    layout: 'border',
    config: {
        items: [{
            region: 'center',
            xtype: 'UserForm'
        }]
    } });

console.log ("Log view.ViewPort");