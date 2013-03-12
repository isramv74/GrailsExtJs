Ext.define('CRUD.view.user.Form', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.form.Field'],
    defaultType: 'fieldset',
    defaults: {
        allowBlank: false,
        labelAlign: 'left',
        labelWidth: 150
    },
    alias: 'widget.userform',

    padding: 10,
    style: 'background-color: #fff;',
    border: false,

    initComponent: function(){

        this.items = [
            {
                name: 'name',
                fieldLabel: 'Nombre'
            },
            {
                name: 'email',
                fieldLabel: 'Email',
                vtype: 'email'
            },
            {
                name: 'department',
                fieldLabel: 'Departamento'
            }
        ];

        /*this.bbar = [
            {
                text: 'Guardar',
                action: 'save',
                itemId: 'salvar',
                iconCls: 'save'
            }
        ];*/

        this.callParent(arguments);
    }
});
console.log("Log view.user.Form");