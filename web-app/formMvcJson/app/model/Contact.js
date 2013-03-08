Ext.define('ExtMVC.model.Contact',{
    extend: 'Ext.data.Model',
    fields: [
        'first',
        'last',
        'company', 
        'email', 
        'state',
        {name: 'dob', type: 'date', dateFormat: 'm/d/Y'}
    ]
});