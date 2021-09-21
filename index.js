const express = require('express')
const http  = require('http');
const app = express()
const port = 7854

const server = http.createServer(app)



app.get('/',(req, res)=>{
    res.send("Hi")
})



server.listen(port ,()=>{
    console.log('=========================')
    console.log('Sketsh Node Server Online')
    console.log('=========================')
    console.log(` http://localhost:${port}`)
    console.log('=========================')
})