const HomeController = require('../../app/controllers/HomeController')
const AboutController = require('../../app/controllers/AboutController')
function routes(app) {
    app.get('/', HomeController.index) //index for fetch data 
    app.get('/about', AboutController.index)
    app.get('/about', AboutController.create)

}

module.exports = routes;