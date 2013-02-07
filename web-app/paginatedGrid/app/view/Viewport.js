Ext.define('FORM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['FORM.view.user.List'],
    layout: 'border',
    config: {
        items: [{
            region: 'center',
            xtype: 'userlist'
        }]
    } });