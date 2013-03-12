Ext.define('CRUD.controller.Users',{
    extend: 'Ext.app.Controller',

    views: ['user.Grid', 'user.Form', 'user.Window'],
    models: ['User'],
    stores: ['Users'],

    refs: [
        {
            ref: 'list',
            selector: 'gridusers'
        }
    ],

    
    init: function() {
        this.control({
            'gridusers button[action=add]': {
                click: this.add
            },
            'gridusers button[action=delete]': {
                click: this.destroy
            },
            'usersform button[action=save]': {
                click: this.save
            },
            'viewport > panel': {
                render: this.onPanelRendered,
            },
        });
    },

    onPanelRendered: function(){
        console.log("carga panel");
    },
    
    add: function() {
        Ext.widget('usersadd');
    },

    save: function(btn){
        var me = this,
            form = btn.up('userform'),
            win = form.up('window'),
            basicForm = form.getForm(),
            grid = me.getList(),
            store = grid.getStore(),
            record = basicForm.getRecord(),
            values = basicForm.getValues();


        if(basicForm.isValid()){
            if(!record) {
                record = Ext.create('CRUD.model.User');
                record.set(values);
                store.add(record);
            } else record.set(values);

            win.close();
        } else Ext.Msg.alert('¡Alerta!','El formulario contiene errores. Por favor, vuelva a intentarlo');
    },

    destroy: function(){
        grid = this.getList();
        store = grid.getStore();
        records = grid.getSelectionModel().getSelection();

        if(records.length === 0) Ext.Msg.alert('¡Alerta!','No hay ninguna fila seleccionada');
        else {
            Ext.Msg.show({
                title : 'Confirmación',
                msg : '¿Está seguro de que desea borrar el registro seleccionado?',
                buttons : Ext.Msg.YESNO,
                icon : Ext.MessageBox.WARNING,
                scope : this,
                width : 400,
                fn : function(btn, ev){
                    if (btn == 'yes') {
                        store.remove(records);
                    }
                }
            });
        }
    } 
});

console.log("Log Controller");