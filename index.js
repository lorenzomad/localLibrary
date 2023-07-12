let http = require('http')
let fs = require('fs')
let url = require('url')
const express = require('express')
const app = express()

const port = 3000


app.get('/' , (req, res) => {
    res.sendFile('./index.html', {root: __dirname })
})

app.get('/about' , (req, res) => {
    res.sendFile('./about.html', {root: __dirname })

})

app.get('/contact-me' , (req, res) => {
    res.sendFile('./contact-me.html', {root: __dirname })
})

app.get('*', function(req, res){
    res.status(404).sendFile('./404.html', {root: __dirname });
  });

app.listen(port, function(){
    console.log(`listening on port {port}`)
})



// http.createServer((req,res) => {
//     let path = req.url
//     let filename = '.' + path
    
//     if (path === '/') {
//         fs.readFile('./index.html', (err, data) => {
//             // if(err) { throw(err)}
//             res.writeHead(200, {'Content-type': 'text/html'})
//             res.write(data)
//             return res.end()
//         })
//     } else if (path === '/about') {
//         fs.readFile(filename + '.html', (err, data) => {
//             // if(err) { throw(err)}
//             res.writeHead(200, {'Content-type': 'text/html'})
//             res.write(data)
//             return res.end()
//         })
//     } else if(path === '/contact-me') { 
//         fs.readFile(filename + '.html', (err, data) => {
//             // if(err) { throw(err)}
//             res.writeHead(200, {'Content-type': 'text/html'})
//             res.write(data)
//             return res.end()
//         })
//     } else {
//         fs.readFile('404.html', (err, data) => {
//             // if(err) { throw(err)}
//             res.writeHead(404, {'Content-type': 'text/html'})
//             res.write(data)
//             return res.end()
//         })
//     }
    
    
// } ).listen(8080)

