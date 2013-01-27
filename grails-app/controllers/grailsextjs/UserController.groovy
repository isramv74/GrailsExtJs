package grailsextjs

import grails.converters.JSON


class UserController {

    def scaffold = User
    //def index() { }

    def saveJSON(){

        println "Got request " + request.reader.text
        println 'Update: ' + params

        render '{success:"true"}'
    }

    def listJSON = {
        def listResult = [ total: User.count(), items: User.list(params)]
        render listResult as JSON
    }
}
