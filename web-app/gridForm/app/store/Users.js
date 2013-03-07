Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        //startParam: undefined,
        api: {
            read: '../user/listJSON',
            create: 'app/data/user/saveJSON',
            update: 'user/updateJSON',
            save: 'user/saveJSON',
            destroy: 'app/data/users/destroy'
        },

        reader: new Ext.data.JsonReader({
                results: 'total',
                root:'items',
                id:'id'
            },
            [
                {name: 'name',email: 'email', department: 'department'}
            ]
        ),

        limitParam : 'max',
        startParam : 'offset',
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: false,
            root: 'data'
        },
        listeners: {
            load : function(store) {
                store.each(function(record) {
                    record.commit();
                });
            },
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        } },
    refresh: function() {
        this.clearFilter();
        this.loadPage(1);
    }
});