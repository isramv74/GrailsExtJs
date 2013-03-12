Ext.define('FormXml.store.Users', {
    extend: 'Ext.data.Store',
    model: 'FormXml.model.User',
    autoLoad: true,  //loads data as soon as the store is initialized
    pageSize : 1,
    proxy: {
        type: 'ajax',
        api: {
            read: '/GrailsExtJs/user/listJSON',
            create: '/GrailsExtJs/user/saveJSON',
            update: '/GrailsExtJs/user/saveJSON',
            save: '/GrailsExtJs/user/saveJSON',
            destroy: '/GrailsExtJs/user/delete'
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
        }         
    },

    refresh: function() {
        this.clearFilter();
    }
});

console.log ("Log store.Users");