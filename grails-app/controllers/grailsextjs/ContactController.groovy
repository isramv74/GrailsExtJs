package grailsextjs

import grails.converters.JSON

class ContactController {

    def scaffold = Contact
    //def index() {}

    def getContact = {
        println "getContact"
        def contact = Contact.list(params).first()
        render( [ success:"true", data: contact ] as JSON )
    }

    def listJSON = {
        println "listJSON"

        println "Got request listJson" + request.reader.text
        println "params: "+params

        def listResult = [ total: Contact.count(), items: Contact.list(params)]
        render listResult as JSON
    }
}
