Ext.define('CRUD.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'hbox',

    requires: [
        'CRUD.view.user.Form',
        'CRUD.view.user.Grid',
        'CRUD.view.user.Window'
    ],

    initComponent: function() {

        this.items = {
            layout: {
                type: 'border',
                align: 'stretch'
            },
            items: [{
                region: 'west',
                collapsible: true,
                title: 'Menú',
                width: 150,
                split: true
            }, {
                region: 'south',
                title: 'Panel inferior',
                collapsible: true,
                split: true,
                height: 100,
                minHeight: 100
            }, {
                region: 'east',
                title: 'Panel lateral',
                collapsible: true,
                split: true,
                width: 150
            }, {
                region: 'center',
                xtype: 'tabpanel',
                activeTab: 0,
                items: {
                    title: 'Usuarios',
                    xtype: 'gridusers'
            }
            }]
        };
        this.callParent();
    }
});

console.log("Log view.Viewport");
