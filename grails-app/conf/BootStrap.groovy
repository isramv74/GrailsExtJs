import grailsextjs.User

class BootStrap {

    def init = { servletContext ->

        new User(name:'Sunil', email: 'sunil@wtc.com', department: 'FIN').save()
    }
    def destroy = {
    }
}
