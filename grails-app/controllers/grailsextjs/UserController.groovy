package grailsextjs

import grails.converters.JSON


class UserController {

    def scaffold = User
    //def index() { }

    def saveJSON(){

        String json = request.reader.text.toString()
        println "Got request saveJson" + json

        def o = JSON.parse(json)

        def userInstance = User.get(o.data.id)

        userInstance.properties = o.data

        if (!userInstance.save(flush: true)) {
            println "data: " +userInstance
        }

        println 'Update: ' + params

        render '{success:"true"}'
    }

    def listJSON = {

        println "Got request listJson" + request.reader.text
        println "params: "+params

        def listResult = [ total: User.count(), items: User.list(params)]
        render listResult as JSON
    }


    def getUser = {
        def user = User.list(params).first()
        render( [ success:"true", data: user ] as JSON )
    }

    def updateJSON={

        println ("update Json")
        def update = 'hola'
        render( [ success:"true", data: update ] as JSON )   
    
    }

    def more = {
        (1..100).each {
            new User(name:'Sunil'+it, email: 'sunil@wtc.com', department: 'FIN').save()
        }

        render 'done'
    }
}
