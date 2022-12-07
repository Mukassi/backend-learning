const fs = require('fs')
const http = require('http');
const url = require('url');

// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", 'utf-8');

// console.log(textIn)

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);

// console.log(fs.readFileSync('./txt/output.txt', 'utf-8'))

//Non-blocking, asynchronous way

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//     })
// })
// console.log('Will read file')


//Server

const server = http.createServer((req, res) =>{
    console.log(req.url)
    res.end("Hello from the server!")
})


server.listen(4000, '127.0.0.1', () => {
    console.log('Listening to request on port 4000')
}) 