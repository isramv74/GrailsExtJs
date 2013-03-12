Ext.define('CRUD.model.User',{
	extend		: 'Ext.data.Model', 
	fields		: ['id', 'name', 'email', 'department']
	//idProperty	: 'id'
});

console.log("Log model.User");