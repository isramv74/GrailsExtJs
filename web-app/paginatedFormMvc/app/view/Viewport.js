Ext.define('FormExtMVC.view.Viewport', {
    extend: 'Ext.form.Panel',
    requires: ['FormExtMVC.view.user.UserForm'],
    layout: 'border',
    frame: true,
    bodyPadding: 5,
    config: {
        items: [{
            region: 'center',
            xtype: 'UserForm'
        }]
    } });

console.log ("Log view.ViewPort");

