Ext.define('FormExtMVC.store.Users', {
    extend: 'Ext.data.Store',
    model: 'FormExtMVC.model.User',
    autoLoad: true,  //loads data as soon as the store is initialized
    proxy: {
        type: 'ajax',
        api: {
            read: '../user/listJSON',
            create: 'app/data/user/saveJSON',
            update: 'user/saveJSON',
            save: 'user/saveJSON',
            destroy: 'app/data/users/destroy'
        },

        reader: new Ext.data.JsonReader({
                results: 'total',
                root:'items',
                id:'id'
            },
            [
                {id:'id',name: 'name',email: 'email'}
            ]
        ),
        limitParam : 'max',
        //pageParam : 'offset',
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

console.log ("Log store.Users");