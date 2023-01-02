const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.send('hello world !')

})

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));