const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/')
    {
        res.end()
    }
    if(req.url === '/about')
 {
 res.end('here is our short history')
 }
 res.end(`
 <h1> Oops </h1>
 <p>not avali</p>
<a href="/">back home</a>
 `)
})

server.listen(8000);