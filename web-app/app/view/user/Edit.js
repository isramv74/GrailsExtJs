Ext.define('AM.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.useredit',
    requires: ['Ext.form.Panel'],
    title : 'Edit User',
    layout: 'fit',
    autoShow: true,
    height: 120,
    width: 280,
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                items: [ {
                    xtype: 'textfield',
                    name : 'name',
                    fieldLabel: 'Name'
                },{
                    xtype: 'textfield',
                    name : 'email',
                    fieldLabel: 'eMail'
                },
                  {

                } ]
            } ];
        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                action: 'cancel'
            }
        ];
        this.callParent(arguments);
    }
});
