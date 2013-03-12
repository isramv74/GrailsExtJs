Ext.define('CRUD.view.user.Window', {
    extend: 'Ext.window.Window',
    title: 'Añadir registro',
    width: 400,
    height: 200,
    layout: 'box',
    autoShow: true,
    modal: true,
    alias: 'widget.useradd',

    initComponent: function(){
        this.items = [
            Ext.widget('userform')
        ];
        this.callParent(arguments);
    }

});
console.log("Log view.user.Window");