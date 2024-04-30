/*
    C = > CREATE
    U = > UPDATE
    R = > READ
    D = > DELETE

    API Functions
    get => READ
    post => CREATE , For add new data
    put => UPDATE
    delete => DELETE Record 
*/

const HomeController = require('../../app/controllers/HomeController')
const AboutController = require('../../app/controllers/AboutController')
function routes(app) {
    app.get('/', HomeController.index) //index for fetch data 

    app.get('/about', AboutController.index) // for ferch data
    app.post('/about', AboutController.create) // for add new data
    app.put('/about/:id', AboutController.update) // update 
    app.delete('/about/:id', AboutController.destroy) // delete
    app.get('/about/:id', AboutController.show) // for fetch data of a index 


}

module.exports = routes;