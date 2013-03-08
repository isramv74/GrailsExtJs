import grailsextjs.Contact
import grailsextjs.User

class BootStrap {

    def init = { servletContext ->

        new User(name:'Sunil', email: 'sunil@wtc.com', department: 'FIN').save()

        new Contact(first: 'Israel', last: 'Martinez', company: 'DT', email: 'x@y.com',state: 'DF', dob: new Date()).save()
    }
    def destroy = {
    }
}
