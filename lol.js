var fs = require('fs')
,   path = require('path')
,   http = require('http')

module.exports = function(req, res) {
    return http.createServer(function(req, res) {
        var mime = req.url === '/lol.html' ? 'html' : 'xml'
        res.writeHead(200, {'Content-Type':mime})
        fs.createReadStream(path.join(__dirname, 'lol.' + mime)).pipe(res)
    })
}
