console.log("Log Entra a modelo");
Ext.define('FormExtMVC.model.User', {
    extend: 'Ext.data.Model',   
	fields: [        
		{ name: 'id',           type: 'int'},        
		{ name: 'name',         type: 'string'},        
		{ name: 'email',  type: 'string'},       
		{ name: 'departament', type: 'string' }    
	]
});

console.log ("Log model.User");


