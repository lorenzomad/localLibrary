let http = require('http')
let fs = require('fs')
let url = require('url')



http.createServer((req,res) => {
    let path = req.url
    let filename = '.' + path
    
    if (path === '/') {
        fs.readFile('./index.html', (err, data) => {
            // if(err) { throw(err)}
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else if (path === '/about') {
        fs.readFile(filename + '.html', (err, data) => {
            // if(err) { throw(err)}
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else if(path === '/contact-me') { 
        fs.readFile(filename + '.html', (err, data) => {
            // if(err) { throw(err)}
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        fs.readFile('404.html', (err, data) => {
            // if(err) { throw(err)}
            res.writeHead(404, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
    
    
} ).listen(8080)

