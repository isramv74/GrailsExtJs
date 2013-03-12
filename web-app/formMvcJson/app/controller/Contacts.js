Ext.define('ExtMVC.controller.Contacts', {
    extend: 'Ext.app.Controller',

    models: ['Contact', 'FieldError', 'State'],

   	stores: ['States','Contacts'],

    views: ['contact.ContactForm'],

    refs: [{
        ref: 'ref1',
        selector: 'contactform'
    }],

    init: function() {
        
        this.control({
        	'contactform button[action=load]': {
        		click: this.loadFormData
        	},
        	'contactform button[action=submit]': {
        		click: this.submitFormData
        	},
            /*'contactform pagingtoolbar #afterNext': {
                click: this.loadFormData
            },
            'contactform pagingtoolbar #previous': {
                click: this.loadFormData
            },*/
            'contactform pagingtoolbar': {
                change: this.loadFormData
            }


        });
    },

    loadFormData: function() {

    	/*this.getRef1().getForm().load({
            method: 'GET',
            url: '/GrailsExtJs/contact/getContact',
            waitMsg: 'Loading...'
		});*/

        //formPanel.loadRecord(myStore.data.first());

        this.getRef1().getForm().loadRecord(this.getContactsStore().data.first());
        this.getRef1().getForm().loadRecord(this.getContactsStore().data.first());

	},
	
	submitFormData: function() {

    	this.getContactForm().getForm().submit({
            url: 'data/xml-form-errors.xml',
            submitEmptyText: false,
            waitMsg: 'Saving Data...',

            success: function(form, action) {
               Ext.Msg.alert('Success', action.result.msg);
            },
            failure: function(form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.msg : 'No response');
            }
        });
	}   
});