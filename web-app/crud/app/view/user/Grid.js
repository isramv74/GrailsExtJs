Ext.define('CRUD.view.user.Grid',{
    extend: 'Ext.grid.Panel',
    title : 'Grid usuario',
    itemId : 'gridusers',
    xtype : 'gridusers',
    store  : 'Users',

    initComponent: function(){

        this.columns = [
            {
                header: 'Id',
                dataIndex: 'id',
                width: 50,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {
                header: 'Nombre',
                dataIndex: 'name',
                width: 200,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {
                header: 'Email',
                dataIndex: 'email',
                width: 200,
                editor: {
                    xtype: 'textfield',
                    vtype: 'email',
                    allowBlank: false
                }
            },
            {
                header: 'Departamento',
                dataIndex: 'department',
                width: 100,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }
        ];

        this.selType = 'rowmodel',

            this.plugins = [
                Ext.create('Ext.grid.plugin.RowEditing', {
                    clicksToEdit: 2,
                    autoCancel: false,
                    saveBtnText: 'Editar',
                    cancelBtnText: 'Cancelar',
                    errorSumary: false,
                    action: 'update'
                })
            ],

            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Añadir',
                            iconCls: 'add',
                            action: 'add'
                        },
                        {
                            text: 'Borrar',
                            iconCls: 'delete',
                            action: 'delete'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    store: 'Users',
                    beforePageText: 'Página',
                    afterPageText: 'de {0}',
                    displayMsg: 'Mostrando {0} - {1} de {2}',
                    emptyMsg: 'No hay datos que mostrar',
                    dock: 'bottom',
                    displayInfo: true
                }
            ];

        this.callParent(arguments);
    }

});

console.log("Log view.user.Grid");
