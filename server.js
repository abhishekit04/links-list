// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('users.json');
const middlewares = jsonServer.defaults();
const port = 8080 || 3000 || 4000 || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running here')
  
})

