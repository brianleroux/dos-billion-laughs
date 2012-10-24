var fs = require('fs')
,   path = require('path')
,   http = require('http')

module.exports = function(req, res) {
    return http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type':'xml'})
        fs.createReadStream(path.join(__dirname, 'lol.xml')).pipe(res)
    })
}
