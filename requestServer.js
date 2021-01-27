const http = require('http');
const port = 8080;
const listenServerPort = 3000;
let request = {
    value: '1'
}
const options = {
    hostname: `localhost`,
    port: listenServerPort,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'PATCH',
    path: `/`,
}

const server = http.createServer();

server.listen(port, () => {
    console.log(`Server listening on ${port}`)
})
const getRequest = http.request(options, (res)=>{
    res.on('data', d => {
        process.stdout.write(d)
    })
})

getRequest.on(`error`, (error)=>{
    console.log(error);
})
getRequest.write(JSON.stringify(request));
getRequest.end();

