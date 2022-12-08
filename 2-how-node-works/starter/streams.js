const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //1 Variant
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // })
    // readable.on('end', () => {
    //     res.end()
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode= 500;
    //     res.end('File not found')
    // })
    
    //2 Variant
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    //readableSource.pipe(writeableDest)
});

server.listen(7000, '127.0.0.1', ()=> {
    console.log('Listening...')
});