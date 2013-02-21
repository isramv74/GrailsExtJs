Ext.define('FORM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',
    title : 'All Users',
    store: 'Users',
    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Email', dataIndex: 'email', flex: 1}
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Users',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }],
    tools:[
        {
        type:'refresh',
        tooltip: 'Refresh',
        handler: function(){
            var pnl = this.up('userlist');
            pnl.getStore().refresh();
            pnl.setTitle('All Users');
        } }]
});

console.log ("Log view.user.Viewport");