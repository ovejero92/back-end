const http = require('http')

const server = http.createServer((request, response) => {
  response.end('Mi primer server con mi amiga Carolina Mailen Perez!!!!')
})

server.listen(8080, () => {
    console.log('listening on port 8080 ...');
})

// http://127.0.0.1:8080/  o  http://localhost:8080/

// NODEMON          (cuando instalamos nodemon es para que reinicie le servidor cada vez que yo actualize un archivo)
// npm install -g nodemon                        (-g es de manera global! )

// para ver el ip del wifi poner en l aterminal de la pc ipconfig

