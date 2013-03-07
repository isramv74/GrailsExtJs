package grailsextjs

import grails.converters.JSON

class ContactController {

    //def index() {}

    def getContact = {
        def contact = Contact.list(params).first()
        render( [ success:"true", data: contact ] as JSON )
    }
}
