Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Users'],
        models: ['User'],
        views: ['user.Edit', 'user.List'],
        refs: [{
            ref: 'usersList',
            selector: 'userlist'
        }] },
    init: function(app) {
        this.control({
            'userlist dataview': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            'useredit button[action=cancel]': {
                click: this.cancelEditUser
            } });
        app.on('departmentselected', function(app, model) {
            this.getUsersStore().filterUsersByDepartment(model.
                get('code'));
            this.getUsersList().setTitle(model.get('name') + ' Users');
        }, this);
    },
    editUser: function(grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();
        edit.down('form').loadRecord(record);
    },
    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);


        if(false && form.getForm().isValid()){
            //if there are no errors then send the Add request to server
            Ext.Ajax.request({
                url: 'user/update',
                params: {
                    company: 1,
                    //this encodes the form values to a JSON object
                    addData: Ext.encode(form.getValues())
                },
                scope:this,
                //method to call when the request is successful
                success: this.onSaveSuccess,
                //method to call when the request is a failure
                failure: this.onSaveFailure
            });
        }


        //var store = this.getUsersStore();
        //store.add(values);
        //store.sync();

        /*
        var user = Ext.create('User',{
            id : 1,
            name : 'test',
            email : '@',
            department : 'IT'
            });
        user.save();
        */
        //console.log('record: '+record);
        //console.log('values: '+values);

        win.close();

        this.getUsersStore().sync();
    },
    cancelEditUser: function(button) {
        var win    = button.up('window');
        win.close();
    }
});


