const express = require('express')
const routes = require('./utils/routes/index')
const app = express()
const PORT = 5500

routes(app);

app.listen(PORT, function () {
    console.log(`Server is Running Successfully.! at  http://localhost:${PORT}`)
});