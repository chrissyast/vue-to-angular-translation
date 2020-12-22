'use strict';

let http = require('http');
let express = require('express')
let port = process.env.PORT || 8080

let app = express()

let server = http.createServer(app)

app.use(express.static(__dirname + '/dist/vue-to-angular-translation-ten'))

server.listen(port, () => console.log(`Server started on port ${port}`))
