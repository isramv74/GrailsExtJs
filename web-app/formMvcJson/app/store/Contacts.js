Ext.define('ExtMVC.store.Contacts',{
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Contact',
    autoLoad: true,  //loads data as soon as the store is initialized
    listeners: {
        load : function() {
            console.log ("Constacts store loaded");
        }
    },
    pageSize : 1,
    proxy: {
        type: 'ajax',
        api: {
            read: '/GrailsExtJs/contact/listJSON',
            create: '/GrailsExtJs/contact/save',
            update: '/GrailsExtJs/contact/update',
            save: '/GrailsExtJs/contact/save',
            destroy: '/GrailsExtJs/contact/delet'
        },
        reader: new Ext.data.JsonReader({
                results: 'total',
                root:'items',
                id:'id'
            },
            [
                {id:'id',first: 'first',email: 'email'}
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
        //this.loadPage(1);
    }
});

console.log("Contacts store run.");