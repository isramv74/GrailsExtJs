Ext.require([
    'Ext.form.Panel',
    'Ext.layout.container.Anchor',
    'Ext.data.JsonReader'
]);

Ext.onReady(function() {

    Ext.define('PF.model.User', {
        extend: 'Ext.data.Model',
        fields: ['id', 'name', 'email','department']
    });

    //Ext.define('PF.store.Users', {
//    extend: 'Ext.data.Store',
    var myStore = Ext.create('Ext.data.Store', {
        model: 'PF.model.User',
        autoLoad: true,  //loads data as soon as the store is initialized
        listeners: {
                load : function() {
                    formPanel.loadRecord(myStore.data.first());
                    //Ext.Msg.alert('App',"load");
                }
            },
        pageSize : 1,
        proxy: {
            type: 'ajax',
            api: {
                read: '/GrailsExtJs/user/listJSON',
                create: 'app/data/user/saveJSON',
                update: '/GrailsExtJs/user/saveJSON',
                save: 'user/saveJSON',
                destroy: 'app/data/users/destroy'
            },
            limitParam : 'max',
            //pageParam : 'offset',
            startParam : 'offset',
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
        refresh: function() {
            this.clearFilter();
            this.loadPage(1);
        } });


    var formPanel =Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        title: 'Form Panel',
        bodyStyle: 'padding:5px 5px 0',
        width: 600,
        //url: 'save-form.php',
        store: myStore,
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        defaults: {
            border: false,
            xtype: 'panel',
            flex: 1,
            layout: 'anchor'
        },

        layout: 'hbox',
        items: [{
            items: [{
                xtype:'textfield',
                fieldLabel: 'First Name',
                anchor: '-5',
                name: 'name'
            }, {
                xtype:'textfield',
                fieldLabel: 'Company',
                anchor: '-5',
                name: 'company'
            }]
        }, {
            items: [{
                xtype:'textfield',
                fieldLabel: 'Last Name',
                anchor: '100%',
                name: 'last'
            },{
                xtype:'textfield',
                fieldLabel: 'Email',
                anchor: '100%',
                name: 'email',
                vtype:'email'
            }]
        }],
        buttons: ['->', {
            text: 'Save',
            handler: function() {
                //Ext.Msg.alert('App',"Saving");
                record = formPanel.getRecord();
                values = formPanel.getValues();
                record.set(values);

                myStore.sync();
            }
        }, {
            text: 'Cancel'
        }],
        dockedItems: [{
            xtype: 'pagingtoolbar',
            store: myStore,
            dock: 'bottom',
            beforePageText : 'Record',
            displayInfo: true
        }]
    });

});

