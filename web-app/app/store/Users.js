Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,  //loads data as soon as the store is initialized
    proxy: {
        type: 'ajax',
        api: {
            read: 'user/listJSON',
            create: 'app/data/user/saveJSON',
            update: 'user/saveJSON',
            save: 'user/saveJSON',
            destroy: 'app/data/users/destroy'
        },
        /*reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        },*/

        reader: new Ext.data.JsonReader({
                results: 'total',
                root:'items',
                id:'id'
            },
            [
                {name: 'name',email: 'email', department: 'department'}
            ]
        ),

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
    filterUsersByDepartment: function(deptCode) {
        this.clearFilter();
        this.filter([{
            property: 'department',
            value: deptCode
        }]);
    },
    refresh: function() {
        this.clearFilter();
        this.loadPage(1);
    } });